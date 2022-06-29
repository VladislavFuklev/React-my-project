const product = [
  {
    id: 1,
    title: "Vivamus non augue mauris amet",
    properties: "October 10",
    image: "/img/descr1.jpeg",
    description:
      "<p class='descr'>Lorem ipsum dolor sit amet neque vitae mauris. Etiam malesuada ultricies. Nullam ut nunc odio eget volutpat a, rutrum ac, magna. Nulla facilisi. Nullam justo. Sed leo tristique senectus et ultrices sit amet, consectetuer adipiscing ornare. Nullam vulputate luctus. Nulla interdum libero. Maecenas tincidunt. Pellentesque dolor. In urna. Suspendisse sollicitudin. Vestibulum tempus purus fermentum imperdiet tincidunt, risus pede, luctus laoreet. Aenean ac eros quis eleifend congue. Nam dolor eget velit. Suspendisse at</p> <div class='flex'><div> <p class='flex-nubmer'>142</p><p class='place'>countires</p><p class='text-place'>Donec vestibulum justo a diam ultricies pel lentesque. Quisque mattis diam vel lac.</p></div><div><p class='flex-nubmer'>89</p><p class='place'>articles</p><p class='text-place'>Donec vestibulum justo a diam ultricies pel lentesque. Quisque mattis diam vel lac.</p></div><div><p class='flex-nubmer'>35</p><p class='place'>projects</p><p class='text-place'>Donec vestibulum justo a diam ultricies pel lentesque. Quisque mattis diam vel lac.</p></div></div> <div class='descr1Paragraph'>Praesent odio ac turpis luctus eu, ornare varius, leo. Suspendisse sed metus. Class aptent taciti sociosqu ad litora torquent per inceptos hymenaeos. Sed sed est. Sed venenatis. Morbi tincidunt. Nullam justo. Vestibulum ut justo a odio. Etiam et pede eget metus nonummy at, rhoncus dolor in interdum pellentesque quis, lacinia aliquet. In mauris sit amet leo. Aliquam erat consectetuer vestibulum varius. Cras ut orci at lorem odio tellus hendrerit sed, congue fringilla.</div> <div class='descr1Paragraph'>Class aptent taciti sociosqu ad litora torquent per inceptos hymenaeos. Maecenas vehicula, dui nulla, egestas sodales, augue commodo nec, ullamcorper ligula lorem odio sit amet, vestibulum wisi ultricies eu, magna. Fusce aliquet elit, gravida tellus tristique eget, porta eget, eros. In hac habitasse platea dictumst. Proin cursus magna. Sed placerat. Mauris vel risus. Nunc accumsan dictum, laoreet viverra. Cras tempus purus at risus auctor tincidunt. Sed sed tortor. In venenatis consequat. Donec iaculis. Curabitur est pretium wisi, sed leo. Sed tincidunt risus neque ultrices consectetuer. Etiam mollis ut, dolor. Maecenas.</div> <div ><input class='admin' type='text' placeholder='admin'></div>",
    category: "Travels",
  },
  {
    id: 2,
    image: "/img/descr2.jpeg",
    title: "Donec vel eros mauris amet suspendisse in erat mi sed",
    properties: "November 10",
    description:
      "<p class='descr'>Lorem ipsum dolor sit amet,  adipiscing elit. Quo modo? Et nemo nimium beatus est. Verum hoc idem saepe faciamus. Duo Reges: constructio interrete. Suo genere perveniant ad extremum; Sed ille, ut dixi, vitiose. Negat esse eam, inquit, propter se expetendam. Quid est, quod ab ea absolvi et perfici debeat?</p> <div class='subtext'>Ut pulsi recurrant? Ratio enim nostra consentit, pugnat oratio. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris. Qua igitur re ab deo vincitur, si aeternitate non vincitur?</div> <ul class='list-ul'><li class='list-li'>Superiores tres erant, quae esse possent, quarum est una sola defensa, eaque vehementer.</li><li class='list-li'>Istam voluptatem perpetuam quis potest praestare sapienti?</li><li class='list-li'>Quia dolori non voluptas contraria est, sed doloris privatio.</li></ul><div class='subtext'>Ut pulsi recurrant? Ratio enim nostra consentit, pugnat oratio. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris. Qua igitur re ab deo vincitur, si aeternitate non vincitur?</div> <h1>Inde igitur, inquit, ordiendum est.</h1><div class='subtext'>At, si voluptas esset bonum, desideraret. Aliter philosophos loqui putas oportere? Ratio enim nostra consentit, pugnat oratio. Comprehensum, quod cognitum non habet? Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita voluptate. Primum quid tu dicis breve? Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego; Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Praeclare hoc quidem. Quo plebiscito decreta a senatu est consuli quaestio Cn.</div>",
    category: "Countries",
  },
  {
    id: 3,
    image: "/img/descr3.jpeg",
    title: "Proin dui sodales imperdi sit",
    properties: "December 10",
    description:
      "<p class='descr'>Praesent consequat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum massa dui sed nulla ut nulla a mi. Fusce wisi nibh malesuada aliquet, lacus vitae mauris. Nam sit amet justo. Vestibulum ante ipsum eleifend adipiscing elit. Mauris viverra nunc.</p>",
    category: "Travels",
  },
  {
    id: 4,
    image: "/img/new1.jpeg",
    title: "Proin dui sodales imperdi sit",
    properties: "December 10",
    description:
      "<p class='descr'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo modo? Et nemo nimium beatus est. Verum hoc idem saepe faciamus. Duo Reges: constructio interrete. Suo genere perveniant ad extremum; Sed ille, ut dixi, vitiose. Negat esse eam, inquit, propter se expetendam. Quid est, quod ab ea absolvi et perfici debeat?</p>",
    category: "Countries",
  },
  {
    id: 5,
    image: "/img/new2.jpeg",
    title: "Proin dui sodales imperdi sit",
    properties: "December 10",
    description:
      "<p class=''descr>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo modo? Et nemo nimium beatus est. Verum hoc idem saepe faciamus. Duo Reges: constructio interrete. Suo genere perveniant ad extremum; Sed ille, ut dixi, vitiose. Negat esse eam, inquit, propter se expetendam. Quid est, quod ab ea absolvi et perfici debeat?</p>",
    category: "Nature",
  },
  {
    id: 6,
    image: "/img/descr2.jpeg",
    title: "Proin dui sodales imperdi sit",
    properties: "December 10",
    description:
      "<p class='descr'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo modo? Et nemo nimium beatus est. Verum hoc idem saepe faciamus. Duo Reges: constructio interrete. Suo genere perveniant ad extremum; Sed ille, ut dixi, vitiose. Negat esse eam, inquit, propter se expetendam. Quid est, quod ab ea absolvi et perfici debeat?</p>",
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
