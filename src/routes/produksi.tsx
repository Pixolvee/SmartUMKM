import { createFileRoute } from '@tanstack/react-router';
import { Production } from '@/components/business/modules';
export const Route = createFileRoute('/produksi')({
 head: () => ({ meta: [{ title: 'Produksi & Resep — SmartUMKM' }, { name: 'description', content: 'Komposisi resep dan pencatatan hasil produksi usaha.' }, { property: 'og:title', content: 'Produksi & Resep — SmartUMKM' }, { property: 'og:description', content: 'Komposisi resep dan pencatatan hasil produksi usaha.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Production,
});
