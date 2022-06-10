<template>
  <Tree
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    v-model:checkedKeys="checkedKeys"
    v-bind="option"
  >
    <template #title="{ title, key }">
      <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
      <template v-else>{{ title }}</template>
    </template>
  </Tree>
</template>
<script lang="tsx" setup>
  import { toRefs, watch, ref } from 'vue';
  import { Tree } from 'ant-design-vue';
  import WMTreeProps from './WMTreeTypes';
  import { initDefaultProps } from '@/utils';

  const props = defineProps(initDefaultProps(WMTreeProps(), {}));
  const emit = defineEmits(['update:selectedKeys', 'update:checkedKeys', 'update:expandedKeys']);

  const { option } = toRefs(props);

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
</script>
<style lang="less" scoped></style>
