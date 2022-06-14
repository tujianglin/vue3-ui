<script lang="tsx">
  import { computed, defineComponent, onMounted, reactive, toRaw, unref } from 'vue';
  import type { TreeProps, MenuProps } from 'ant-design-vue';
  import { Tree, Spin, Empty, Dropdown, Menu } from 'ant-design-vue';
  import { difference, omit } from 'lodash-es';
  import wmTreeProps, { treeEmits } from './WMTreeTypes';
  import { initDefaultProps, useTree } from '@/utils';
  import { TreeDataItem } from 'ant-design-vue/lib/tree';
  import { Icon } from '@iconify/vue';

  export default defineComponent({
    name: 'WMTree',
    props: initDefaultProps(wmTreeProps(), {}),
    emits: treeEmits,
    setup(props, { attrs, emit, slots }) {
      const state = reactive({
        expandedKeys: props.expandedKeys,
        selectedKeys: props.selectedKeys,
        checkedKeys: props.checkedKeys,
      });

      const treeData = computed(() => {
        return props.treeData;
      });

      const getFieldNames = computed(() => {
        return {
          children: 'children',
          title: 'title',
          key: 'key',
          ...props.fieldNames,
        };
      });
      const getNotFound = computed((): boolean => {
        return !treeData.value || treeData.value.length === 0;
      });
      const getBindValues = computed(() => {
        const propsData: TreeProps = {
          blockNode: true,
          ...attrs,
          ...props,
          expandedKeys: state.expandedKeys,
          selectedKeys: state.selectedKeys,
          checkedKeys: state.checkedKeys,
          'onUpdate:expandedKeys': (v) => {
            state.expandedKeys = v;
            emit('update:expandedKeys', v);
          },
          'onUpdate:selectedKeys': (v) => {
            state.selectedKeys = v;
            emit('update:selectedKeys', v);
          },
          onCheck: (v, e) => {
            state.checkedKeys = v;
            const rawVal = toRaw(state.checkedKeys);
            emit('update:checkedKeys', rawVal);
            emit('check', rawVal, e);
          },
          onExpand: (keys, { expanded, node }) => {
            if (props.accordion) {
              const tempKeys = ((node.parent ? node.parent.children : treeData.value) || []).map(
                ({ key }) => key,
              );
              if (expanded) {
                state.expandedKeys = difference(keys, tempKeys).concat(node.key);
              } else {
                state.expandedKeys = keys;
              }
            }
            emit('expand', state.expandedKeys, { expanded, node });
          },
        };
        return omit(propsData, 'treeData', 'class');
      });

      const renderTitle = (item: TreeDataItem) => {
        const { title } = unref(getFieldNames);
        item.showMenu = item.showMenu === false ? false : true;
        return (
          <div class="tree-title">
            <div title={item[title]} class="title">
              {slots.icon && slots.icon({ item })}
              {slots.beforeTitle && slots.beforeTitle({ item })}
              {item[title]}
              {slots.afterTitle && slots.afterTitle({ item })}
            </div>
            {props.menu && item.showMenu && (
              <div class="actions">
                <Dropdown
                  trigger={['click']}
                  v-slots={{
                    default: () => (
                      <span>
                        <Icon icon="akar-icons:more-vertical"></Icon>
                      </span>
                    ),
                    overlay: () => (
                      <Menu onClick={handleMenuClick}>
                        {props.menuBtn?.map((i) => (
                          <Menu.Item key={i.key}>{i.value}</Menu.Item>
                        ))}
                      </Menu>
                    ),
                  }}
                ></Dropdown>
              </div>
            )}
          </div>
        );
      };

      const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
        emit('menuClick', key);
      };
      function expandAll(expandAll: boolean) {
        state.expandedKeys = expandAll ? getAllKeys() : ([] as KeyType[]);
      }

      const { getAllKeys } = useTree(treeData, getFieldNames.value);
      onMounted(() => {
        if (props.defaultExpandAll) {
          expandAll(true);
        }
      });

      return () => (
        <Spin spinning={props.loading}>
          <div v-show={!unref(getNotFound)}>
            <Tree
              {...unref(getBindValues)}
              treeData={treeData.value}
              v-slots={{
                title: (item: TreeDataItem) => renderTitle(item),
              }}
              defaultExpandAll
            ></Tree>
          </div>
          <Empty v-show={unref(getNotFound)} image={props.emptyImage}></Empty>
        </Spin>
      );
    },
  });
</script>

<style lang="less" scoped>
  .tree-title {
    display: flex;
    align-items: center;
    position: relative;

    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .actions {
      position: absolute;
      right: 0;
      top: 56%;
      transform: translateY(-50%);
      display: none;
    }
  }

  .tree-title:hover .actions {
    display: block;
  }
</style>
