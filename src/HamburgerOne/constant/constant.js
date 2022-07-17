import { BsSearch, BsPerson } from "react-icons/bs";
import {  HiOutlineShoppingBag } from "react-icons/hi";
export const routes = [
  {
    name: "Clothing",
    link: "/clothing",
  },
  {
    name: "Accessories",
    link: "/accessories",

    subRoutes: [
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
    icon: HiOutlineShoppingBag
  },
  {
    name: "login",
    link: "/login",
    icon: BsPerson
  },
];
