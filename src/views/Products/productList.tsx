import Component from "vue-class-component";
import Vue from "vue";
import { namespace } from "vuex-class";
import Product from "@/views/Products/product";
import ShoppingCart from "./shoppingCart";

const ListProduct = namespace('ListProduct');
@Component({
  components: {
    Product,
    ShoppingCart
  }
})
export default class ProductList extends Vue {
  @ListProduct.Getter
  products!: Array<any>;
  countProduct = 0;

  @ListProduct.Action
  public addToCart!: (count: any) => void


  handleAddToCart(item: any): void {
    this.countProduct = this.countProduct + 1;
    this.addToCart(item);

  }
  render() {
    const element =
      this.products.map((product, index) => {
        return (
          <Product products={product} key={index} on-eventAddToCart={this.handleAddToCart} />

        )
      })

    return (
      <div class="container">
        <div class="mt-2">
          <router-link to="/itemInCart">
            <i class="fa fa-cart-plus fa-2x text-secondary">({this.countProduct})</i>
          </router-link>
        </div>
        <div class="row justify-content-center align-items-center">
          {element}
        </div>
      </div>

    );
  }
}
