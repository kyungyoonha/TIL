import Home from "./components/Home";
import ScrollBasic from "./components/scroll/ScrollBasic";
import ScrollInfinite from './components/scroll/ScrollInfinite';

export default [
    { path: "/", title: "Home", component: Home, exact: true },
    { path: "/scroll/basic", title: "Scroll Basic", component: ScrollBasic },
    { path: "/scroll/infinite", title: "Scroll Infinite", component: ScrollInfinite },
];
