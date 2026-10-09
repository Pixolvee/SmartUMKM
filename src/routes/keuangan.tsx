import { createFileRoute } from '@tanstack/react-router';
import { Finance } from '@/components/business/modules';
export const Route = createFileRoute('/keuangan')({
 head: () => ({ meta: [{ title: 'Keuangan — SmartUMKM' }, { name: 'description', content: 'Catat pengeluaran dan pantau arus kas usaha.' }, { property: 'og:title', content: 'Keuangan — SmartUMKM' }, { property: 'og:description', content: 'Catat pengeluaran dan pantau arus kas usaha.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Finance,
});
