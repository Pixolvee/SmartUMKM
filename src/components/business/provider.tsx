import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { initialBusiness, type Business } from "@/lib/business";
import { toast } from "sonner";
import type { User } from "@supabase/supabase-js";
const Context = createContext<{
  data: Business;
  update: (next: Business) => void;
  user: User | null;
  ready: boolean;
  saving: boolean;
}>({ data: initialBusiness, update: () => {}, user: null, ready: false, saving: false });
export function BusinessProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<Business>(initialBusiness);
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    const load = async () => {
      try {
        const { data: authData } = await supabase.auth.getUser();
        const currentUser = authData?.user ?? null;
        setUser(currentUser);
        if (currentUser) {
          const { data: row, error } = await supabase
            .from("business_workspaces")
            .select("data")
            .eq("owner_id", currentUser.id)
            .maybeSingle();
          if (error) toast.error("Data usaha belum dapat dimuat.");
          if (row && row.data && typeof row.data === "object" && "products" in row.data)
            setData(row.data as unknown as Business);
          else setData({ products: [], sales: [], customers: [], expenses: [], drafts: [] });
        } else {
          setData(initialBusiness);
        }
      } catch (err) {
        console.warn("Gagal memuat akun pengguna, menggunakan mode demo:", err);
        setUser(null);
        setData(initialBusiness);
      } finally {
        setReady(true);
      }
    };
    void load();
    let unsubscribe = () => {};
    try {
      const { data: listener } = supabase.auth.onAuthStateChange((event) => {
        if (["SIGNED_IN", "SIGNED_OUT", "USER_UPDATED"].includes(event))
          setTimeout(() => void load(), 0);
      });
      if (listener?.subscription) unsubscribe = () => listener.subscription.unsubscribe();
    } catch {
      // ignored if auth subscription is unavailable
    }
    return () => unsubscribe();
  }, []);
  function update(next: Business) {
    setData(next);
    if (!user) return;
    setSaving(true);
    void (async () => {
      try {
        const { error } = await supabase.from("business_workspaces").upsert(
          {
            owner_id: user.id,
            data: JSON.parse(JSON.stringify(next)),
            updated_at: new Date().toISOString(),
          },
          { onConflict: "owner_id" },
        );
        setSaving(false);
        if (error) toast.error("Perubahan belum tersimpan. Silakan coba kembali.");
      } catch {
        setSaving(false);
        toast.error("Perubahan belum tersimpan. Silakan coba kembali.");
      }
    })();
  }
  return (
    <Context.Provider value={{ data, update, user, ready, saving }}>{children}</Context.Provider>
  );
}
export const useBusiness = () => useContext(Context);
