<template>
  <div style="margin-bottom: 16px">
    loading:
    <Switch v-model:checked="loading" />
  </div>
  <WMTree :tree-data="treeData" :loading="loading" />
</template>
<script lang="tsx" setup>
  import { ref, onMounted, watch } from 'vue';
  import { Switch } from 'ant-design-vue';
  import type { TreeProps } from 'ant-design-vue';

  const loading = ref(true);

  const treeData = ref<TreeProps['treeData']>([]);

  watch(loading, (val) => {
    if (val) {
      onLoad();
    }
  });

  const onLoad = () => {
    treeData.value = [];
    setTimeout(() => {
      treeData.value = [
        {
          title: 'parent 1',
          key: '0-0',
          children: [
            {
              title: 'parent 1-0',
              key: '0-0-0',
              disabled: true,
              children: [
                { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
                { title: 'leaf', key: '0-0-0-1' },
              ],
            },
            {
              title: 'parent 1-1',
              key: '0-0-1',
              children: [{ key: '0-0-1-0', title: 'sss' }],
            },
          ],
        },
      ];
      loading.value = false;
    }, 3000);
  };

  onMounted(() => {
    onLoad();
  });
</script>
