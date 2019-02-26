export const addItemToCart = item => {
  return {
    type: "ADD_ITEM_TO_CART",
    payload: item
  };
};

export const removeItemFromCart = index => {
  return {
    type: "REMOVE_ITEM_FROM_CART",
    payload: index
  };
};
