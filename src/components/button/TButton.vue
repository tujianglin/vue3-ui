<template>
  <div>
    <button>{{ name }}</button>
    <Button>{{ name }}</Button>
  </div>
</template>
<script lang="tsx">
  export default {
    name: 'TButton',
  };
</script>
<script lang="tsx" setup>
  import { Button } from 'ant-design-vue';
  defineProps<{
    name?: string;
  }>();
</script>
<style lang="less" scoped></style>
