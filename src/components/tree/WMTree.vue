<script lang="tsx">
  import { Tree } from 'ant-design-vue';
  import { computed, defineComponent, ref, toRaw, unref, watchEffect } from 'vue';
  import { cloneDeep, difference, omit } from 'lodash-es';
  import { initDefaultProps } from '@/utils';
  import wmTreeProps, { treeEmits, FieldNames, TreeItem } from './WMTreeTypes';
  import type { TreeProps } from 'ant-design-vue';

  export default defineComponent({
    name: 'WMTree',
    props: initDefaultProps(wmTreeProps(), {}),
    emits: treeEmits,
    setup(props, { attrs, emit }) {
      const expandedKeys = ref(props.expandedKeys);
      const selectedKeys = ref(props.selectedKeys);
      const checkedKeys = ref(props.checkedKeys);
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
        let propsData: TreeProps = {
          blockNode: true,
          ...attrs,
          ...props,
          expandedKeys: expandedKeys.value,
          selectedKeys: selectedKeys.value,
          checkedKeys: checkedKeys.value,
          fieldNames: unref(getFieldNames),
          'onUpdate:expandedKeys': (v) => {
            expandedKeys.value = v;
            emit('update:expandedKeys', v);
          },
          'onUpdate:selectedKeys': (v) => {
            selectedKeys.value = v;
            emit('update:selectedKeys', v);
          },
          'onUpdate:checkedKeys': (v) => {
            checkedKeys.value = v;
            emit('update:checkedKeys', v);
          },
          onCheck: (v, e) => {
            checkedKeys.value = v;
            const rawVal = toRaw(checkedKeys.value);
            emit('update:checkedKeys', rawVal);
            emit('check', rawVal, e);
          },
          onExpand: (keys, { expanded, node }) => {
            if (props.accordion) {
              // node.parent add from 3.0.0-alpha.10
              const tempKeys = ((node.parent ? node.parent.children : treeData.value) || []).map(
                ({ key }) => key,
              );
              if (expanded) {
                expandedKeys.value = difference(keys, tempKeys).concat(node.key);
              } else {
                expandedKeys.value = keys;
              }
              emit('expand', expandedKeys.value, { expanded, node });
            } else {
              expandedKeys.value = keys;
              emit('expand', expandedKeys.value, { expanded, node });
            }
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

      return () => (
        <Tree {...unref(getBindValues)} showIcon={false} treeData={treeData.value}></Tree>
      );
    },
  });
</script>
