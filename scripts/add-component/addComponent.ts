import { blue, green } from 'chalk';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'graceful-fs';
import { compile } from 'handlebars';
import { relative, resolve } from 'path';

import { BEM_PREFIX } from '../../config/frontEndConfig';

import { generateNames } from './util';

// Find a better way to do this
const ROOT = resolve(__dirname, '..', '..');

export const addComponent = async (componentName: string) => {
  const templates = buildTemplates();
  const names = generateNames(componentName);

  const tsxFileName = `${names.pascalCase}.tsx`;
  const scssFileName = `${names.pascalCase}.scss`;
  const storiesFileName = `${names.pascalCase}.stories.tsx`;

  const config = {
    UppercaseName: names.pascalCase,
    dashCaseName: names.dashCase,
    tsxFileName,
    scssFileName,
    storiesFileName,
    BEMPrefix: BEM_PREFIX
  };

  const componentFolder = resolve(ROOT, 'src', 'components', names.pascalCase);
  if (existsSync(componentFolder)) {
    throw new Error(`Conflict:  Folder '${componentFolder}' already exists`);
  }

  mkdirSync(componentFolder, { recursive: true });
  console.log(green(`Created folder: ${relative(ROOT, componentFolder)}`));

  writeFileSync(resolve(componentFolder, tsxFileName), templates.tsx(config));
  console.log(blue(`Created file: ${relative(ROOT, resolve(componentFolder, tsxFileName))}`));

  writeFileSync(resolve(componentFolder, scssFileName), templates.scss(config));
  console.log(blue(`Created file: ${relative(ROOT, resolve(componentFolder, scssFileName))}`));

  writeFileSync(resolve(componentFolder, storiesFileName), templates.stories(config));
  console.log(blue(`Created file: ${relative(ROOT, resolve(componentFolder, storiesFileName))}`));
};

const buildTemplates = () => {
  return {
    tsx: compile(readFileSync(resolve(__dirname, 'tsx.template')).toString()),
    scss: compile(readFileSync(resolve(__dirname, 'scss.template')).toString()),
    stories: compile(readFileSync(resolve(__dirname, 'stories.template')).toString())
  };
};

const componentName = (process as any).argv[2];
if (!componentName) {
  throw new Error('Please specify a component name');
}

addComponent(componentName);
