import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from '@/components/business/dashboard';
export const Route = createFileRoute('/')({
 head: () => ({ meta: [{ title: 'Dashboard — SmartUMKM' }, { name: 'description', content: 'Ringkasan penjualan, stok dan aktivitas usaha Anda.' }, { property: 'og:title', content: 'Dashboard — SmartUMKM' }, { property: 'og:description', content: 'Ringkasan penjualan, stok dan aktivitas usaha Anda.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Dashboard,
});
