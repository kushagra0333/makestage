import { React } from "react";
import Hero from "../components/hero/Hero";

import "bootstrap/dist/css/bootstrap.min.css";
import SubscribeUs from "../components/SubscribeUs";
import Process from "../components/blocks/Process";

import Services from "../components/blocks/Services";
import Features from "../components/blocks/Features";
import Map from "../components/Map";

const Home = () => {
  return (
    <>
      <Hero />
      
      <Services />
      <Features />
      <Map />
      <Process />
      
      <SubscribeUs></SubscribeUs>
    </>
  );
};

export default Home;
