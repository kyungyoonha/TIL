import Home from "./components/Home";
import ScrollBasic from "./components/scroll/ScrollBasic";

export default [
    { path: "/", title: "Home", component: Home, exact: true },
    { path: "/scroll/basic", title: "Scroll Basic", component: ScrollBasic },
];
