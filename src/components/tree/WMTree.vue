<script lang="tsx">
  import { Tree } from 'ant-design-vue';
  import { computed, defineComponent, reactive, ref, toRaw, unref, watchEffect } from 'vue';
  import { cloneDeep, omit } from 'lodash-es';
  import { initDefaultProps } from '@/utils';
  import wmTreeProps, { treeEmits, TreeState, KeyType, FieldNames, TreeItem } from './WMTreeTypes';

  export default defineComponent({
    name: 'WMTree',
    props: initDefaultProps(wmTreeProps(), {}),
    emits: treeEmits,
    setup(props, { attrs, emit }) {
      const state = reactive<TreeState>({
        expandedKeys: props.expandedKeys,
        selectedKeys: props.selectedKeys,
        checkedKeys: props.checkedKeys,
      });
      const treeDataRef = ref<TreeItem[]>([]);
      const getFieldNames = computed((): Required<FieldNames> => {
        const { fieldNames } = props;
        return {
          children: 'children',
          title: 'title',
          key: 'key',
          ...fieldNames,
        };
      });
      const getBindValues = computed(() => {
        let propsData = {
          blockNode: true,
          ...attrs,
          ...props,
          expandedKeys: state.expandedKeys,
          selectedKeys: state.selectedKeys,
          checkedKeys: state.checkedKeys,
          fieldNames: unref(getFieldNames),
          'onUpdate:expandedKeys': (v: KeyType[]) => {
            state.expandedKeys = v;
            emit('update:expandedKeys', v);
          },
          'onUpdate:selectedKeys': (v: KeyType[]) => {
            state.selectedKeys = v;
            emit('update:selectedKeys', v);
          },
          onCheck: (v: any, e: any) => {
            state.checkedKeys = v;
            const rawVal = toRaw(state.checkedKeys);
            emit('update:checkedKeys', rawVal);
            emit('check', rawVal, e);
          },
        };
        return omit(propsData, 'treeData', 'class');
      });

      const getTreeData = computed((): TreeItem[] => unref(treeDataRef));

      const treeData = computed(() => {
        const data = cloneDeep(getTreeData.value);
        return data;
      });
      watchEffect(() => {
        treeDataRef.value = props.treeData as TreeItem[];
      });
      watchEffect(() => {
        state.expandedKeys = props.expandedKeys;
      });

      watchEffect(() => {
        state.selectedKeys = props.selectedKeys;
      });

      watchEffect(() => {
        state.checkedKeys = props.checkedKeys;
      });
      return () => (
        <Tree {...unref(getBindValues)} showIcon={false} treeData={treeData.value}></Tree>
      );
    },
  });
</script>
