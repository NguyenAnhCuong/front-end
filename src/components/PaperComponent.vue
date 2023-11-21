<template>
  <div class="row">
    <ul class="nav justify-content-between align-items-center">
      <li class="nav-item">
        <a class="nav__link" href="">
          <img class="nav__logo" src="#" alt="" />
        </a>
      </li>

      <li class="nav-item">
        <router-view class="nav__link" href="#"
          ><i class="fas fa-plus-circle mr-1"></i>Add new post</router-view
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PenComponent",
  props: {
    pens: null,
  },
};
</script>

<style scoped></style>
