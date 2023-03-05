const products = [
  {
    id: "d0975326-7b43-479e-a109-cb818abec62d",
    title: "Chocolate Mousse Torte Cake",
    description:
      "Two rich, chocolate cake layers are filled with luscious chocolate whipped cream mousse, then covered with milk chocolate frosting and a dark chocolate glaze. This best selling delight is then garnished with fudge rosettes and dark chocolate shaves. Includes a Chocolate Occasion Plaque, matching Greeting Card and is packaged in an elegant gift box!",
    category: "Bakery",
    brand: "Gaston’s Bakery",
    expDate: "05/15/2017",
    mfdDate: "05/10/2017",
    size: "7 inches in diameter",
    price: 42.95,
    rating: 3.5,
    images:
      "https://raw.githubusercontent.com/ParasGarg/Online-Grocery-Store/master/public/images/chocolate-mousse-torte-cake.png",
    suggestion: [
      "Serves 6 to 8",
      "Ships Nationwide in Refrigerated Packaging",
      "Certified Kof-K Kosher",
    ],
    allegations: [
      "Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts.",
      "Our facility is not Gluten Free.",
    ],
  },
  {
    id: "ebed34eb-7533-49f5-91cb-37c12f20d4b1",
    title: "Triple Chocolate Enrobed Brownie Cake",
    description:
      "This is the perfect cake for the true chocolate lover. Our dense, moist brownie cake is covered in not one, but three layers of decadent chocolate. The cake is coated with a rich chocolate fondant icing, showered with dark chocolate shavings and then finally drizzled with milk and dark chocolate glazes. This triple-chocolate delight is sure to satisfy any sweet tooth. Each cake is delivered in an elegant gift box with a chocolate occasion plaque and personalized greeting card to celebrate any occasion.",
    category: "Bakery",
    brand: "Gaston’s Bakery",
    expDate: "05/16/2017",
    mfdDate: "05/12/2017",
    size: "7 inches in diameter",
    price: 39.95,
    rating: 2,
    images:
      "https://raw.githubusercontent.com/ParasGarg/Online-Grocery-Store/master/public/images/triple-chocolate-enrobed-brownie-cake.png",

    suggestion: ["Serves 6 to 8", "Certified KOF-K Kosher"],
    allegations: [
      "Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts.",
      "Our facility is not Gluten Free.",
    ],
  },
  {
    id: "fb79562d-e470-4445-990b-06aa875d3e97",
    title: "Reddi Wip Dairy Whipped Topping Extra Creamy Aerosol Refrigerated",
    description:
      "Reddi Wip® Extra Creamy Sweetened Dairy Whipped Topping. Milk from cows. Not treated with artificial growth hormone*. Made with real cream. No artificial flavors or sweeteners. 15 calories per 2 tbsp. Ultra-pasteurized.",
    category: "Dairy",
    brand: "Daiya Dairy",
    expDate: "05/14/2017",
    mfdDate: "08/14/2017",
    size: "6.5 oz can",
    price: 3.19,
    rating: 5,
    images:
      "https://raw.githubusercontent.com/ParasGarg/Online-Grocery-Store/master/public/images/reddi-wip-dairy-whipped-topping-extra-creamy-aerosol-refrigerated-1.jpg",
    suggestion: [
      " Shake it! Shake it! 4 times before use then remove cap.",
      "Turn can completely upside down and press nozzle sideways with finger.",
      "Rinse nozzle thoroughly with warm water. ",
    ],
    allegations: [
      "Contains: milk.",
      "Deliberately concentrating and inhaling the contents can be harmful or fatal.",
      "Contents under pressure.",
      "Do not expose to temperatures above 120 degrees F.",
      "Do not puncture or incinerate can.",
      "Keep out of the reach of children.",
      "Choking hazard, cap contains small parts.",
    ],
  },
  {
    id: "61c79187-76f6-4747-a5cf-d7e26dcea535",
    title: "Red Velvet Chocolate Cake",
    description:
      "A truly decadent southern classic: two rich layers of red chocolate cake, fill and covered with the finest, pure cream cheese frosting, and then garnished with white chocolate sprinkles around the sides. Includes a Chocolate Occasion Plaque, matching Greeting Card and is packaged in an elegant gift box!",
    category: "Bakery",
    brand: "Cake Factory",
    expDate: "05/18/2017",
    mfdDate: "05/15/2017",
    size: "7 inches in diameter",
    price: 42.95,
    rating: 4,
    images:
      "https://raw.githubusercontent.com/ParasGarg/Online-Grocery-Store/master/public/images/red-velvet-chocolate-cake.png",

    suggestion: [
      "Serves 6 to 8",
      "Certified KOF-K Kosher",
      "Ships Nationwide in Refrigerated Packaging",
    ],
    allegations: [
      "Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts.",
      "Our facility is not Gluten Free.",
    ],
  },
  {
    id: "b72f5d8e-e586-47cd-aba7-202814ca6609",
    title: "Rice Dream Original Non-Dairy Beverage Organic",
    description:
      "Rice Dream® Organic Original Enriched Rice Drink. Value size. Calcium \u0026 vitamin D. Easy to digest. USDA Organic. Non GMO project.",
    category: "Dairy",
    brand: "Rice Dream",
    expDate: "05/14/2017",
    mfdDate: "05/17/2017",
    size: "64 oz ctn",
    price: 5.19,
    rating: 1,
    images:
      "https://raw.githubusercontent.com/ParasGarg/Online-Grocery-Store/master/public/images/rice-dream-original-non-dairy-beverage-organic-1.jpg",
    suggestion: [
      "Shake well.",
      "Serve chilled.",
      "Stays fresh 7-10 days in refrigerator after opening.",
    ],
    allegations: [
      "Not for use as an infant formula.",
      "For children under age 5, consult your child's doctor.",
    ],
  },
  {
    id: "1",
    title: "Rice Dream Original Non-Dairy Beverage Organic",
    description:
      "Rice Dream® Organic Original Enriched Rice Drink. Value size. Calcium \u0026 vitamin D. Easy to digest. USDA Organic. Non GMO project.",
    category: "Dairy",
    brand: "Rice Dream",
    expDate: "05/14/2017",
    mfdDate: "05/17/2017",
    size: "64 oz ctn",
    price: 5.19,
    rating: 1,
    images:
      "https://raw.githubusercontent.com/ParasGarg/Online-Grocery-Store/master/public/images/rice-dream-original-non-dairy-beverage-organic-1.jpg",
    suggestion: [
      "Shake well.",
      "Serve chilled.",
      "Stays fresh 7-10 days in refrigerator after opening.",
    ],
    allegations: [
      "Not for use as an infant formula.",
      "For children under age 5, consult your child's doctor.",
    ],
  },
  {
    id: "3",
    title: "Rice Dream Original Non-Dairy Beverage Organic",
    description:
      "Rice Dream® Organic Original Enriched Rice Drink. Value size. Calcium \u0026 vitamin D. Easy to digest. USDA Organic. Non GMO project.",
    category: "Dairy",
    brand: "Rice Dream",
    expDate: "05/14/2017",
    mfdDate: "05/17/2017",
    size: "64 oz ctn",
    price: 5.19,
    rating: 1,
    images:
      "https://raw.githubusercontent.com/ParasGarg/Online-Grocery-Store/master/public/images/rice-dream-original-non-dairy-beverage-organic-1.jpg",
    suggestion: [
      "Shake well.",
      "Serve chilled.",
      "Stays fresh 7-10 days in refrigerator after opening.",
    ],
    allegations: [
      "Not for use as an infant formula.",
      "For children under age 5, consult your child's doctor.",
    ],
  },
];

export default products;
