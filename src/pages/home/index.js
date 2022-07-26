
import React from "react";

// COMPONENTS
import DefaultLayout from "../../layouts/default";
import Hero from "../../components/hero";
// import LogoBar from './logo-bar';
import ContactUs from './contact';
import MintNftList from "./MintNftList";
// import Buy from './buy';

export default function Home({setTheme}) {
  return (
    <DefaultLayout setTheme={setTheme}>
      <Hero /> 
      {/*<LogoBar />*/ }
      <MintNftList /> 
      <ContactUs />  
    </DefaultLayout>
  );
}

