import { defineType,defineField } from "sanity"


export const product={
    name:"product",
    type:"document",
    title:"Product",
    fields: [
       
        {
        name:"title",
        title:" product Title",
        type:"string"
        },
      {
        name:"description",
        title:"Produict Description",
        type:"string"
        },
       
        {name:"price",
        title:"Product Price",
        type:"number",
        },
        
           
                { name:"image",
        title:"Product Image",
        type:"image",
        },
          
       {
        name:"category",
        title:"Product Category",
        type:"reference",
        to:[
            {type:"category"}]
       }
    ]
}