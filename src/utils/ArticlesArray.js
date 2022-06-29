const product = [
  {
    id:1,
    title: "Vivamus non augue mauris amet",
    properties: "October 10",
    image: "img/descr1.jpeg",
    category: "Travels"
  },
  {
    id:2,
    image: "img/descr2.jpeg",
    title: "Donec vel eros mauris amet suspendisse in erat mi sed",
    properties: "November 10",
    category: "Countries"
  },
  {
    id:3,
    image: "img/descr3.jpeg",
    title: "Proin dui sodales imperdi sit",
    properties: "December 10",
    category: "Travels"
  },
  {
    id:4,
    image: "img/descr3.jpeg",
    title: "Proin dui sodales imperdi sit",
    properties: "December 10",
    category: "Countries"
  },
  {
    id:5,
    image: "img/descr1.jpeg",
    title: "Proin dui sodales imperdi sit",
    properties: "December 10",
    category: "Nature"
  },
  {
    id:6,
    image: "img/descr2.jpeg",
    title: "Proin dui sodales imperdi sit",
    properties: "December 10",
    category: "Nature"
  },
];


export const getProductsObject = (array) =>
    array.reduce(
        (obj, product) => ({
            ...obj,
            [product.id]: product,
        }),
        {}
    )






export default product;