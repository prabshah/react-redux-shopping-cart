const isInt = num => num % 1 === 0;

export const formatCurrency = amount => {
  const isInteger = isInt(amount);

  if (isInteger) {
    return `£${amount}.00`;
  } else {
    return `£${amount.toFixed(2)}`;
  }
};

export const calculateDisc = type => {
  let amount = 0;

  if (type === "default") {
    amount = 5;
  } else if (type === "overFifty") {
    amount = 10;
  } else if (type === "overSeventyFive") {
    amount = 15;
  }
  return amount;
};

export const checkValue = (arr, valueOne, valueTwo) => {
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
