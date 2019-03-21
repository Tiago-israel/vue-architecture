<template>
  <div id="wrapper">
    <side-bar></side-bar>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <top-bar></top-bar>
        <!-- Begin Page Content -->
        <div class="container-fluid"></div>
        <!-- /.container-fluid -->
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import SideBar from "./core/components/navigation/SideBar.vue";
import TopBar from "./core/components/navigation/TopBar.vue";
import Footer from "./core/components/footer/Footer.vue";

const httpClient = require("./core/http-client/http-client.js").default("people");

export default {
  name: "app",
  components: {
    SideBar,
    TopBar,
    Footer
  },
  async mounted() {
    const { data } = await httpClient.get("1");
    console.log(data);
  }
};
</script>

<style>
</style>
