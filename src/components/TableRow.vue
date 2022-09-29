<template>
  <div class="table-row">
    <div v-for="prop in dataTable" :key="prop.id" class="table-cell">
      <div v-if="prop !== 'id'">{{ prop }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TableRow",
  props: {
    title: String,
    dataTable: Object,
  },
};
</script>
<style scoped>
.table-row {
  display: flex;
  padding: 16px 0;
}
.table-cell {
  width: 150px;
}
</style>
