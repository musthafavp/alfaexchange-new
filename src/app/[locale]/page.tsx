import Benefit from "@/components/screens/home-page/benefit";
import FrontLine from "@/components/screens/home-page/front-line";
import Graph from "@/components/screens/home-page/graph";
import Hero from "@/components/screens/home-page/hero";
import OfferSection from "@/components/screens/home-page/offer-section";

import Welcome from "@/components/screens/home-page/welcome";
import WhyChoose from "@/components/screens/home-page/why-choose";

export default function Home() {
  return (
    <>
    <Hero/>
    <Graph/>
    <OfferSection/>

    <Welcome/>
    <WhyChoose/>
    <Benefit/>
    <FrontLine/>
    {/* <QandA/>
   
    <Services/> */}
    
    </>
  );
}
