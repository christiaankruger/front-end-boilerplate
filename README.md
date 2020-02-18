# Front-End Boilerplate

A simple, opinionated boilerplate for front-end applications built with Typescript, React, MobX and Storybook.

## Folder structure

    .
    ├── .storybook              # Storybook configuration
    ├── scripts                 # Utility scripts, to be run via yarn run
    ├── src                     # Source files
        ├── components          # React component folders
        ├── util                # Utility classes
    ├── LICENSE
    └── README.md

## Configuration

Add your desired BEM prefix to `config/frontEndConfig.ts`.

## Commands

#### `add-component`

Usage

```
yarn run add-component SomeComponent
```

Running this creates:

- `src/components/SomeComponent` folder
- `src/components/SomeComponent.tsx`
- `src/components/SomeComponent.scss`
- `src/components/SomeComponent.stories.tsx`

All these files are compiled with Handlebars.js templates, which can be found at `scripts/add-component`

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
