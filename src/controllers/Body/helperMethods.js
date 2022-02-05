function findCound(item, cart) {
  let obj = cart.find((object) => parseInt(object.id) === parseInt(item.id));
  if (obj) return obj.count;
  else return 0;
}
export function updateProductWithItsCount(products, cart) {
  let newArr = [];
  newArr = products.map((item, index) => {
    return {
      id: item.id,
      image: item.image,
      count: findCound(item, cart),
      title: item.title,
    };
  });
  return newArr;
}
