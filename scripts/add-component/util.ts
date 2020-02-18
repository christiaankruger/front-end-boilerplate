import { camelCase, dotCase, pascalCase } from 'change-case';

export const generateNames = (input: string) => {
  // Input can be dash-case or UpperCase or camelCase
  return {
    pascalCase: pascalCase(input),
    camelCase: camelCase(input),
    dashCase: dotCase(input)
      .split('.')
      .join('-')
  };
};
