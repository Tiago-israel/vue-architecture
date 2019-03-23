<template>
  <div id="wrapper">
    <side-bar></side-bar>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <top-bar></top-bar>
        <!-- Begin Page Content -->
        <div class="container-fluid">
          <div class="row">
            <div v-for="(card,index) in projeto.cards" :key="index" class="col-12 col-sm-6 col-md-4">
              <collapse-card :title="card.name" :idCard="`card${index}`">
                <template slot="card-body">
                  <container group-name="2" @drop="onDropTask(card, $event)" :get-child-payload="(i) => getChildPayload(i,card.tasks)">
                    <draggable orientation="horizontal" v-for="(task,indexTask) in card.tasks" :key="indexTask">
                      <div class="draggable-item">
                        <card>
                          <template slot="card-body">{{ task.descricao }}</template>
                        </card>
                      </div>
                    </draggable>
                  </container>
                </template>
              </collapse-card>
            </div>
          </div>
        </div>
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
import Card from "./components/Card.vue";
import CollapseCard from "./components/CollapseCard.vue";
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag } from "./utils/helpers";
const httpClient = require("./core/http-client/http-client.js").default(
  "projects"
);

export default {
  name: "app",
  components: {
    SideBar,
    TopBar,
    Footer,
    Card,
    CollapseCard,
    Container,
    Draggable
  },
  data: () => ({
    projeto: {}
  }),
  methods: {
    onDropCard(projeto, dropResult){
      projeto.cards = applyDrag(projeto.cards, dropResult);
    },
    onDropTask(card, dropResult) {
      card.tasks = applyDrag(card.tasks, dropResult);
      console.log(this.projeto)
    },
    getChildPayload: (index, list) => list[index],
    buscarProjeto: async id => {
      const { data } = await httpClient.get(id);
      return data;
    }
  },
  async mounted() {
    this.projeto = await this.buscarProjeto("1");
  }
};
</script>

<style>
</style>
