<template>
  <div class="table-head">
    <div v-for="title in listTitle" class="table-cell" :key="title.id">
      <h4>{{ title.text }}</h4>
      <div v-if="title.text !== 'Дата'" class="button-list">
        <div
          class="icon-wrapper"
          @click="$emit('sortTable', [title.value, 'desc'])"
        >
          <custom-icon name="arrow-down" />
        </div>
        <div
          class="icon-wrapper"
          @click="$emit('sortTable', [title.value, 'asc'])"
        >
          <custom-icon name="arrow-up" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import customIcon from "vue-icon/lib/vue-feather.esm";

export default {
  name: "TableHead",
  props: {
    listTitle: Array,
    sortBy: Object,
  },
  components: { customIcon },
};
</script>
<style scoped>
.table-head {
  display: flex;
}
.table-cell {
  width: 138px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(60, 60, 60, 0.26);
  padding: 16px 12px;
}
.table-cell + .table-cell {
  border-left: none;
}
.icon-wrapper {
  height: 16px;
  width: 16px;
  cursor: pointer;
}
.button-list {
  display: flex;
}
h4 {
  margin: 0;
}
</style>
