<template>
  <div class="table">
    <TableHead
      :sortBy="sortBy"
      @sortTable="setSortTable"
      :listTitle="[
        { text: 'Дата', value: 'date' },
        { text: 'Название', value: 'title' },
        { text: 'Количество', value: 'count' },
        { text: 'Расстояние', value: 'distance' },
      ]"
    />
    <TableRow v-for="entry in dataTable" :dataTable="entry" :key="entry.id" />
  </div>
</template>

<script>
import TableRow from "./TableRow.vue";
import TableHead from "./TableHead.vue";
export default {
  name: "MainTable",
  components: { TableRow, TableHead },
  props: { dataTable: Array, sortBy: Object },
  data() {
    return { date: "", title: "", count: "" };
  },
  methods: {
    setSortTable(value) {
      this.$emit("sortTable", value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.table {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
}
</style>
