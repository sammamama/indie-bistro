export type MenuSize = {
  label: string;

  name: string;
  price: string;
};

export type MenuItem = {
  name: string;

  image: string;

  price?: string;

  sizes?: MenuSize[];
  description?: string;
  badge?: string;
};

export type MenuGroup = {
  title?: string;
  note?: string;
  items: MenuItem[];
};

export type MenuSection = {
  id: string;
  label: string;
  blurb?: string;
  groups: MenuGroup[];
};

export const menu: MenuSection[] = [
  {
    id: "veg-starters",
    label: "Veg Starters",
    blurb: "Crisp, vibrant bites to begin the meal.",
    groups: [
      {
        items: [
          {
            name: "Veg Spring Rolls (6 pcs)",
            description:
              "Shredded cabbage and carrot rolled in thin pastry and fried till the shell shatters. Served with sweet chilli.",
            image: "/veg-spring-rolls.webp",
            price: "$17.99",
            badge: "Chef's Special",
          },
          {
            name: "Onion Samosa (6 pcs)",
            description:
              "Slim Hyderabad-style samosas packed with spiced onion, folded thin so the pastry stays crackly.",
            image:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950",
            price: "$11.99",
          },
          {
            name: "Veg Manchuria",
            description:
              "Vegetable dumplings tossed in a glossy Indo-Chinese sauce of garlic, ginger, soy and green chilli.",
            image:
              "https://images.unsplash.com/photo-1676976197084-a7b35e0d2537",
            price: "$14.99",
          },
          {
            name: "Paneer 65",
            description:
              "Cubes of paneer in a chilli and curry leaf batter, fried hot and finished with a squeeze of lemon.",
            image:
              "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be",
            price: "$14.99",
          },
          {
            name: "Paneer Chilli",
            description:
              "Paneer wok-tossed with capsicum and onion in a sharp soy and green chilli glaze.",
            image:
              "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
            price: "$14.99",
          },
        ],
      },
    ],
  },
  {
    id: "non-veg-starters",
    label: "Non-Veg Starters",
    groups: [
      {
        items: [
          {
            name: "Chicken & Chips",
            image: "/chicken-and-chips.webp",
            price: "$15.99",
            badge: "Chef's Special",
            description:
              "Bangla Kodi is a beloved spicy, crispy bite from Telugu/Andhra cuisine. Tender chicken is sandwiched between thin potato slices, seasoned boldly and deep-fried for a crunchy finish.",
          },
          {
            name: "Chicken Spring Rolls (6 pcs)",
            description:
              "Minced chicken and vegetables in a crisp fried roll, served with sweet chilli.",
            image:
              "https://images.unsplash.com/photo-1606525437679-037aca74a3e9",
            price: "$12.99",
          },
          {
            name: "Chicken 65",
            description:
              "The Chennai bar classic: chicken marinated in chilli, ginger and yoghurt, fried and tempered with curry leaf.",
            image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
            price: "$15.99",
          },
          {
            name: "Chilli Chicken",
            description:
              "Crisp-fried chicken tossed with onion and capsicum in a dark, garlicky Indo-Chinese sauce.",
            image:
              "https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67",
            price: "$15.99",
          },
          {
            name: "Meat Balls (Lamb) (6 pcs)",
            image:
              "https://images.unsplash.com/photo-1529042410759-befb1204b468",
            price: "$15.99",
            description:
              "Crispy, hand-rolled mutton pearls infused with fresh herbs and contemporary regional spices.",
          },
        ],
      },
    ],
  },
  {
    id: "burgers",
    label: "Burgers",
    groups: [
      {
        items: [
          {
            name: "Galauti Burger (Lamb)",
            image: "/galauti-burger.webp",
            price: "$16.99",
            badge: "Signature Special",
            description:
              "Galouti Kabab Burger combines Lucknowi galouti kebabs with a burger format, using melt-in-the-mouth mutton mince patties. The dish traces back to 17th-century Lucknow, where galouti means melt in the mouth for a toothless Nawab.",
          },
          {
            name: "Chicken Burger",
            description:
              "Marinated grilled chicken thigh, salad and house sauce in a soft toasted bun.",
            image:
              "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
            price: "$13.99",
          },
          {
            name: "Veg Burger (Paneer)",
            description:
              "Spiced paneer patty, salad and mint mayo, stacked in a toasted bun.",
            image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
            price: "$13.99",
          },
          {
            name: "Chicken 65 Burger",
            description:
              "Our Chicken 65 straight into a bun, with curry leaf mayo and crunchy slaw.",
            image:
              "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
            price: "$14.99",
          },
        ],
      },
    ],
  },
  {
    id: "rolls-sandwiches",
    label: "Rolls & Sandwiches",
    groups: [
      {
        title: "Rolls",
        items: [
          {
            name: "Veg Roll (Paneer)",
            description:
              "Tandoori-spiced paneer, onion and mint chutney wrapped in a flaky paratha.",
            image:
              "https://images.unsplash.com/photo-1626700051175-6818013e1d4f",
            price: "$12.99",
          },
          {
            name: "Chicken Roll",
            description:
              "Chargrilled chicken, sliced onion and chutney rolled tight in a hot paratha.",
            image: "https://images.unsplash.com/photo-1562059390-a761a084768e",
            price: "$13.99",
          },
          {
            name: "Chicken 65 Roll",
            description:
              "Chicken 65 with slaw and curry leaf mayo, wrapped in a paratha.",
            image:
              "https://images.unsplash.com/photo-1611671310207-2374ec7b1889",
            price: "$14.99",
          },
        ],
      },
      {
        title: "Sandwiches",
        items: [
          {
            name: "Veg Sandwich (Paneer) — Grilled",
            description:
              "Spiced paneer, cheese and vegetables pressed till the bread crisps.",
            image:
              "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
            price: "$12.99",
          },
          {
            name: "Chicken Sandwich — Grilled",
            description:
              "Seasoned chicken and cheese, grilled till golden and cut on the diagonal.",
            image:
              "https://images.unsplash.com/photo-1528736235302-52922df5c122",
            price: "$13.99",
          },
          {
            name: "Chicken 65 Sandwich — Grilled",
            description:
              "Chicken 65 and melting cheese, grilled hot in buttered bread.",
            image:
              "https://images.unsplash.com/photo-1627754468549-6ed1a4813a53",
            price: "$14.99",
          },
        ],
      },
    ],
  },
  {
    id: "pizza-garlic-breads",
    label: "Pizza & Garlic Breads",
    groups: [
      {
        title: "Pizza",
        note: "Puff base only",
        items: [
          {
            name: "Peppi Paneer",
            description:
              "Puff base with chilli paneer, capsicum and mozzarella, baked till the edges lift.",
            image: "/puff-pizza.webp",
            price: "$15.99",
          },
          {
            name: "Chicken Tikka",
            description:
              "Puff base loaded with tandoori chicken tikka, onion and mozzarella.",
            image: "/chicken-tikka-pizza.webp",
            price: "$17.99",
            badge: "Chef's Special",
          },
        ],
      },
      {
        title: "Garlic Breads",
        items: [
          {
            name: "Cheesy Chicken 65 Garlic Bread",
            description:
              "Garlic bread under a blanket of cheese and chopped Chicken 65.",
            image:
              "https://images.unsplash.com/photo-1573140401552-3fab0b24306f",
            sizes: [
              { label: "S", name: "Small", price: "$9.99" },
              { label: "M", name: "Medium", price: "$14.99" },
            ],
          },
          {
            name: "Cheesy Chilli Peppi Paneer Garlic Bread",
            description:
              "Garlic bread with chilli paneer and stretchy mozzarella, baked to order.",
            image:
              "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536",
            sizes: [
              { label: "S", name: "Small", price: "$9.99" },
              { label: "M", name: "Medium", price: "$14.99" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "main-course",
    label: "Main Course",
    groups: [
      {
        title: "Veg Curries",
        items: [
          {
            name: "Aloo Gobi Tomato",
            description:
              "Potato and cauliflower cooked down with tomato, cumin and turmeric until everything softens together.",
            image:
              "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
            price: "$15.99",
          },
          {
            name: "Paneer Butter Masala",
            description:
              "Paneer in a mild tomato and cashew gravy, finished with butter and cream.",
            image:
              "https://images.unsplash.com/photo-1631452180539-96aca7d48617",
            price: "$15.99",
          },
        ],
      },
      {
        title: "Non-Veg Curries",
        items: [
          {
            name: "Red Chicken",
            description:
              "Chicken simmered in a bold Andhra-style red chilli gravy — the hot one on the list.",
            image:
              "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91",
            price: "$17.99",
          },
          {
            name: "Butter Chicken",
            description:
              "Tandoori chicken in a silky tomato and butter gravy, gently spiced.",
            image:
              "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
            price: "$17.99",
          },
          {
            name: "Lamb Curry",
            description:
              "Slow-cooked lamb on the bone in an onion and whole-spice gravy.",
            image:
              "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
            price: "$17.99",
          },
        ],
      },
    ],
  },
  {
    id: "biryani-rice-breads",
    label: "Biryani, Rice & Breads",
    groups: [
      {
        title: "Biryani & Rice",
        items: [
          {
            name: "Chicken Biryani",
            description:
              "Basmati layered with marinated chicken and dum-cooked, served with raita and salan.",
            image: "/chicken-biryani.webp",
            price: "$15.99",
            badge: "Chef's Special",
          },
          {
            name: "Mutton Biryani",
            description:
              "Hyderabad-style dum biryani with tender goat, saffron and fried onion.",
            image:
              "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
            price: "$17.99",
          },
          {
            name: "Veg Pulao",
            description:
              "Basmati cooked with seasonal vegetables and whole spices, light and fragrant.",
            image:
              "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
            price: "$14.99",
          },
          {
            name: "Jeera Rice",
            description:
              "Basmati tempered with cumin and ghee — the quiet partner to any curry.",
            image:
              "https://images.unsplash.com/photo-1512058564366-18510be2db19",
            price: "$8.99",
          },
        ],
      },
      {
        title: "Breads",

        items: [
          {
            name: "Paratha",
            description:
              "Layered flatbread cooked on the tawa till it flakes apart.",
            image:
              "https://images.unsplash.com/photo-1668357530437-72a12c660f94",
            price: "—",
          },
        ],
      },
    ],
  },
  {
    id: "south-indian",
    label: "South Indian",
    blurb: "Comforting classics from the south.",
    groups: [
      {
        title: "Idli",
        items: [
          {
            name: "Plain Idli",
            description:
              "Steamed rice cakes, soft and plain, with sambar and chutney.",
            image:
              "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
            price: "$8.99",
          },
          {
            name: "Idli 65",
            description:
              "Idli cut and tossed in a spicy 65 masala with curry leaf.",
            image:
              "https://images.unsplash.com/photo-1632104667384-06f58cb7ad44",
            price: "$11.99",
          },
          {
            name: "Ghee Karam Idli",
            description:
              "Idli smeared with ghee and hot karam podi, the way Andhra tiffin centres serve it.",
            image:
              "https://images.unsplash.com/photo-1680359871322-aabe6b33eff5",
            price: "$9.99",
          },
        ],
      },
      {
        title: "Dosa",
        items: [
          {
            name: "Plain Dosa",
            description:
              "Fermented rice and lentil crepe, griddled thin and crisp, with sambar and chutney.",
            image:
              "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
            price: "$9.99",
          },
          {
            name: "Masala Dosa",
            description:
              "Crisp dosa folded over cumin potato masala, with sambar and chutney.",
            image:
              "https://images.unsplash.com/photo-1694849789325-914b71ab4075",
            price: "$12.99",
          },
        ],
      },
    ],
  },
  {
    id: "desserts-drinks",
    label: "Desserts & Drinks",
    groups: [
      {
        title: "Desserts",
        items: [
          {
            name: "Chocolate Brownie",
            description: "Dense, fudgy chocolate brownie, served warm.",
            image:
              "https://images.unsplash.com/photo-1515037893149-de7f840978e2",
            price: "$7.99",
          },
          {
            name: "Chocolate Brownie with Ice Cream",
            description:
              "Warm brownie with a scoop of vanilla melting over the top.",
            image:
              "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
            price: "$9.99",
          },
          {
            name: "Gulab Jamun",
            description:
              "Milk dumplings soaked warm in cardamom and rose syrup.",
            image:
              "https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77",
            price: "$6.99",
          },
          {
            name: "Gulab Jamun with Ice Cream",
            description:
              "Warm gulab jamun with vanilla ice cream — hot and cold together.",
            image:
              "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12",
            price: "$8.99",
          },
        ],
      },
      {
        title: "Drinks",
        items: [
          {
            name: "Mango Lassi",
            description:
              "Thick yoghurt blended with mango, chilled and lightly sweet.",
            image:
              "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716",
            price: "$4.99",
          },
          {
            name: "Bottled Water",
            description: "Chilled still water, 600ml.",
            image:
              "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
            price: "$3.95",
          },
          {
            name: "Fresh Lime Soda / Water",
            description:
              "Fresh lime with soda or water, sweet or salted — your call.",
            image:
              "https://images.unsplash.com/photo-1624552184280-9e9631bbeee9",
            price: "$5.99",
          },
          {
            name: "Masala Chai",
            description: "Black tea brewed with milk, ginger and cardamom.",
            image: "https://images.unsplash.com/photo-1561336526-2914f13ceb36",
            price: "$3.50",
          },
          {
            name: "Soft Drinks",
            description:
              "Cans from the fridge — cola, lemonade and the usual suspects.",
            image:
              "https://images.unsplash.com/photo-1592892111425-15e04305f961",
            price: "$3.95",
          },
        ],
      },
    ],
  },
];
