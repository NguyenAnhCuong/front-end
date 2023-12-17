<template>
  <div class="paperPage">
    <!-- search box -->
    <div class="input-group mb-3">
      <span class="input-group-text" id="search">Search</span>
      <input
        id="searchInput"
        type="text"
        class="form-control"
        placeholder="search by name"
        aria-label="search"
        aria-describedby="search"
      />
    </div>

    <div class="text-center" style="padding-bottom: 10px">
      <button class="btn btn-light">
        <router-link to="/addpaper" class="router-link">Add New Item</router-link>
      </button>
    </div>
    <paper-component v-for="paper in paperList" :key="paper.id" :paper="paper" />
    <div id="limit" class="d-flex justify-content-center align-items-center">
      <button class="btn btn-success" @click="HideLimit">Hide</button>
      <button class="btn btn-primary" @click="UpdateLimit">More</button>
    </div>
  </div>
</template>

<script>
import PaperComponent from "@/components/PaperComponent.vue";
import paperApi from "@/api/paperApi";
import debounce from "lodash.debounce";
import { toast } from "@/util/common";
export default {
  name: "PaperList",
  components: {
    PaperComponent,
  },
  data() {
    return {
      paperList: [],
    };
  },
  created() {
    this.getApi();
  },
  methods: {
    async getApi() {
      try {
        // const name = "melis";
        // const queryParams = new URLSearchParams(window.location.search);
        const url = new URL(window.location);
        if (!url.searchParams.get("page")) url.searchParams.set("page", 1);
        if (!url.searchParams.get("limit")) url.searchParams.set("limit", 6);
        // if (!url.searchParams.get("name")) url.searchParams.set("name", name);
        history.pushState({}, "", url);

        const queryParams = url.searchParams;
        // const queryParams = url.searchParams;
        // console.log(queryParams.toString());
        const data = await paperApi.getAll(queryParams);
        if (!Array.isArray(data)) return;

        const ulLimit = document.getElementById("limit");
        ulLimit.dataset.limit = url.searchParams.get("limit");

        this.paperList = data;
        console.log(this.paperList);

        this.initSearch();
      } catch (error) {
        console.log("Fail to fetch API", error);
      }
    },
    HideLimit() {
      const ulLimit = document.getElementById("limit");
      const limit = Number.parseInt(ulLimit.dataset.limit);
      if (limit <= 0) {
        toast.error("there're nothing to hide anymore");
        return;
      }

      this.handleFilterChange("limit", limit - 3);
    },

    UpdateLimit() {
      const ulLimit = document.getElementById("limit");
      const limit = Number.parseInt(ulLimit.dataset.limit);

      this.handleFilterChange("limit", limit + 3);
    },

    async handleFilterChange(filterName, filterValue) {
      try {
        const url = new URL(window.location);
        if (filterName) url.searchParams.set(filterName, filterValue);
        if (filterName === "name") url.searchParams.set("page", 1);
        history.pushState({}, "", url);

        const data = await paperApi.getAll(url.searchParams);
        const ulLimit = document.getElementById("limit");
        ulLimit.dataset.limit = url.searchParams.get("limit");

        this.paperList = data;
      } catch (error) {
        console.log("failt to fetch data", error);
      }
    },

    initSearch() {
      const search = document.getElementById("searchInput");
      if (!search) return;
      console.log(search);

      const debounceSearch = debounce(
        (event) => this.handleFilterChange("name", event.target.value),
        1000,
      );
      search.addEventListener("input", debounceSearch);
    },
  },
};
</script>
<style scoped>
.paperPage {
  font-size: 15px;
}
.router-link {
  text-align: center;
  text-decoration-line: none;
}

.pagination {
  cursor: pointer;
}

.pagination li {
  display: inline-block;
  margin: 0 5px;
}

.pagination .page-item.disabled {
  pointer-events: none;
}
</style>
