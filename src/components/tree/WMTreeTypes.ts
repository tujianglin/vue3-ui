import type { PropType } from 'vue';
import type { TreeProps } from 'ant-design-vue';

type menuBtn = [ADD?: 'ADD', EDIT?: 'EDIT', DELETE?: 'DELETE'];

export const WMTreeProps = () => ({
  selectedKeys: {
    type: Object as PropType<TreeProps['selectedKeys']>,
  },
  checkedKeys: {
    type: Object as PropType<TreeProps['checkedKeys']>,
  },
  expandedKeys: {
    type: Object as PropType<TreeProps['expandedKeys']>,
  },
  option: {
    type: Object as PropType<TreeProps>,
  },
  menu: {
    type: Boolean,
  },
  menuBtn: {
    type: Object as PropType<menuBtn>,
  },
  maxLength: {
    type: [String, Number],
    default: 100,
  },
});

export default WMTreeProps;
