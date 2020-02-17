import BEMHelper from 'react-bem-helper';

export const createBemHelper = (componentName: string, prefix = 'your-prefix-here') => {
  return new BEMHelper({
    prefix: `${prefix}-`,
    outputIsString: true,
    name: componentName
  });
};
