import type { ExtractPropTypes, PropType } from 'vue';

type on = {
  add: () => void;
  more: () => void;
  edit: (item: any) => void;
  delete: (item: any) => void;
  tag: (item: any) => void;
};

export const wmTagListProps = () => ({
  /** 加载中 */
  loading: Boolean,
  /** 添加按钮文案 */
  addName: {
    type: String,
  },
  /** 展开按钮文案 */
  moreName: {
    type: String,
  },
  /** 标签列表数据 */
  list: {
    type: Array,
    default: () => [],
  },
  /** 数据总数 */
  total: {
    type: Number,
    default: 0,
  },
  /** 标签内容宽度 */
  width: {
    type: String,
    default: '80px',
  },
  /** 点击添加按钮触发 */
  onAdd: {
    type: Function as PropType<on['add']>,
  },
  /** 点击更多触发 */
  onMoreClick: {
    type: Function as PropType<on['more']>,
  },
  /** 点击编辑触发 */
  onEdit: {
    type: Function as PropType<on['edit']>,
  },
  /** 点击删除触发 */
  onDelete: {
    type: Function as PropType<on['delete']>,
  },
  /** 点击标签触发 */
  onTagClick: {
    type: Function as PropType<on['tag']>,
  },
});

export type WMTagListProps = Partial<ExtractPropTypes<ReturnType<typeof wmTagListProps>>>;

export default wmTagListProps;
