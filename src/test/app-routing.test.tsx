import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { supabase } from "@/integrations/supabase/client";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("handles Supabase client safely without throwing in demo mode", async () => {
    const res = await supabase.auth.getUser();
    expect(res).toBeDefined();
    expect(res.data.user).toBeNull();

    const change = supabase.auth.onAuthStateChange(() => {});
    expect(change).toBeDefined();
    expect(change.data.subscription).toBeDefined();
  });
});
