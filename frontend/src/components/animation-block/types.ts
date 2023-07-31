export interface IAnimationBlock {
  styles?: string;
  animation: string;
  triggerOnce?: boolean;
}

export interface IGetStyles {
  inView: boolean;
  styles?: string;
  animation: string;
}
