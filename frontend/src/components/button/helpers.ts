import { IVariant } from './type';

export const setVariant = (variant: IVariant) => {
  switch (variant) {
    case 'primary':
      return ' btn-primary';

    case 'outline-primary':
      return ' btn-outline-primary';

    case 'secondary':
      return ' btn-secondary';

    case 'outline-secondary':
      return ' btn-outline-secondary';

    default:
      return '';
  }
};
