<template>
  <ul>
    <li class="col-12 col-md-6">
      <div class="post-item mb-4">
        <div class="card">
          <img
            data-id="thumbnail"
            :src="paper.img"
            class="card-img-top"
            alt="recipe"
            style="width: 100%; height: 200px"
          />

          <div class="card-body">
            <h5 data-id="title" class="card-title">{{ paper.name }}</h5>

            <p data-id="description" class="card-text">{{ paper.description }}</p>

            <p class="card-text">
              <small class="text-muted">Color:</small>
              <small data-id="type" class="text-muted font-weight-bold">
                {{ paper.color }} -
              </small>
              <small data-id="timeSpan" class="text-muted"> {{ paper.productDay }} - </small>
              <small data-id="timeSpan" class="text-muted"> price:{{ paper.price }}VND </small>
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
export default {
  name: "PaperComponent",
  props: ["paper"],
  methods: {
    EditEvent() {
      this.$router.push({ name: "EditPaper", params: { id: this.paper.id } });
    },
    RemoveEvent() {
      this.$router.push({ name: "RemovePaper", params: { id: this.paper.id } });
    },
  },
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
