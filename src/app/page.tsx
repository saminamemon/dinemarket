import Image from "next/image";
import { cookies } from "next/headers";
import React from "react";
import Hero from "@/component/layout/Hero";
import {Image as IImage} from "sanity"
import { urlForImage } from "../../sanity/lib/image";
import Features from "@/component/layout/Feature";
import Footer from "@/component/layout/Footer";
import Header from '@/component/layout/Header'
import { product } from "../../sanity/product";
import {client} from '../lib/sanityClient'
import Section from "@/component/layout/Section";



 export const getcartData= async ()=>{
    const userid = cookies().get("user_id")
    const res = await fetch (`http://localhost/api/cart?user_id=${userid}`)
    const data =await res.json();
    return data;
    
 }

 export default function Home(){
    const data = getcartData()
 console.log(data)
    
    return (
     <>
      
        <Header />
        <Hero />
        <Features />
      
        <Section />
     
          <Footer />
       
      </>
    

  
  )}
