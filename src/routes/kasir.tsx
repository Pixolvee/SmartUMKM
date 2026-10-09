import { createFileRoute } from '@tanstack/react-router';
import { POS } from '@/components/business/modules';
export const Route = createFileRoute('/kasir')({
 head: () => ({ meta: [{ title: 'Kasir — SmartUMKM' }, { name: 'description', content: 'Kasir cepat dengan pencatatan pembayaran dan struk transaksi.' }, { property: 'og:title', content: 'Kasir — SmartUMKM' }, { property: 'og:description', content: 'Kasir cepat dengan pencatatan pembayaran dan struk transaksi.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: POS,
});
