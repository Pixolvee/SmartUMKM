import { createFileRoute } from '@tanstack/react-router';
import { Auth } from '@/components/business/modules';
export const Route = createFileRoute('/auth')({
 head: () => ({ meta: [{ title: 'Masuk & Daftar — SmartUMKM' }, { name: 'description', content: 'Masuk atau buat akun untuk menyimpan data usaha Anda.' }, { property: 'og:title', content: 'Masuk & Daftar — SmartUMKM' }, { property: 'og:description', content: 'Masuk atau buat akun untuk menyimpan data usaha Anda.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Auth,
});
