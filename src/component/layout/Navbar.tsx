
import Image from "next/image"
import Link from "next/link"
import { client } from "@/lib/sanityClient"

import { BiSearch, BiMenu } from 'react-icons/bi'
import { product } from "../../../sanity/product"
import { BsCart } from "react-icons/bs"
import { projectId } from "../../../sanity/env"



export default function Navbar() {
  return (
    <div className="py-8 p-2 flex justify-between items-center space-x-8 mt-3">
    <div className="w-36 flex m-6">
      <Image width={400} height={400} src={'/logo.webp'} alt="Logo" />
    </div>
      <ul className=" hidden md:flex space-x-[60px] text-lg font-normal mt-3">
        <li className="hover:text-gray-600">
          <Link  href={"/Male"}>Male
        
          </Link>
        </li>
        <li className="hover:text-gray-600 text-gray-500">
          <Link    href="/Female">
          Female
          </Link>
        </li>
        <li className="hover:text-gray-600">
          <Link  href="/productCard">
           Kids Wear
          </Link>
        </li>
        <li className="hover:text-gray-600">
          <Link   legacyBehavior href="/Allproduct">
            <a id="link/Allproducts">All products</a>
          </Link>
        </li>
      
        <div className="rounded-md px-3 border flex items-center text-gray-600">
        <BiSearch />
        <input
          type="text"
          className="pl-1 px-5 py-1 w-80"
          placeholder="Search in Our Store"
        />
      </div>
      <div className="relative flex w-11 h-10 bg-gray-300 rounded-full items-center justify-center">
        <div className="flex justify-center items-center w-4 h-4 rounded-full absolute top-1 right-2 bg-red-400 text-xs font-light ">
          2
        </div>
        <BsCart size={24} />
      </div>
    </ul>

       
       
 


        </div>
    

    )}