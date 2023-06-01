'use client';
import { Button } from '@/components';

export default function Products() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      <h2 className="text-xl font-bold">Your product categories</h2>

      <Button
        variant="primary"
        text="Create category"
        className="rounded-xl"
        onClick={() => console.log('Create category')}
      />
    </div>
  );
}
