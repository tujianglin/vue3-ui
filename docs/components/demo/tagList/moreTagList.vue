<template>
  <WMTagList
    addName="添加版本号"
    :list="list"
    width="120"
    @more-click="handleMore"
    :total="15"
    :loading="loading"
  >
    <template #title="{ v, i }">内容: {{ v }} 下标: {{ i }}</template>
  </WMTagList>
</template>
<script lang="tsx" setup>
  import { ref, unref } from 'vue';
  const list = ref([1, 2, 3, 4, 5, 6, 7]);
  const loading = ref(false);
  const handleMore = () => {
    loading.value = true;
    setTimeout(() => {
      list.value = [...unref(list), 8, 9, 10, 11, 12, 13, 14, 15];
      loading.value = false;
    }, 2000);
  };
</script>
<style lang="less" scoped></style>
