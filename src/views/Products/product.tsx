import Component from "vue-class-component";
import Vue from "vue";
import { Emit, Prop } from "vue-property-decorator";
@Component({})
export default class Product extends Vue {
  @Prop() readonly products!: any;
  @Prop({ type: String }) private readonly mes!: string;
  @Prop() readonly countProduct!: number;

  @Emit('eventAddToCart')
  eventAddToCart(item: any): any {
    return item;
  }

  handleAddToCart(item: any) {
    this.eventAddToCart(item)
  }
  render() {
    return (

      <div class="col-3 mt-3">
        <b-card b-card
          title={this.products.name}
          img-src={this.products.url}
          img-height="100px"
          img-alt="Image"
          img-top tag="article"
          style={{ maxWidth: '20rem' }} s
        >
          <b-card-text class="text-primary">
            <span class="">Price: {this.products.price}<sup>$</sup></span>
            <span class="fa fa-star text-warning"></span>
            <span class="fa fa-star text-warning"></span>
            <span class="fa fa-star text-warning"></span>
          </b-card-text>
          <b-card-text>
            <p>{this.products.desc}</p>
          </b-card-text>
          <b-button variant="primary" on-click={(_e: Event) => { this.handleAddToCart(this.products) }}>
            Add To Cart
          </b-button>
        </b-card>
      </div>
    );
  }
}
