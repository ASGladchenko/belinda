export interface ITooltip {
  isOpen: boolean;
  setIsOpen: () => void;
  children: React.ReactNode;
}
