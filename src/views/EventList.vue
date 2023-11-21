<template>
  <div class="home">
    <!-- v-for="event in events" :key="event.id" :event="event" -->
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "EventList",
  components: {
    HelloWorld,
  },
  // data() {
  //   return {
  //     events: null,
  //   };
  // },
  // created() {
  //   axios
  //     .get("https://651f6b9944a3a8aa47699fb4.mockapi.io/api/v1/pens")
  //     .then((Response) => {
  //       this.events = Response.data;
  //     })
  //     .catch((Error) => {
  //       console.log(Error);
  //     });
  // },
};
</script>
<style scoped>
.home {
  font-size: 15px;
}
</style>
