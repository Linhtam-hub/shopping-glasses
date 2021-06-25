import Component from "vue-class-component";
import Vue from "vue";
import "./Menu.scss";

@Component({})
export default class Menu extends Vue {
  render() {
    return (
      <div class="menu">
        <ul>
          <li>
            <router-link to={{ path: "/" }}>Home</router-link>
          </li>
          <li>
            <router-link to={{ path: "/itemInCart" }}>Shopping Cart</router-link>
          </li>
        </ul>
      </div>
    );
  }
}
