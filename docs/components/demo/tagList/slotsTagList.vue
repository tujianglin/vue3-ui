<template>
  <WMTagList addName="添加版本号" :list="list" width="80">
    <template #header>
      <div style="display: flex; align-items: center">
        <div
          style="
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: var(--ant-primary-color);
            margin-right: 6px;
          "
        >
        </div>
        状态1
      </div>
    </template>
    <template #icon>
      <span
        style="
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--ant-primary-color);
        "
      ></span>
    </template>
    <template #title="{ v, i }">内容: {{ v.label }} 下标: {{ i }}</template>
  </WMTagList>
</template>
<script lang="tsx" setup>
  const list = [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
    {
      label: '3',
      value: '3',
    },
  ];
</script>
<style lang="less" scoped></style>
