
// import React, { useEffect, useState } from "react";
import Hero from "@/component/layout/Hero";
import Features from "@/component/layout/Feature";
import Footer from "@/component/layout/Footer";
import Header from '@/component/layout/Header'
import Section from "@/component/layout/Section";
import Navbar from "@/component/layout/Navbar";
import { cookies } from "next/headers";

export default function Home() {
  // const [cartData, setCartData] = useState(null);

  // useEffect(() => {
  //   async function fetchCartData() {
  //     const userid = cookies().get("user_id");
  //     const res = await fetch(`http://localhost/api/cart?user_id=${userid}`);
  //     const data = await res.json();
  //     setCartData(data);
  //   }

  //   fetchCartData();
  // }, []);

  // console.log(cartData);

  return (
    <>
    <Navbar />
      <Header />
      <Hero />
      <Features />
      <Section />
      <Footer />
    </>
  );
}
