<template>
  <div>
    <!-- <section id="postHeroImage" class="hero"></section> -->

    <section class="post-detail">
      <div class="container">
        <div class="post-detail-main shadow-sm">
          <div class="post-title-wrapper">
            <h1 id="postDetailTitle">Buy a Item</h1>

            <p>
              <small class="text-muted"
                >Please enter the following information and submit then.</small
              >
            </p>
          </div>

          <form id="postForm" class="post-form" novalidate>
            <div class="form-group mb-3">
              <label for="postName">Name</label>
              <input
                id="postName"
                type="text"
                class="form-control"
                name="name"
                placeholder="pls enter name of item"
                required
              />
              <div class="invalid-feedback">Please write a nice Name for your item &gt;.&lt;</div>
            </div>

            <div class="form-group mb-3">
              <label for="postDay">Day product</label>
              <input
                id="postDay"
                type="text"
                class="form-control"
                name="productDay"
                placeholder="Day product"
                required
              />
            </div>

            <div class="form-group mb-3">
              <label for="postColor">Color</label>
              <input
                id="postColor"
                type="text"
                class="form-control"
                name="color"
                placeholder="Color of item"
                required
              />
            </div>

            <div class="form-group mb-3">
              <label for="postPrice">Price</label>
              <input
                id="postPrice"
                type="text"
                class="form-control"
                name="price"
                placeholder="Price of item"
                required
              />
            </div>

            <div class="form-group mb-3">
              <label for="postDescription">Description</label>
              <textarea
                id="postDescription"
                class="form-control"
                name="description"
                rows="3"
              ></textarea>
            </div>

            <div class="text-center">
              <button @click="handleClick" class="btn btn-primary">Buy</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import penApi from "@/api/penApi";
import { toast } from "@/util/common";
export default {
  data() {
    return {};
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const searchParams = new URLSearchParams(window.location.search);
      const penId = searchParams.get("id");
      const response = await penApi.getById(penId);
      this.penData = response;
      if (penId) {
        document.getElementById("postName").value = this.penData.name;
        document.getElementById("postDay").value = this.penData.productDay;
        document.getElementById("postColor").value = this.penData.color;
        document.getElementById("postPrice").value = this.penData.price;
        document.getElementById("postDescription").value = this.penData.description;
      }
    },
    async handleClick(e) {
      try {
        e.preventDefault();
        const searchParams = new URLSearchParams(window.location.search);
        const penId = searchParams.get("id");
        const response = await penApi.remove(penId);
        console.log(response);
        toast.success("Thank you for purchase!!");
        this.$router.push({ name: "PenList" });
      } catch (error) {
        console.log("fail to purchase");
        toast.error("Purchase Error");
      }
    },
  },
};
</script>

<style></style>
