const isInt = num => num % 1 === 0;

export const formatCurrency = amount => {
  const isInteger = isInt(amount);

  if (isInteger) {
    return `£${amount}.00`;
  } else {
    return `£${amount.toFixed(2)}`;
  }
};

export const calculateTotal = (data = [], discount = 0) => {
  const dataLength = data.length > 0;

  if (dataLength) {
    let total = 0;

    data.forEach(item => {
      const { price } = item;

      total = total + price;
    });

    return total - discount;
  } else {
    return 0;
  }
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
