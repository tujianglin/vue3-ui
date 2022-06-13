import type { ExtractPropTypes, PropType } from 'vue';
import type { TreeProps } from 'ant-design-vue';

export interface IMenuBtn {
  key: 'ADD' | 'EDIT' | 'DELETE';
  value: string;
}

type onMenuClick = (key: any) => void;

export const wmTreeProps = () => ({
  selectedKeys: {
    type: Array as PropType<TreeProps['selectedKeys']>,
  },
  checkedKeys: {
    type: Array as PropType<TreeProps['checkedKeys']>,
  },
  expandedKeys: {
    type: Array as PropType<TreeProps['expandedKeys']>,
  },
  option: {
    type: Object as PropType<TreeProps>,
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
  onExpand: {
    type: Function as PropType<TreeProps['onExpand']>,
  },
  onCheck: {
    type: Function as PropType<TreeProps['onCheck']>,
  },
  onDragend: {
    type: Function as PropType<TreeProps['onDragend']>,
  },
  onDragenter: {
    type: Function as PropType<TreeProps['onDragenter']>,
  },
  onDragleave: {
    type: Function as PropType<TreeProps['onDragleave']>,
  },
  onDragover: {
    type: Function as PropType<TreeProps['onDragover']>,
  },
  onDragstart: {
    type: Function as PropType<TreeProps['onDragstart']>,
  },
  onDrop: {
    type: Function as PropType<TreeProps['onDrop']>,
  },
  onLoad: {
    type: Function as PropType<TreeProps['onLoad']>,
  },
  onRightClick: {
    type: Function as PropType<TreeProps['onRightClick']>,
  },
  onSelect: {
    type: Function as PropType<TreeProps['onSelect']>,
  },
  /** 树操作事件 */
  onMenuClick: {
    type: Function as PropType<onMenuClick>,
  },
});

export type WMTreeProps = Partial<ExtractPropTypes<ReturnType<typeof wmTreeProps>>>;

export default wmTreeProps;
