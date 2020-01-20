import Todo from "./pages/todo/Todo";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

const routesTodo = [
  {
    path: "/",
    component: Home,
    label: "Home"
  },
  {
    path: "/todos",
    component: Todo,
    label: "Tasks"
  },
  {
    path: "/about",
    component: About,
    label: "About"
  }
];

export default routesTodo;
