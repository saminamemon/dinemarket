import { Button  } from "@/components/ui/button";
import {ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";

export default function Hero() {
    return(
        <>
        <div className="wrapper grid grid-cols-[repeat(2,auto)]  px-7 py-8 ">
<div className="   px-8 py-4  w-2/3">
    <Badge className="text-lg bg-blue-100 text-blue-600 px-4"> Sale 70% </Badge>
        <h1 className='scroll-m-20 mt-4 text-4xl font-extrabold'>An Industrial <br/>Take on <br/> Streetwear</h1>
        <p className="mt-5">Anyone can beat you but no one can <br/>beat your outfit as long as you wear<br/> Dine outfits.</p>
  <Button className="px-6 h-12 text-lg bg-black text-white mt-5">
    <ShoppingCart className="mr-2 h6 w6" />
    Start Shopping
  </Button>


<div className= "py-8 p-8 flex justify-between items-center space-x-8 mt-3">
            <Image src={'/featured1.webp'} alt="header" width={200} height={200} />
            <Image src={'/featured2.webp'} alt="header" width={200} height={200} />
            <Image src={'/featured3.webp'} alt="header" width={200} height={200} />
            <Image src={'/featured4.webp'} alt="header" width={200} height={200} />
</div>
        </div>
    <Image src={"/header.webp"} alt=" leath" width={400}  height={400}  />
    </div>
    </>

)}