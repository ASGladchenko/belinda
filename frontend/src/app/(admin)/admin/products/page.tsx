'use client';
import PageHead from '@/components/admins/page-header';

export default function Products() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      <PageHead head="Products" onClick={() => alert('Create')} />
    </div>
  );
}
