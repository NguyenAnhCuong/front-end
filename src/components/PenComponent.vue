<template>
  <ul>
    <li class="col-12 col-md-6">
      <div class="post-item mb-4">
        <div class="card">
          <img
            data-id="thumbnail"
            :src="randomImg"
            class="card-img-top"
            alt="recipe"
            style="width: 100%; height: 200px"
          />

          <div class="card-body">
            <h5 data-id="title" class="card-title">{{ pen.name }}</h5>

            <p data-id="description" class="card-text">
              {{ pen.description }}
            </p>

            <p class="card-text">
              <small class="text-muted">Color:</small>
              <small data-id="type" class="text-muted font-weight-bold"> {{ pen.color }} - </small>
              <small data-id="timeSpan" class="text-muted"> {{ pen.productDay }} - </small>
              <small data-id="timeSpan" class="text-muted"> price:{{ pen.price }}VND </small>
            </p>
            <button @click.prevent="EditEvent">
              <router-link to="">Edit</router-link>
            </button>
            <button @click.prevent="RemoveEvent">Buy $$$</button>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "PenComponent",
  data() {
    return {
      randomImg: "",
    };
  },
  created() {
    this.getRandomImg();
  },
  methods: {
    async getRandomImg() {
      try {
        const response = await axios.get("https://picsum.photos/50/100");
        this.randomImg = response.request.responseURL;
      } catch (error) {
        console.error("Error fetching random image:", error);
      }
    },
    EditEvent() {
      this.$router.push({ name: "EditComponent", params: { id: this.pen.id } });
    },
    RemoveEvent() {},
  },
  props: ["pen"],
};
</script>

<style scoped>
li {
  list-style: none;
  text-align: center;
  margin: 0 10px;
}
ul {
  display: flex;
  justify-content: center;
}
</style>
