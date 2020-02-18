import { BEM_PREFIX } from 'config/frontEndConfig';
import BEMHelper from 'react-bem-helper';

export const createBemHelper = (componentName: string, prefix = BEM_PREFIX) => {
  return new BEMHelper({
    prefix: `${prefix}-`,
    outputIsString: true,
    name: componentName
  });
};
