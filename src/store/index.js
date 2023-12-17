import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      products: [],
      product: "",
      limit: 10,
      skip: 2,
      total: 0,
    };
  },
  getters: {
    getProducts: (state) => state.products,
    getProduct: (state) => state.product,
    getLimit: (state) => state.limit,
    getSkip: (state) => state.skip,
    getTotal: (state) => state.total,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setLimit(state, limit) {
      state.limit = limit;
    },
    setSkip(state, skip) {
      state.skip = skip;
    },
    setTotal(state, total) {
      state.total = total;
    },
  },
  actions: {
    fetchApi(context) {
      axios
        .get("https://dummyjson.com/products?limit=" + context.state.skip * context.state.limit)
        .then((res) => {
          context.commit("setProducts", res.data.products);
          context.commit("setSkip", res.data.skip + 1);
          context.commit("setTotal", res.data.total);
        })
        .catch((err) => console.log("fall to call Api", err));
    },
  },
  modules: {},
});
