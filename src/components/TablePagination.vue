<template>
  <div class="container">
    <div
      v-for="num in countPages"
      :key="num"
      class="page-btn"
      :class="{ active: num === page }"
      @click="$emit('changePage', num)"
    >
      <span>{{ num }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TablePagination",
  props: {
    countPages: Number,
    page: Number,
  },
};
</script>
<style>
.container {
  display: flex;
  justify-content: center;
}
.page-btn {
  border-radius: 4px;
  border: 1px rgba(60, 60, 60, 0.26) solid;
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-btn + .page-btn {
  margin-left: 8px;
}
.pagination-point {
  width: 25px;
  height: 25px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.active {
  background-color: lightgrey;
}
</style>
