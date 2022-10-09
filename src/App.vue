<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <SortMenu
      @changeSort="changefilterBy"
      :filterBy="filterBy"
      :condition="condition"
      :filterText="filterText"
    />
    <MainTable
      @sortTable="sortTable"
      :dataTable="pageDataTable"
      :sortBy="sort"
    />
    <TablePagination
      @changePage="changePage"
      :page="page"
      :countPages="Math.ceil(viewDataTable.length / maxTableSize)"
    />
  </div>
</template>

<script>
import MainTable from "./components/MainTable.vue";
import SortMenu from "./components/SortMenu.vue";
import TablePagination from "./components/TablePagination.vue";
import axios from "axios";
import { convertDate } from "./functions";

const URL = "http://localhost:8081/api/table";

export default {
  name: "App",
  components: {
    MainTable,
    SortMenu,
    TablePagination,
  },
  data() {
    return {
      dataTable: [],
      viewDataTable: [],
      filterBy: "",
      condition: "",
      filterText: "",
      maxTableSize: 4,
      page: 1,
      sort: {
        title: "",
        order: "asc",
      },
    };
  },
  methods: {
    changefilterBy(value) {
      ({
        filterBy: this.filterBy,
        condition: this.condition,
        text: this.filterText,
      } = value);
      this.filterTable();
      this.changePage(1);
    },
    filterTable() {
      this.viewDataTable = this.dataTable.filter((entry) =>
        this.applyFilterRule(entry[this.filterBy], this.condition)
      );
    },
    applyFilterRule(filterValue, condition) {
      if (typeof filterValue === "number") this.filterText = +this.filterText;
      if (typeof filterValue === "string")
        this.filterText = String(this.filterText);
      if (condition === "равно") return filterValue === this.filterText;
      if (condition === "содержит")
        return filterValue.includes(String(this.filterText));
      if (condition === "больше") return filterValue > this.filterText;
      if (condition === "меньше") return filterValue < this.filterText;
    },
    changePage(newPage) {
      this.page = newPage;
    },
    sortTable(sort) {
      [this.sort.title, this.sort.order] = sort;
      this.viewDataTable = this.viewDataTable.sort((prev, next) => {
        const prop = this.sort.title;
        if (typeof prev[prop] === "number") {
          return this.sort.order === "asc"
            ? prev[prop] - next[prop]
            : next[prop] - prev[prop];
        }
        if (typeof prev[prop] === "string") {
          const entry1 = prev[prop].toUpperCase();
          const entry2 = next[prop].toUpperCase();
          if (entry1 < entry2) {
            return this.sort.order === "asc" ? -1 : 1;
          }
          if (entry1 > entry2) {
            return this.sort.order === "asc" ? 1 : -1;
          }
          return 0;
        }
      });
    },
  },
  mounted() {
    axios
      .get(URL)
      .then((res) => (this.dataTable = res.data))
      .then(() => {
        this.viewDataTable = this.dataTable.map((entry) => {
          delete entry.id;
          entry.date = convertDate(entry.date);
          return entry;
        });
      });
  },
  computed: {
    pageDataTable() {
      return this.viewDataTable.slice(
        this.maxTableSize * this.page - this.maxTableSize,
        this.maxTableSize * this.page
      );
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
