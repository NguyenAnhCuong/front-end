<template>
  <div>
    <!-- <section id="postHeroImage" class="hero"></section> -->

    <section class="post-detail">
      <div class="container">
        <div class="post-detail-main shadow-sm">
          <div class="post-title-wrapper">
            <h1 id="postDetailTitle">Edit a Item</h1>

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
              <!-- <div class="invalid-feedback">Please enter author of this post!</div> -->
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
              <!-- <div class="invalid-feedback">Please enter author of this post!</div> -->
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
              <!-- <div class="invalid-feedback">Please enter author of this post!</div> -->
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
              <button name="submit" class="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import axios from "axios";
import paperApi from "@/api/paperApi";
import { toast } from "@/util/common";
export default {
  data() {
    return {
      paperData: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const searchParams = new URLSearchParams(window.location.search);
        // console.log(searchParams);
        const paperId = searchParams.get("id");
        // console.log(penId);
        const response = await paperApi.getById(paperId);
        this.paperData = response;
        if (paperId) {
          document.getElementById("postName").value = this.paperData.name;
          document.getElementById("postDay").value = this.paperData.productDay;
          document.getElementById("postColor").value = this.paperData.color;
          document.getElementById("postPrice").value = this.paperData.price;
          document.getElementById("postDescription").value = this.paperData.description;
        }

        const submitForm = document.getElementById("postForm");
        if (!submitForm) return;

        submitForm.addEventListener("submit", async (event) => {
          event.preventDefault();
          const formvalues = this.GetFormValue(submitForm);
          console.log(formvalues);
          const response = await paperApi.update(paperId, formvalues);
          console.log(response);
          //redirect to PenList page
          this.$router.push({ name: "PaperList" });
          toast.success("Edit item Success!!!");
        });
      } catch (error) {
        console.error("Error fetching pen data:", error);
        toast.error("fail to edit item");
      }
    },
    GetFormValue(form) {
      const formvalues = {};
      // ["Name", "Day", "color", "Price"].forEach((name) => {
      //   const field = form.querySelector(`[name="${name}"]`);
      //   if (field) values[name] = field.value;
      // });
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
