const kitchen = "/constructionWebImages/kitchen1-2.jpg";
const bathroom = "/constructionWebImages/paint2.jpg";
const wall = "/constructionWebImages/wall1.jpg";

//icon
const phoneCall = "/phone-call.png";
const instagram = "/icons/IG_Glyph_Fill.gif";
const facebook = "/icons/f_logo_RGB-Blue_100.png";
const yelp = "/icons/burst_icon@2x.png";

//gallery consts
const bathroom12before = "/residential-gallery/bathroom/bath12before.jpg";
const bathroom12after = "/residential-gallery/bathroom/bath12after.jpg";
const bathroom14before = "/residential-gallery/bathroom/bath14before.jpg";
const bathroom14after = "/residential-gallery/bathroom/bath14after.jpg";

const bedroom1 = "/residential-gallery/bedroom/bedroom1.jpg";
const bedroom2 = "/residential-gallery/bedroom/bedroom2.jpg";
const bedroom3 = "/residential-gallery/bedroom/bedroom3.jpg";
const bedroom4 = "/residential-gallery/bedroom/bedroom4.jpg";
const bedroom5 = "/residential-gallery/bedroom/bedroom5.jpg";
const bedroom6 = "/residential-gallery/bedroom/bedroom6.jpg";

const bathroom1 = "/residential-gallery/bathroom/bathroom8.jpg";
const bathroom2 = "/residential-gallery/bathroom/bathroomwall.jpg";

const kitchen1before = "/residential-gallery/kitchen1.1.1Before.jpg";
const kitchen1after = "/residential-gallery/kitchen1.1.1.jpg";

const interiorwindowbefore = "/residential-gallery/interiorWindowBefore.jpg";
const interiorWindowafter = "/residential-gallery/interiorWindowAfter.jpg";

const kitchenblack2tiny = "/residential-gallery/kitchen-black/2-tiny.jpg";
const kitchenblack1 = "/residential-gallery/kitchen-black/1.jpg";
const kitchenblack2 = "/residential-gallery/kitchen-black/2.jpg";
const kitchenblack3 = "/residential-gallery/kitchen-black/3.jpg";
const kitchenblack4 = "/residential-gallery/kitchen-black/4.jpg";

export const profile = '/Profile-tiny.jpg'
export const lights = "/altered/philosophy-hero.jpg";
export const icons = {
  phone: phoneCall,
  instagram: instagram,
  facebook: facebook,
  yelp: yelp,
};

export const heroResidentialImages = [
  {
    caption: "",
    url: kitchen,
  },
  {
    caption: "",
    url: bathroom,
  },
  {
    caption: "",
    url: wall,
  },
];

export const galleryResidentalImages = [
  {
    caption: "Kitchen Set",
    thumbnail: kitchen1after,
    data: [
      {
        caption: "before",
        url: kitchen1before,
      },
      {
        caption: "after",
        url: kitchen1after,
      },
    ],
  },
  {
    caption: "Bathroom Set",
    thumbnail: bathroom14after,
    data: [
      {
        caption: "before",
        url: bathroom12before,
      },
      {
        caption: "after",
        url: bathroom12after,
      },
      {
        caption: "before",
        url: bathroom14before,
      },
      {
        caption: "after",
        url: bathroom14after,
      },
    ],
  },
  {
    caption: "Interior Window",
    thumbnail: interiorWindowafter,
    data: [
      {
        caption: "before",
        url: interiorwindowbefore,
      },
      {
        caption: "after",
        url: interiorWindowafter,
      },
    ],
  },
  {
    caption: "Bedroom Set",
    thumbnail: bedroom1,
    data: [
      {
        caption: "",
        url: kitchenblack1,
      },
      {
        caption: "",
        url: bedroom1,
      },
      {
        caption: "",
        url: bedroom2,
      },
      {
        caption: "",
        url: bedroom3,
      },
      {
        caption: "",
        url: bedroom4,
      },
      {
        caption: "",
        url: bedroom5,
      },
      {
        caption: "",
        url: bedroom6,
      },
    ],
  },
  {
    caption: "Bathroom Set",
    thumbnail: bathroom2,
    data: [
      {
        caption: "",
        url: bathroom1,
      },
      {
        caption: "",
        url: bathroom2,
      },
    ],
  },
  {
    caption: "Modern Kitchen",
    thumbnail: kitchenblack2tiny,
    data: [
      {
        caption: "",
        url: kitchenblack2,
      },
      {
        caption: "",
        url: kitchenblack3,
      },
      {
        caption: "",
        url: kitchenblack4,
      },
    ],
  },
];
