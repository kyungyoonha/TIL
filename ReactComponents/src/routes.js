import Home from "./components/Home";
import ScrollBasic from "./components/scroll/ScrollBasic";
import ScrollInfinite from './components/scroll/ScrollInfinite';
import Basic from "./components/slider/Basic";
import SliderBasic from './components/slider/SliderBasic'
import Test from './components/slider/Test';

export default [
    { path: "/", title: "Home", component: Home, exact: true },
    { path: "/scroll/basic", title: "Scroll Basic", component: ScrollBasic },
    { path: "/scroll/infinite", title: "Scroll Infinite", component: ScrollInfinite },
    { path: "/slider/basic", title: "Slider Basic", component: SliderBasic },
    
];
