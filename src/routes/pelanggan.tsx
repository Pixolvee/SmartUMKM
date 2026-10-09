import { createFileRoute } from '@tanstack/react-router';
import { Customers } from '@/components/business/modules';
export const Route = createFileRoute('/pelanggan')({
 head: () => ({ meta: [{ title: 'Pelanggan — SmartUMKM' }, { name: 'description', content: 'Kelola data pelanggan dan riwayat belanja.' }, { property: 'og:title', content: 'Pelanggan — SmartUMKM' }, { property: 'og:description', content: 'Kelola data pelanggan dan riwayat belanja.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Customers,
});
