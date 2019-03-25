<template>
  <div id="wrapper">
    <side-bar></side-bar>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <top-bar></top-bar>
        <!-- Begin Page Content -->
        <div class="">
            <Container orientation="horizontal" @drop="onColumnDrop($event)" :tag="{value: '',props:{class: ''}}">
              <draggable v-for="card in projeto.cards" :key="card.id" :tag="{value: '',props:{class: 'col-md-4'}}">
                <collapse-card :title="card.name" :idCard="`card${card.id}`">
                  <template slot="card-body">
                    <container
                      group-name="2"
                      @drop="onDropTask(card, $event)"
                      :get-child-payload="(i) => getChildPayload(i,card.tasks)"
                    >
                      <draggable
                        orientation="horizontal"
                        v-for="(task,indexTask) in card.tasks"
                        :key="indexTask"
                      >
                        <div>
                          <card>
                            <template slot="card-body">{{ task.descricao }}</template>
                          </card>
                        </div>
                      </draggable>
                    </container>
                  </template>
                </collapse-card>
              </draggable>
            </Container>
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
    onColumnDrop(dropResult) {
      const projeto = Object.assign({}, this.projeto);
      projeto.cards = applyDrag(projeto.cards, dropResult);
      this.projeto = projeto;
    },
    onDropTask(card, dropResult) {
      card.tasks = applyDrag(card.tasks, dropResult);
      console.log(this.projeto);
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
  .smooth-dnd-container.horizontal{
    display: flex !important;
  }
</style>
