export interface IOverlay {
  isOpen: boolean;
  duration?: number;
  setClose: () => void;
  isAnimation: boolean;
  children?: React.ReactNode;
  onCreate?: (() => Promise<void>) | (() => void);
}
