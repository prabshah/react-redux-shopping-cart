const isInt = num => num % 1 === 0;

export const formatCurrency = currency => {
  const isInteger = isInt(currency);

  if (isInteger) {
    return `£${currency}.00`;
  } else {
    return `£${currency.toFixed(2)}`;
  }
};

export const calculateDiscount = type => {
  let discount = 0;

  if (type === "default") {
    discount = 5;
  } else if (type === "overFifty") {
    discount = 10;
  } else {
    discount = 15;
  }
  return discount;
};

export const getCartTotal = (data = []) => {
  let cartTotal = 0;
  data.forEach(item => {
    cartTotal = cartTotal + item.price;
  });
  return cartTotal;
};

export const handleNegativeNum = num => {
  if (num < 0) {
    return 0;
  }
  return num;
};

export const findValueInArray = (arr, valueOne, valueTwo) => {
  return arr.some(el => {
    return el.category === valueOne || el.category === valueTwo;
  });
};

export const updateStockOnCartChange = (data = [], id, action = "decrease") => {
  if (data.length > 0) {
    return data.map(d => {
      if (d.id === id) {
        let stockCount = d.stock;
        action === "increase"
          ? (d.stock = stockCount + 1)
          : (d.stock = stockCount - 1);
        return d;
      } else {
        return d;
      }
    });
  }
};
