import Home from "./components/Home";
import ScrollBasic from "./components/scroll/ScrollBasic";
import ScrollInfinite from './components/scroll/ScrollInfinite';
import SliderBasic from './components/slider/SliderBasic'
import Modal from './components/Modal/Modal';
import Animation from './components/Animation';

export default [
    { path: "/", title: "Home", component: Home, exact: true },
    { path: "/scroll/basic", title: "Scroll Basic", component: ScrollBasic },
    { path: "/scroll/infinite", title: "Scroll Infinite", component: ScrollInfinite },
    { path: "/slider/basic", title: "Slider", component: SliderBasic },
    { path: "/modal", title: "Modal", component: Modal },
    { path: "/animation", title: "Animation", component: Animation },
];
