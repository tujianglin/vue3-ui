<script lang="tsx">
  import { computed, defineComponent, ref, toRef, unref, watch } from 'vue';
  import { Button, Spin } from 'ant-design-vue';
  import {
    PlusOutlined,
    FormOutlined,
    DeleteOutlined,
    CaretUpOutlined,
  } from '@ant-design/icons-vue';
  import wmTagListProps from './WMTagListTypes';
  import { initDefaultProps } from '@/utils';
  export default defineComponent({
    name: 'WMTagList',
    props: initDefaultProps(wmTagListProps(), {}),
    setup(props, { emit, slots, attrs }) {
      const activeTag = ref();

      const handleEdit = (e: MouseEvent, item: any, index: number) => {
        activeTag.value = index;
        e.stopPropagation();
        emit('edit', item);
      };
      const handleDelete = (e: MouseEvent, item: any, index: number) => {
        activeTag.value = index;
        e.stopPropagation();
        emit('delete', item);
      };
      const handleTag = (e: MouseEvent, item: any, index: number) => {
        activeTag.value = index;
        e.stopPropagation();
        emit('tagClick', item);
      };
      const handleMore = () => {
        emit('moreClick');
      };
      const handleAdd = () => {
        emit('add');
      };

      const width = toRef(props, 'width');
      const tagWidth = ref('');

      watch(
        width,
        (val) => {
          if (val.match('px')) {
            tagWidth.value = `width: ${val}`;
          } else {
            tagWidth.value = `width: ${val}px`;
          }
        },
        {
          immediate: true,
        },
      );

      const getDataTotal = computed(() => {
        return props.list.length;
      });
      const getList = computed(() => {
        return props.list;
      });
      const moreBtn = computed(() => {
        const total = unref(getDataTotal);
        if (total < props.total) return true;
        return false;
      });
      const dataList = ref<any[]>([]);

      watch(
        moreBtn,
        (val) => {
          if (val) {
            dataList.value = unref(getList).slice(0, props.total);
          } else {
            dataList.value = unref(getList);
          }
        },
        {
          immediate: true,
          deep: true,
        },
      );

      return () => (
        <div {...attrs}>
          <div style="margin-bottom: 14px;">{slots.header && slots.header()}</div>
          <Spin class="tag-list" spinning={props.loading}>
            <Button
              class="tag-list-add"
              onClick={handleAdd}
              v-slots={{
                icon: () => <PlusOutlined></PlusOutlined>,
              }}
            >
              {unref(props.addName)}
            </Button>
            {dataList.value.map((v, i) => (
              <Button
                class="tag-list-tag"
                type={activeTag.value === i ? 'default' : 'dashed'}
                onClick={(e) => handleTag(e, v, i)}
                v-slots={{
                  icon: () => slots.icon && slots.icon(),
                }}
              >
                <div class="title" style={[unref(tagWidth)]}>
                  {slots.title && slots.title({ v, i })}
                </div>
                <FormOutlined onClick={(e) => handleEdit(e, v, i)}></FormOutlined>
                <DeleteOutlined onClick={(e) => handleDelete(e, v, i)}></DeleteOutlined>
              </Button>
            ))}
            {moreBtn.value && (
              <Button type="link" onClick={handleMore}>
                展开<CaretUpOutlined></CaretUpOutlined>
              </Button>
            )}
          </Spin>
        </div>
      );
    },
  });
</script>

<style lang="less" scoped>
  .tag-list {
    &-add {
      border-color: var(--ant-primary-color);
      color: var(--ant-primary-color);
      margin-right: 12px;
    }

    &-tag {
      border-color: var(--ant-primary-color);
      margin-right: 12px;
      margin-bottom: 12px;
      display: inline-flex;
      align-items: center;

      .title {
        margin: 0 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>
