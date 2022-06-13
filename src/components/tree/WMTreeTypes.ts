import type { ExtractPropTypes, PropType } from 'vue';
import type { TreeDataItem } from 'ant-design-vue/lib/tree';

export const treeEmits = [
  'update:expandedKeys',
  'update:selectedKeys',
  'update:checkedKeys',
  'check',
];

export interface IMenuBtn {
  key: 'ADD' | 'EDIT' | 'DELETE';
  value: string;
}

export interface TreeItem extends TreeDataItem {
  icon?: any;
}

export interface FieldNames {
  children?: string;
  title?: string;
  key?: string;
}

export interface TreeState {
  expandedKeys: KeyType[];
  selectedKeys: KeyType[];
  checkedKeys: CheckKeys;
}

export type KeyType = string | number;

export type CheckKeys =
  | KeyType[]
  | { checked: string[] | number[]; halfChecked: string[] | number[] };

type onMenuClick = (key: any) => void;

export const wmTreeProps = () => ({
  selectedKeys: {
    type: Array as PropType<TreeState['selectedKeys']>,
    default: () => [],
  },
  checkedKeys: {
    type: Array as PropType<TreeState['checkedKeys']>,
    default: () => [],
  },
  expandedKeys: {
    type: Array as PropType<TreeState['expandedKeys']>,
    default: () => [],
  },
  treeData: {
    type: Array as PropType<TreeDataItem[]>,
  },
  fieldNames: {
    type: Object as PropType<FieldNames>,
  },
  /** 是否开启手风琴 */
  accordion: {
    type: Boolean,
  },
  /** 是否开启操作按钮 */
  menu: {
    type: Boolean,
  },
  /** 操作按钮 */
  menuBtn: {
    type: Array as PropType<IMenuBtn[]>,
  },
  /** 树操作事件 */
  onMenuClick: {
    type: Function as PropType<onMenuClick>,
  },
});

export type WMTreeProps = Partial<ExtractPropTypes<ReturnType<typeof wmTreeProps>>>;

export default wmTreeProps;
