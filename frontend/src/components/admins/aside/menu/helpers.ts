export const activeIdx = (path: string) => {
  const activePath = path.split('/').slice(2).join('/');

  if (activePath === 'admin' || activePath.includes('category')) return 0;
  if (activePath.includes('company')) return 1;
  if (activePath.includes('webpage')) return 2;
};
