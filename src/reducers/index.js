import { data } from "../data/inventory";
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  APPLY_DISCOUNT,
  REMOVE_DISCOUNT
} from "../actions/constants";
import {
  updateStockOnCartChange,
  calculateDisc
} from "../utilities/helperFunctions";

const initialState = {
  inventory: data,
  cartList: [],
  discountType: "",
  total: 0,
  discount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const { id, stock, price } = action.payload;
      const itemAvailable = stock > 0;

      if (!itemAvailable) {
        alert("Sorry, the item is not available at the moment...");
        return state;
      }

      return {
        ...state,
        cartList: [...state.cartList, action.payload],
        inventory: updateStockOnCartChange(state.inventory, id),
        total: state.total + price
      };
    case REMOVE_ITEM_FROM_CART:
      const { cartList, inventory } = state;
      const itemRemoved = cartList.splice(action.payload, 1);

      return {
        ...state,
        cartList,
        inventory: updateStockOnCartChange(
          inventory,
          itemRemoved[0].id,
          "increase"
        ),
        total: state.total - itemRemoved[0].price
      };
    case APPLY_DISCOUNT:
      return {
        ...state,
        total: state.total - calculateDisc(action.payload)
      };
    case REMOVE_DISCOUNT:
      return {
        ...state,
        total: state.total + calculateDisc(action.payload)
      };
    default:
      return state;
  }
};
