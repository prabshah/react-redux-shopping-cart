import { data } from "../data/inventory";
import { updateStockOnCartChange } from "../utilities/helperFunctions";

const initialState = {
  inventory: data,
  cartList: [],
  discount: false,
  discountType: ""
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const { id, stock } = action.payload;
      const itemAvailable = stock > 0;

      if (!itemAvailable) {
        alert("Sorry, the item is not available at the moment...");
        return state;
      }

      return {
        ...state,
        cartList: [...state.cartList, action.payload],
        inventory: updateStockOnCartChange(state.inventory, id)
      };
    case "REMOVE_ITEM_FROM_CART":
      const { cartList, inventory } = state;
      const itemRemoved = cartList.splice(action.payload, 1);

      return {
        ...state,
        cartList,
        inventory: updateStockOnCartChange(
          inventory,
          itemRemoved[0].id,
          "increase"
        )
      };
    default:
      return state;
  }
};
