import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.2",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.3",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2023",
    title: "Sherpa Outpost",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehendereal eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "september 3rd, 2023",
    title: "Roadway Tourist",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehendereal eum quod exercitationem fugit, qui corporis.",
    location: "phillipines",
    duration: 6,
    cost: 1800,
  },
  {
    id: 3,
    image: tour3,
    date: "october 1st, 2023",
    title: "Tokyo Summit",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehendereal eum quod exercitationem fugit, qui corporis.",
    location: "tokyo",
    duration: 6,
    cost: 2000,
  },
  {
    id: 4,
    image: tour4,
    date: "october 9th, 2023",
    title: "dirty asian elephant",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehendereal eum quod exercitationem fugit, qui corporis.",
    location: "vietnam",
    duration: 6,
    cost: 1800,
  },
  {
    id: 5,
    image: tour5,
    date: "october 16th, 2023",
    title: "grevy zebra courting",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehendereal eum quod exercitationem fugit, qui corporis.",
    location: "ethiopia",
    duration: 6,
    cost: 1700,
  },
  {
    id: 6,
    image: tour6,
    date: "november 4th, 2023",
    title: "kenyon castle",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehendereal eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    duration: 6,
    cost: 1700,
  },
];
