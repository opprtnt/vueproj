<template>
  <div class="container">
    <v-select
      v-model="sortMenu.filterBy"
      class="select"
      :options="options"
      :reduce="(title) => title.value"
    />
    <v-select
      class="select"
      v-model="sortMenu.condition"
      :options="['равно', 'содержит', 'больше', 'меньше']"
    />
    <input v-model="sortMenu.text" type="text" />
    <button @click="$emit('changeSort', sortMenu)">Сортировать</button>
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  name: "SortMenu",
  components: { vSelect },
  props: {
    filterBy: String,
    condition: String,
    filterText: String,
  },
  data() {
    return {
      options: [
        { value: "title", label: "Название" },
        { value: "count", label: "Количество" },
        { value: "distance", label: "Расстояние" },
      ],
      sortMenu: {
        filterBy: this.filterBy,
        condition: this.condition,
        text: this.filterText,
      },
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}
.select {
  width: 250px;
}
.container > * {
  margin-right: 16px;
}
input {
  border-color: rgba(60, 60, 60, 0.26);
  border-radius: 4px;
}
button {
  background-color: white;
  border-color: rgba(60, 60, 60, 0.26);
  border-radius: 4px;
  height: 34.8px;
  cursor: pointer;
}
</style>
