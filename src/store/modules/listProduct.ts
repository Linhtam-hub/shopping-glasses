import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import v1 from '../../glassesImage/v1.png';
import v2 from '../../glassesImage/v2.png';
import v3 from '../../glassesImage/v3png';
import v4 from '../../glassesImage/v4.png';
import v5 from '../../glassesImage/v5.png';
import v6 from '../../glassesImage/v6.png';
import v7 from '../../glassesImage/v7.png';
import v8 from '../../glassesImage/v8.png';
@Module({ namespaced: true })
export default class ListProduct extends VuexModule {
  public product: Array<any> = [
    {
      id: 1,
      price: 80,
      name: "GUCCI G8850U",
      url: v1,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: v2,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 70,
      name: "DIOR D6700HQ",
      url: v2,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 300,
      name: "DIOR D6005U",
      url: v4,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 500,
      name: "PRADA P8750",
      url: v5,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 40,
      name: "PRADA P9700",
      url: v6,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 90,
      name: "FENDI F8750",
      url: v7,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 50,
      name: "FENDI F8500",
      url: v8,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  public itemsInCart: Array<any> = [];
  @Mutation
  public shoppingCart(item: any): void {
    this.itemsInCart.push(item);
  }
  @Action({ commit: "shoppingCart", rawError: true })
  public addToCart(item: any): any {
    return item;
  }
  get itemsInCarts(): Array<any> {
    return this.itemsInCart;
  }
  get products(): Array<any> {
    return this.product;
  }

}
