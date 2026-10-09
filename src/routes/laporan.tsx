import { createFileRoute } from '@tanstack/react-router';
import { Reports } from '@/components/business/modules';
export const Route = createFileRoute('/laporan')({
 head: () => ({ meta: [{ title: 'Laporan & Analitik — SmartUMKM' }, { name: 'description', content: 'Laporan transaksi, pendapatan dan margin produk.' }, { property: 'og:title', content: 'Laporan & Analitik — SmartUMKM' }, { property: 'og:description', content: 'Laporan transaksi, pendapatan dan margin produk.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Reports,
});
