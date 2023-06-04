export interface IMenuList {
  href: string;
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface IMenuItem extends IMenuList {
  isNavBar: boolean;
}
