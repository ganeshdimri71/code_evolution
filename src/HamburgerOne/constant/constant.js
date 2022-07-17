import { BsSearch, BsPerson } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
export const routes = [
  {
    name: "Clothing",
    link: "/clothing",
  },
  {
    name: "Accessories",
    link: "/accessories",

    subRoutesWomen: [
      {
        categoryOne: "Women",
      },
      {
        name: "Dresses",
        link: "/accessories/dresses",
      },
      {
        name: "Tops & Tunics",
        link: "/accessories/tops-tunics",
      },
      {
        name: "Plazzos",
        link: "/accessories/plazzos",
      },
      {
        name: "Lehenga",
        link: "/accessories/lehenga",
      },
      {
        name: "Middies",
        link: "/accessories/middies",
      },
      {
        name: "Salwar Sets",
        link: "/accessories/salwar-sets",
      },
      {
        name: "Dhoti Pant",
        link: "/accessories/dhoti-pant",
      },

      {
        name: "Bralets",
        link: "/accessories/bralets",
      },
    ],
    subRoutesKids: [
      {
        categoryTwo: "Kids Wear",
      },
      {
        name: "Dresse",
        link: "/accessories/dresses",
      },
      {
        name: "Tops & Tunic",
        link: "/accessories/tops-tunics",
      },
      {
        name: "Plazzo",
        link: "/accessories/plazzos",
      },
      {
        name: "Leheng",
        link: "/accessories/lehenga",
      },
      {
        name: "Middie",
        link: "/accessories/middies",
      },
      {
        name: "Salwar Set",
        link: "/accessories/salwar-sets",
      },
      {
        name: "Dhoti",
        link: "/accessories/dhoti-pant",
      },
      {
        name: "Bralet",
        link: "/accessories/bralets",
      },
    ],
  },
  {
    name: "Home Decor",
    link: "/home-decor",
  },
];

export const iconsRoutes = [
  {
    name: "search",
    link: "/search",
    icon: BsSearch,
  },
  {
    name: "cart",
    link: "/cart",
    icon: HiOutlineShoppingBag,
  },
  {
    name: "login",
    link: "/login",
    icon: BsPerson,
  },
];
