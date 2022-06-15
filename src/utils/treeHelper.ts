import { unref } from 'vue';
import type { Ref } from 'vue';
import { TreeDataItem } from 'ant-design-vue/lib/tree';

export function useTree(treeDataRef: Ref<TreeDataItem[]>, getFieldNames) {
  function getAllKeys(list?: TreeDataItem[]) {
    const keys: string[] = [];
    const treeData = list || unref(treeDataRef);
    const { key: keyField, children: childrenField } = unref(getFieldNames);
    if (!childrenField || !keyField) return keys;

    for (let index = 0; index < treeData.length; index++) {
      const node = treeData[index];
      keys.push(node[keyField]!);
      const children = node[childrenField];
      if (children && children.length) {
        keys.push(...(getAllKeys(children) as string[]));
      }
    }
    return keys as KeyType[];
  }
  return {
    getAllKeys,
  };
}
