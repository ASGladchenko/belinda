'use client';
import { Add } from '@/assets/icons';
import { IButtonAdd } from './types';

const AdminBtnAdded = ({ text, onClick }: IButtonAdd) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center px-4 py-2 transition duration-200 rounded-full bg-admin-lighten-second dark:bg-admin-darken-second drop-shadow-xl hover:text-white hover:bg-admin-primary dark:text-white dark:hover:bg-admin-primaryHover dark:hover:text-black active:scale-90 hover:fill-white"
    >
      <div className="p-2">
        <Add width={24} height={24} />
      </div>
      {text && <span>{text}</span>}
    </button>
  );
};

export default AdminBtnAdded;
