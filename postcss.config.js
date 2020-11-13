
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

const plugins = [];
plugins.push(tailwindcss);
plugins.push(autoprefixer);
plugins.push(tailwindcss('tailwind.config.js'));


module.exports = { plugins };