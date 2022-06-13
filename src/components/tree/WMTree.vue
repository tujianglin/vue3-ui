<script lang="tsx">
  import { initDefaultProps } from '@/utils';
  import { Tree, Dropdown, Menu, MenuProps } from 'ant-design-vue';
  import { Key } from 'ant-design-vue/lib/_util/type';
  import { difference } from 'lodash-es';
  import { defineComponent, ref, toRefs, watch } from 'vue';
  import { Icon } from '@iconify/vue';
  import wmTreeProps from './WMTreeTypes';

  export default defineComponent({
    name: 'WMTree',
    inheritAttrs: false,
    props: initDefaultProps(wmTreeProps(), {}),
    emits: [
      'update:expandedKeys',
      'update:selectedKeys',
      'update:checkedKeys',
      'expand',
      'check',
      'dragend',
      'dragenter',
      'dragleave',
      'dragover',
      'dragstart',
      'drop',
      'load',
      'rightClick',
      'select',
      'menuClick',
    ],
    setup(props, { slots, emit }) {
      const { titleIcon, beforeTag, AfterTag } = slots;
      const { option, accordion, menuBtn } = toRefs(props);
      const fieldNames = props.option?.fieldNames
        ? { children: 'children', title: 'title', key: 'key', ...props.option?.fieldNames }
        : { children: 'children', title: 'title', key: 'key' };
      const expandedKeys = ref(props.expandedKeys);
      const selectedKeys = ref(props.selectedKeys);
      const checkedKeys = ref(props.checkedKeys);

      watch(expandedKeys, (val) => {
        emit('update:expandedKeys', val);
      });
      watch(selectedKeys, (val) => {
        emit('update:selectedKeys', val);
      });
      watch(checkedKeys, (val) => {
        emit('update:checkedKeys', val);
      });
      const handleExpand = (keys: Key[], { expanded, node }) => {
        if (accordion.value) {
          // node.parent add from 3.0.0-alpha.10
          const tempKeys = (
            (node.parent ? node.parent.children : option?.value?.treeData) || []
          ).map(({ key }) => key);
          if (expanded) {
            expandedKeys.value = difference(keys, tempKeys).concat(node.key);
          } else {
            expandedKeys.value = keys;
          }
          emit('expand', expandedKeys.value, { expanded, node });
        } else {
          emit('expand', keys, { expanded, node });
        }
      };
      const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
        emit('menuClick', key);
      };
      const treeSlots = {
        title: (data) => {
          const { title } = fieldNames;
          data.showMenu = data.showMenu === false ? false : true;
          return (
            <div class="flex">
              <div title={data[title]} class="tree-content">
                {titleIcon && titleIcon({ data })}
                {beforeTag && beforeTag({ data })}
                {data[title]}
                {AfterTag && AfterTag({ data })}
              </div>
              {props.menu && data.showMenu && (
                <div class="operate">
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
                          {menuBtn.value?.map((i) => (
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
        },
      };
      return () => (
        <>
          <Tree
            v-model:expandedKeys={expandedKeys.value}
            v-model:selectedKeys={selectedKeys.value}
            v-model:checkedKeys={checkedKeys.value}
            blockNode
            {...option.value}
            onExpand={handleExpand}
            onCheck={(checkedKeys, e) => emit('check', checkedKeys, e)}
            onDragend={(e) => emit('dragend', e)}
            onDragenter={(e) => emit('dragenter', e)}
            onDragleave={(e) => emit('dragleave', e)}
            onDragover={(e) => emit('dragover', e)}
            onDragstart={(e) => emit('dragstart', e)}
            onDrop={(e) => emit('drop', e)}
            onLoad={(loadedKeys, e) => emit('load', loadedKeys, e)}
            onRightClick={(e) => emit('rightClick', e)}
            onSelect={(selectedKeys, e) => emit('select', selectedKeys, e)}
            v-slots={treeSlots}
          ></Tree>
        </>
      );
    },
  });
</script>

<style lang="less" scoped>
  .flex {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tree-content {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .flex:hover .operate {
    display: block;
  }

  .operate {
    display: none;
  }
</style>
