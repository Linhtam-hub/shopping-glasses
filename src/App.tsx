import Vue from "vue";
import Component from "vue-class-component";
import ProductList from "./views/Products/productList";

@Component({
  components: {
    ProductList,
  }
})
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <div id="main" class="w-100">
          <div id="header">
            <app-header />
          </div>
          <div id="menu">
            <app-menu />
          </div>
          <div id="content-main" class="container-fluid body-content">
            <router-view />
          </div>
        </div>
      </div>
    );
  }
}
