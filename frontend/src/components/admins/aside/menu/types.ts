import { IAsideText } from '@/types';

export interface IMenu extends IAsideText {
  isNavBar: boolean;
}

export interface IMenuItem {
  name: string;
  href: string;
  isNavBar: boolean;
  isActive: boolean;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
