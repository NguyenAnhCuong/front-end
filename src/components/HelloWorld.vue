<template>
  <div class="hello">
    <!-- display event data -->
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/butbi.jpg" class="d-block w-100" alt="laptop" style="width: 100px" />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="@/assets/vanphong.jpg" class="d-block w-100" alt="man with baby" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="@/assets/vp.jpg" class="d-block w-100" alt="fashion" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <section>
      <div class="container">
        <ul class="ulList">
          <li class="col" style="display: inline-block">
            <a href="" style="text-decoration: none">
              <div>
                <img src="@/assets/pen.jpg" alt="" class="rounded mx-auto d-block" />
              </div>
              <div>
                <p style="text-align: center">các loại but</p>
              </div>
            </a>
          </li>
          <li class="col" style="display: inline-block">
            <a href="" style="text-decoration: none">
              <div>
                <img src="@/assets/paper.jpg" alt="" srcset="" class="rounded mx-auto d-block" />
              </div>
              <div>
                <p style="text-align: center">các loại giấy</p>
              </div>
            </a>
          </li>
          <li class="col" style="display: inline-block">
            <a href="" style="text-decoration: none">
              <div>
                <img
                  src="@/assets/studentstuff.jpg"
                  alt=""
                  srcset=""
                  class="rounded mx-auto d-block"
                />
              </div>
              <div>
                <p style="text-align: center">dung cu hoc sinh</p>
              </div>
            </a>
          </li>
          <li class="col" style="display: inline-block">
            <a href="" style="text-decoration: none">
              <div>
                <img src="@/assets/veshinh.jpg" alt="" class="rounded mx-auto d-block" />
              </div>
              <div>
                <p style="text-align: center">Do dung ve sinh</p>
              </div>
            </a>
          </li>
          <li class="col" style="display: inline-block">
            <a href="" style="text-decoration: none">
              <div>
                <img src="@/assets/kepa4.jpg" alt="" srcset="" class="rounded mx-auto d-block" />
              </div>
              <div>
                <p style="text-align: center">Kep a4</p>
              </div>
            </a>
          </li>
          <li class="col" style="display: inline-block">
            <a href="" style="text-decoration: none">
              <div>
                <img src="@/assets/dapghim.jpg" alt="" srcset="" class="rounded mx-auto d-block" />
              </div>
              <div>
                <p style="text-align: center">Dap ghim tai lieu</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  // props: {
  //   msg: String,
  //   event: Object,
  // },
  // eslint-disable-next-line no-dupe-keys
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
