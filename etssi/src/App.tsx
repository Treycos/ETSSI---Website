import React from "react";
import Header from "./components/header";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Gmap from './components/gmap';
import Themes from './components/themes';
import "./App.css";

const App: React.FC = () => (
    <>
        <Header />
        <Carousel />
        <Themes />
        <Footer />
    </>
);

export default App;
