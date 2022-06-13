/**
 * @description 自动注册组件
 * @author 涂江林
 */
const fs = require('fs');
const Path = require('path');
const fg = require('fast-glob');

const componentList = [];

const forEachComponents = (path) => {
  const components = fg.sync(path, { extglob: true });
  return components.forEach((componentPath) => {
    const _componentPath = componentPath.split('/');
    _componentPath[0] = '@';
    const key = _componentPath[_componentPath.length - 1];
    const insertKey = key.replace(/\.[^.]*$/, '');
    const insertPath = _componentPath.join('/');
    const fileExtension = insertPath.match(/\.\w+$/)[0];
    switch (fileExtension) {
      case '.vue': {
        componentList.push(`export { default as ${insertKey} } from '${insertPath}';`);
        break;
      }
      case '.ts': {
        if (componentPath !== 'src/components/index.ts') {
          const tsProps = insertKey.replace('Types', 'Props');
          const tsPath = insertPath.replace('.ts', '');
          componentList.push(`export type { ${tsProps} } from '${tsPath}';`);
        }
        break;
      }
      default:
        return;
    }
  });
};

const path = `src/components/**/*.(vue|ts)`;
forEachComponents(path);

const template = `/** generate all export here */
 ${componentList.join('\n')}
 `;

fs.writeFileSync(Path.resolve(__dirname, '../components/index.ts'), template);

// TODO Main
