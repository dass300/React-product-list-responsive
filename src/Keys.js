import React, { useState } from 'react'

const products = [
    {
        id:1,
        Device:"Mobile",
        Brand:"Apple",
        Qty:1
    },
    {
        id:2,
        Device:"Laptop",
        Brand:"Samsung",
        Qty:1
    },
    {
        id:3,
        Device:"Headset",
        Brand:"Vivo",
        Qty:1
    },
    {
        id:4,
        Device:"Mobile",
        Brand:"TCL",
        Qty:0
    },
]

const Keys = () => {
    const [items,setItem] = useState(products)

    const decremQty = (id)=>{      
            const newItem = items.map((item)=>(item.id === id? {...item,Qty:item.Qty-1}:item))
            setItem(newItem)
    }

    const incremQty = (id)=>{      
            const newItem = items.map((item)=>(
           item.id === id? {...item,Qty:item.Qty+1}:item
            ))
        setItem(newItem)
    }

  return (
    <>
   
    {
        items.map((products)=>(

            <div className='bg-success mt-3 text-white p-4 rounded-3 card-body' key={products.id} >
                <div className=''>
                <h1>Device:{products.Device}</h1>
                <h3>Brand:{products.Brand}</h3>
                <h3>Qty:{products.Qty}</h3>
               
                    <button onClick = {()=> decremQty(products.id)} type= "button" >-</button>
                    <button onClick = {()=> incremQty(products.id)} type= "button" >+</button>
                   

        
                </div>
            </div>
        ))
    }
     </>
  )
}

export default Keys