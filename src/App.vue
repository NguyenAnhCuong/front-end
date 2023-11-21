<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid bg-info">
      <a href="#" class="navbar-brand"
        ><img
          src="@/assets/frontend.jpg"
          alt=""
          srcset=""
          class="img-fluid img-thumbnail"
          style="width: 50px"
      /></a>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="menu" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/pen">Pen</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/paper">Paper</router-link></li>
          <li class="nav-item">
            <router-link class="nav-link" to="/student">Student</router-link>
          </li>
          <li class="nav-item"><router-link class="nav-link" to="#">Ve sinh</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="#">Kep A4</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="#">Dap ghim</router-link></li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Add New item</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
ul {
  list-style-type: none;
}

::placeholder {
  font-style: italic;
}

.nav .nav__logo {
  height: 40px;
  width: auto;
}

.nav .nav__link {
  text-decoration: none;
}

.nav .nav__link > i {
  margin-right: 5px;
}
.ulList {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.ulList > li {
  flex: 0 0 calc(30%);
  margin: 10px;
}
.carousel img {
  width: 70%; /* Đặt chiều rộng của ảnh là 100% của phần tử cha (carousel) */
  height: 450px; /* Tự động tính chiều cao để giữ tỷ lệ khung hình */
}
</style>
