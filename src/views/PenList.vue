<template>
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
      <router-link to="/addpen" class="router-link">Add New Item</router-link>
    </button>
  </div>

  <div class="penPage">
    <nav class="posts-nav" aria-label="Posts navigation">
      <ul id="pagination" class="pagination justify-content-center">
        <li class="page-item">
          <a @click.prevent="prePage" class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true"> &laquo; Prev </span>
          </a>
        </li>
        <li class="page-item">
          <a @click.prevent="nextPage" class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true"> Next &raquo; </span>
          </a>
        </li>
      </ul>
    </nav>
    <pen-component v-for="pen in pens" :key="pen.id" :pen="pen" />
  </div>
</template>

<script>
import PenComponent from "@/components/PenComponent.vue";
import penApi from "@/api/penApi";
import debounce from "lodash.debounce";
// import axios from "axios";
export default {
  name: "PenList",
  components: {
    PenComponent,
  },
  data() {
    return {
      pens: null,
      totalPages: 10,
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
        if (!url.searchParams.get("limit")) url.searchParams.set("limit", 5);
        // if (!url.searchParams.get("name")) url.searchParams.set("name", name);
        history.pushState({}, "", url);

        const queryParams = url.searchParams;
        // const queryParams = url.searchParams;
        // console.log(queryParams.toString());
        const data = await penApi.getAll(queryParams);
        if (!Array.isArray(data)) return;

        const ulPagination = document.getElementById("pagination");
        ulPagination.dataset.page = url.searchParams.get("page");

        this.pens = data;
        console.log(this.pens);

        this.initSearch();
      } catch (error) {
        console.log("Fail to fetch API", error);
      }
    },

    nextPage() {
      console.log("next click");
      const ulPagination = document.getElementById("pagination");
      if (!ulPagination) return;

      const page = Number.parseInt(ulPagination.dataset.page);
      if (page >= this.totalPages) return;

      this.handleFilterChange("page", page + 1);
    },

    prePage() {
      console.log("pre click");
      const ulPagination = document.getElementById("pagination");
      if (!ulPagination) return;

      const page = Number.parseInt(ulPagination.dataset.page);
      if (page <= 1) return;

      this.handleFilterChange("page", page - 1);
    },

    async handleFilterChange(filterName, filterValue) {
      try {
        const url = new URL(window.location);
        if (filterName) url.searchParams.set(filterName, filterValue);
        if (filterName === "name") url.searchParams.set("page", 1);
        history.pushState({}, "", url);

        const data = await penApi.getAll(url.searchParams);
        const ulPagination = document.getElementById("pagination");
        ulPagination.dataset.page = url.searchParams.get("page");

        this.pens = data;
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
.penPage {
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
