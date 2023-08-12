

"use client"
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import { client } from '@/lib/sanityClient'
import { urlForImage } from '../../../sanity/lib/image'
import { Image as IImage } from 'sanity'
import { FC } from "react";

 const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product" && category->name=="Female"]{
    price,
    _id,
    title,
    image,
    category -> {
      name,
      _id
    }
  }`)
  return res
}

interface IProduct {
  title: string
  _id: string
  description: string
  image: IImage
  price: number
  category: {
    name: string
  }
}

 const Female: FC = () => {
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProductData();
      setData(products);
    };
    fetchData();
  }, []);

  const handleAddToCart = async (productId: string) => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: productId,
      }),
    });

    if (res.ok) {
      try {
        const result = await res.json();
        console.log(result);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } else {
      console.error("Request failed with status:", res.status);
    }
  };

  return (
    <>
      <div className="grid grid-cols-[auto,auto,auto] justify-center gap-x-10">
        {data.map((item) => (
          <div key={item._id} className='mt-7'>
            <Image
              width={200}
              height={300}
              className="max-h [200px] object-cover object-top"
              src={urlForImage(item.image).url()}
              alt="product"
            />
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <button
              className="border py-2 px-6 rounded bg-gray-900 text-white"
              onClick={() => handleAddToCart(item._id)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export  default Female;