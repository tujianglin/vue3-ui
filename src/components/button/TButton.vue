<script lang="tsx">
  import { computed, defineComponent, unref } from 'vue';
  import { Button } from 'ant-design-vue';
  import { initDefaultProps } from '@/utils';
  import buttonProps from './TButtonTypes';
  export default defineComponent({
    name: 'TButton',
    inheritAttrs: false,
    props: initDefaultProps(buttonProps(), {}),
    setup(props, { attrs, slots }) {
      const getBindValue = computed(() => {
        const propsData = {
          ...attrs,
          ...props,
        };
        return propsData;
      });
      return () => (
        <div>
          <Button {...unref(getBindValue)}>{slots.default && slots.default()}</Button>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
