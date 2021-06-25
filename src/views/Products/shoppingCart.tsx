import Component from "vue-class-component";
import Vue from "vue";
import { namespace } from "vuex-class";
const ListProduct = namespace('ListProduct');

@Component({})
export default class ShoppingCart extends Vue {

    @ListProduct.Getter
    itemsInCarts!: Array<any>;
    render() {
        const element = this.itemsInCarts.map((item, index) => {
            return (
                <div className="col-12" key={index}>
                    <div class="d-flex flex-row align-items-center">
                        <img src={item.url} width="200px" height="100px" />
                        <span class="align-items-center ms-3 fw-bold" style={{ fontSize: "40px" }}>Price: {item.price} $</span>
                    </div>
                </div>
            )
        })
        return (
            <div class="container">
                <div class="row d-flex flex-row justify-content-center align-items-center">
                    {element}
                </div>
            </div>
        );
    }
}
