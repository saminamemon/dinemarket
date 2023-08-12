import Image from "next/image";
export default function Hero(){
    return (
        <div className="mt-8">



 
      <h2 className="text-2xl text-center font-bold text-gray-900">Promotion</h2>
      <p className="text-2xl font-bold text-center text-gray-900">Our Promotions Events</p>
      <div className="grid grid-cols-[repeat(3,auto)] gap-x-4 gap-y-6 px-8 py-8 ">
      <div className="     bg-gray-500">
          <h3 className=" mt-5 px-4 py-4 text-bold text-3xl text-white">GET UP TO 60%</h3>  
          <p className="text-3xl font-semibold text-white  justify-text px-4 py-4">For the summer season</p>


    

       
      

      
          <Image src={"/event1.webp"} alt=" leath" width={400}  height={400}  />
          
           
</div>
<div  className="bg-pink-100 ">
<h3 className=" mt-5 px-4 py-4 text-bold text-3xl text-black">Flex Sweatshirt</h3>  
          <p className="text-3xl font-semibold text-black  justify-text px-4 py-4">
$100.00  $75.00</p>

   
            <Image src={"/event2.webp"} alt=" leath" width={400}  height={400} />
            </div>
            <div className="bg-gray-300">
            <h3 className=" mt-5 px-4 py-4 text-bold text-3xl text-black">Flex Push Button Bomber</h3>  
          <p className="text-3xl font-semibold text-black  justify-text px-4 py-4">$225.00  $190.00</p>

         
          <Image src={"/event3.webp"} alt=" leath" width={400}  height={400}   />
          
    </div>


   
    
</div>
</div>
  

        
    )
}