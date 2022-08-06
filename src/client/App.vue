<script lang="tsx">
  import { defineComponent } from 'vue';
  import TButton from '../components/button/TButton.vue';

  export default defineComponent({
    setup() {
      return () => (
        <>
          <TButton type={'primary'} size={'middle'}>
            111
          </TButton>
        </>
      );
    },
  });
</script>
<style lang="less" scoped></style>
