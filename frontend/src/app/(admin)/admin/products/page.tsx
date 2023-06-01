'use client';
import AdminBtnAdded from '@/components/admin-btn-added';

export default function Products() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      <h2 className="text-xl font-bold">Your product categories</h2>
      <AdminBtnAdded
        text="Create category"
        onClick={() => console.log('Create category')}
      />
    </div>
  );
}
