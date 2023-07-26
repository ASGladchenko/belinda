import Cookies from 'js-cookie';

import { expiresLang } from '@/constants';

import { ISelectableLanguage } from '../types';

export function SelectableLanguage({
  abb,
  Icon,
  name,
  onClose,
  onSelect,
}: ISelectableLanguage) {
  const classChild =
    'flex items-center gap-3  px-3 py-2 text-sm text-black transition duration-300 dark:text-white  hover:bg-admin-lighten-main dark:hover:bg-admin-darken-main';

  const onClick = () => {
    onSelect(abb);
    Cookies.set('lang', abb, { expires: expiresLang });
    onClose();
  };

  return (
    <div data-lang={abb} onClick={onClick} className={classChild}>
      {Icon}
      <span className="text-sm capitalize select-none">{name}</span>
    </div>
  );
}
