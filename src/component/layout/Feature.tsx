import Image from "next/image";
import Link from "next/link";

export default function Features(){
    return (
        <div className="mt-8">



 
      <h2 className="text-2xl font-bold text-blue-900 text-center">PRODUCTS</h2>
      <p className="text-2xl font-bold text-gray-900 text-center" >Check What We Have</p>

  


    

      
 <div className="grid grid-cols-[repeat(3,auto)] mt-7 ">
      <div className="     bg-gray-500">
      
          <Image src={"/bf4(1).png"} alt=" leath" width={400}  height={400}  />
          
          <Link  href={"/"}></Link>
           
</div>
<div  className="bg-pink-100 ">
 


   
            <Image src={"/bf4(2).png"} alt=" leath" width={400}  height={400} />
            <Link  href={''} key={""}>
        
        </Link>
        
            </div>
            <div className="bg-gray-300">
       

         
          <Image src={"/bf4(3).png"} alt=" leath" width={400}  height={400}   />
          <Link  href={''} key={""}>
        
        </Link>
          
    </div> 
    </div>
    </div>

)}