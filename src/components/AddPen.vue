<template>
  <div>
    <nav class="d-flex justify-content-center align-items-center">
      <router-link to="/addpen">Pen</router-link> |
      <router-link to="/addpaper">Paper</router-link>
    </nav>
    <!-- <section id="postHeroImage" class="hero"></section> -->

    <section class="post-detail">
      <div class="container">
        <div class="post-detail-main shadow-sm">
          <div class="post-title-wrapper">
            <h1 id="postDetailTitle">Add a new pen</h1>

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
              <button @click="handleSaveClick" class="btn btn-primary">Save</button>
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
// import axios from "axios";
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    handleSaveClick(event) {
      event.preventDefault();
      console.log("click");
      const submitForm = document.getElementById("postForm");
      if (submitForm) {
        const formvalues = this.GetFormValue(submitForm);
        const apiFormData = {
          name: formvalues.name,
          productDay: formvalues.productDay,
          color: formvalues.color,
          price: formvalues.price,
          description: formvalues.description,
        };
        this.addItem(apiFormData);
      }
      //reset form
      document.getElementById("postName").value = "";
      document.getElementById("postDay").value = "";
      document.getElementById("postColor").value = "";
      document.getElementById("postPrice").value = "";
      document.getElementById("postDescription").value = "";

      toast.success("Add New Item Success");
      this.$router.push({ name: "PenList" });
    },
    async addItem(apiFormData) {
      try {
        const response = await penApi.add(apiFormData);
        console.log(response);
      } catch (error) {
        console.error("Error fetching pen data:", error);
      }
    },
    GetFormValue(form) {
      const formvalues = {};
      const data = new FormData(form);
      for (const [key, value] of data) {
        formvalues[key] = value;
      }
      return formvalues;
    },
  },
};
</script>

<style></style>
