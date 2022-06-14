import type { ExtractPropTypes, PropType, VNode } from 'vue';
import type { TreeDataItem, TreeProps } from 'ant-design-vue/lib/tree';
import type { EmptyProps } from 'ant-design-vue';

export const treeEmits = [
  'update:expandedKeys',
  'update:selectedKeys',
  'update:checkedKeys',
  'check',
  'expand',
];

export interface IMenuBtn {
  key: string;
  value: string | VNode;
}

type onMenuClick = (key: any) => void;

export const wmTreeProps = () => ({
  selectedKeys: {
    type: Array as PropType<TreeProps['selectedKeys']>,
    default: () => [],
  },
  checkedKeys: {
    type: Array as PropType<TreeProps['checkedKeys']>,
    default: () => [],
  },
  expandedKeys: {
    type: Array as PropType<TreeProps['expandedKeys']>,
    default: () => [],
  },
  treeData: {
    type: Array as PropType<TreeDataItem[]>,
    default: () => [],
  },
  fieldNames: {
    type: Object as PropType<TreeProps['fieldNames']>,
  },
  checkable: Boolean,
  defaultExpandAll: Boolean,
  /** 加载中 */
  loading: {
    type: Boolean,
  },
  /** 缺省图路径 */
  emptyImage: {
    type: Object as PropType<EmptyProps['image']>,
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

export type WMTreeProps = TreeProps & Partial<ExtractPropTypes<ReturnType<typeof wmTreeProps>>>;

export default wmTreeProps;
