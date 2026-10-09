import { createFileRoute } from '@tanstack/react-router';
import { Employees } from '@/components/business/modules';
export const Route = createFileRoute('/pegawai')({
 head: () => ({ meta: [{ title: 'Pegawai — SmartUMKM' }, { name: 'description', content: 'Ringkasan pegawai dan shift kasir.' }, { property: 'og:title', content: 'Pegawai — SmartUMKM' }, { property: 'og:description', content: 'Ringkasan pegawai dan shift kasir.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Employees,
});
