import Todo from "./pages/todo/Todo";
import About from "./pages/about/About";

const routesCore = [
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

export default routesCore;
