import { Login } from '@/assets/icons';

export default function AdminBtnExit({ onClick }: { onClick: () => void }) {
  const btnClass =
    'flex items-center justify-center gap-2 px-2 py-0.5 cursor-pointer = hover:text-admin-primaryHover dark:hover:text-white transition duration-300 hover:bg-admin-lighten-main dark:hover:bg-admin-darken-main rounded';

  return (
    <div className={btnClass} onClick={onClick}>
      <Login width={20} height={20} />
      <span className='select-none'>Exit</span>
    </div>
  );
}
