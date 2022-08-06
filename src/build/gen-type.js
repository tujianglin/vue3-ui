/**
 * @description 构建打包组件声明路径
 * @author 涂江林
 */

const fs = require('fs/promises');
const Path = require('path');
const fg = require('fast-glob');

const indexPath = Path.resolve(__dirname, '../../dist/index.d.ts');

const forEachComponents = (path) => {
  const components = fg.sync(path, { extglob: true });
  return components.map((componentPath) => {
    const insertKey = componentPath.match('[^/]+(?!.*/)')[0].replace(/\.[^.]*$/, '');
    return `${insertKey}: typeof import("./src/components/index")["${insertKey}"];`;
  });
};

const genComponents = async () => {
  const path = `src/components/**/*.(vue)`;
  const template = `
 declare module "vue" {
   export interface GlobalComponents {
     ${forEachComponents(path).join(`\n`)}
   }
 }`;
  fs.appendFile(indexPath, template);
};

const linkEnv = async () => {
  const link = `/// <reference types="./src/env" />`;
  fs.appendFile(indexPath, link);
};

const main = async () => {
  linkEnv();
  genComponents();
};

main();
