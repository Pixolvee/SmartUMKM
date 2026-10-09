import { createFileRoute } from '@tanstack/react-router';
import { Settings } from '@/components/business/modules';
export const Route = createFileRoute('/pengaturan')({
 head: () => ({ meta: [{ title: 'Pengaturan — SmartUMKM' }, { name: 'description', content: 'Pengaturan workspace dan paket SmartUMKM.' }, { property: 'og:title', content: 'Pengaturan — SmartUMKM' }, { property: 'og:description', content: 'Pengaturan workspace dan paket SmartUMKM.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Settings,
});
