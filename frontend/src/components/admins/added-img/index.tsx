import { Plus } from '@/assets/icons';

export interface AddedImg {
  image?: string;
}

const AddedImg = ({ image }: AddedImg) => {
  return (
    <>
      <label className="flex w-full h-full min-h-[128px] border-admin-primary border-2 border-dashed max-w-[128px] fill-admin-primary cursor-pointer hover:border-admin-primaryHover hover:fill-admin-primaryHover transition">
        <div className="flex items-center justify-center w-full">
          {!image && <Plus width={64} height={64} />}
          <input type="file" className="hidden w-0 h-0" />
        </div>
      </label>
    </>
  );
};

export { AddedImg };
