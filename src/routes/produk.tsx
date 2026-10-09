import { createFileRoute } from '@tanstack/react-router';
import { Products } from '@/components/business/modules';
export const Route = createFileRoute('/produk')({
 head: () => ({ meta: [{ title: 'Produk & Inventaris — SmartUMKM' }, { name: 'description', content: 'Kelola produk, harga dan persediaan usaha.' }, { property: 'og:title', content: 'Produk & Inventaris — SmartUMKM' }, { property: 'og:description', content: 'Kelola produk, harga dan persediaan usaha.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Products,
});
