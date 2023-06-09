export const getStyles = () => {
  const baseBtn = 'w-10 h-10 px-0 py-0 rounded-full';

  return {
    link: 'flex items-center justify-between px-3 h-14 box-border capitalize transition duration-300 border rounded border-admin-lighten-border dark:border-admin-darken-border hover:bg-admin-lighten-main dark:hover:bg-admin-darken-main',

    remove: `${baseBtn} enabled:hover:fill-red-900 dark:enabled:hover:fill-red-900`,

    edit: `${baseBtn} enabled:hover:fill-green-300 dark:enabled:hover:fill-green-300`,
  };
};
