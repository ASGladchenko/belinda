import { useLocaleText } from '@/locale';

import { MenuItem } from './menu-item';
import { getModifiedMenu } from './config';

export default function Menu({ isNavBar }: { isNavBar: boolean }) {
  const { nameCompany, about, webPage } = useLocaleText('asideAdmin');

  const translatedText = [nameCompany, about, webPage];

  const modifiedMenu = getModifiedMenu(translatedText);

  return (
    <ul className="flex flex-col gap-3 py-6 pl-3 pr-3 overflow-x-hidden lg:pr-0">
      {modifiedMenu.map((item) => (
        <MenuItem key={item.name} isNavBar={isNavBar} {...item} />
      ))}
    </ul>
  );
}
