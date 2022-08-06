<script lang="tsx">
  import { defineComponent } from 'vue';
  import { Button } from 'ant-design-vue';
  import { initDefaultProps } from '@/utils';
  import { tButtonProps } from './TButtonTypes';
  export default defineComponent({
    name: 'TButton',
    props: initDefaultProps(tButtonProps(), {}),
    setup(props) {
      return () => (
        <div>
          <Button type={'primary'}>{props.demo}</Button>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
