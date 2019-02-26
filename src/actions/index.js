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

export const toggleDiscount = (event, discountType) => {
  const checked = event.target.checked;
  if (checked) {
    return {
      type: "APPLY_DISCOUNT",
      payload: discountType
    };
  }

  if (!checked) {
    return {
      type: "REMOVE_DISCOUNT",
      payload: discountType
    };
  }
};
