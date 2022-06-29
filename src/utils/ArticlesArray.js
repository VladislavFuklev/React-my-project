const product = [
  {
    id: 1,
    title: "Vivamus non augue mauris amet",
    properties: "October 10",
    image: "/img/descr1.jpeg",
    description:
      "Lorem ipsum dolor sit amet neque vitae mauris. Etiam malesuada ultricies. Nullam ut nunc odio eget volutpat a, rutrum ac, magna. Nulla facilisi. Nullam justo. Sed leo tristique senectus et ultrices sit amet, consectetuer adipiscing ornare. Nullam vulputate luctus. Nulla interdum libero. Maecenas tincidunt. Pellentesque dolor. In urna. Suspendisse sollicitudin. Vestibulum tempus purus fermentum imperdiet tincidunt, risus pede, luctus laoreet. Aenean ac eros quis eleifend congue. Nam dolor eget velit. Suspendisse at",
    category: "Travels",
  },
  {
    id: 2,
    image: "/img/descr2.jpeg",
    title: "Donec vel eros mauris amet suspendisse in erat mi sed",
    properties: "November 10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo modo? Et nemo nimium beatus est. Verum hoc idem saepe faciamus. Duo Reges: constructio interrete. Suo genere perveniant ad extremum; Sed ille, ut dixi, vitiose. Negat esse eam, inquit, propter se expetendam. Quid est, quod ab ea absolvi et perfici debeat?",
    category: "Countries",
  },
  {
    id: 3,
    image: "/img/descr3.jpeg",
    title: "Proin dui sodales imperdi sit",
    properties: "December 10",
    description:
      "Praesent consequat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum massa dui sed nulla ut nulla a mi. Fusce wisi nibh malesuada aliquet, lacus vitae mauris. Nam sit amet justo. Vestibulum ante ipsum eleifend adipiscing elit. Mauris viverra nunc.",
    category: "Travels",
  },
  {
    id: 4,
    image: "/img/descr3.jpeg",
    title: "Proin dui sodales imperdi sit",
    properties: "December 10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo modo? Et nemo nimium beatus est. Verum hoc idem saepe faciamus. Duo Reges: constructio interrete. Suo genere perveniant ad extremum; Sed ille, ut dixi, vitiose. Negat esse eam, inquit, propter se expetendam. Quid est, quod ab ea absolvi et perfici debeat?",
    category: "Countries",
  },
  {
    id: 5,
    image: "/img/descr1.jpeg",
    title: "Proin dui sodales imperdi sit",
    properties: "December 10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo modo? Et nemo nimium beatus est. Verum hoc idem saepe faciamus. Duo Reges: constructio interrete. Suo genere perveniant ad extremum; Sed ille, ut dixi, vitiose. Negat esse eam, inquit, propter se expetendam. Quid est, quod ab ea absolvi et perfici debeat?",
    category: "Nature",
  },
  {
    id: 6,
    image: "/img/descr2.jpeg",
    title: "Proin dui sodales imperdi sit",
    properties: "December 10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo modo? Et nemo nimium beatus est. Verum hoc idem saepe faciamus. Duo Reges: constructio interrete. Suo genere perveniant ad extremum; Sed ille, ut dixi, vitiose. Negat esse eam, inquit, propter se expetendam. Quid est, quod ab ea absolvi et perfici debeat?",
    category: "Nature",
  },
];

export const getProductsObject = (array) =>
  array.reduce(
    (obj, product) => ({
      ...obj,
      [product.id]: product,
    }),
    {}
  );

export default product;
