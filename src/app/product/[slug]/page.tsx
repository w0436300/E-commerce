import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { BellRing, Check } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import AddToCart from '@/components/products/AddToCart'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

// import { convertDocToObj } from '@/lib/utils'
// import productService from '@/lib/services/productService'
import React from 'react';

import Image from 'next/image'
import Link from 'next/link'
// import { Rating } from '@/components/products/Rating'
import data from '@/lib/data'



function PrudoctDetails({
  params,
}: {
  params: { slug: string }
}) {
  const product = data.products.find((x) => x.slug === params.slug)
  if (!product) {
    return { title: 'Product not found' }
  }
  return (
    <>
    <MaxWidthWrapper>
      <div className="my-2">
        <Link href="/">back to products</Link>
      </div>

      <div className="flex flex-col md:flex-row  md:items-start gap-3">
        <div className="w-full md:w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
             />
          </div>

        


          <div className="w-full md:w-1/2">
            <Card>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>{product.rating} of {product.numReviews} reviews</li>
                  <li>{product.brand}</li>
                  <li>Description: <p>{product.description}</p></li>
                  <Separator  />

                  <li>Price: ${product.price}</li>
                  <li>{product.countInStock > 0 ? 'Status: In stock' : <span className="text-orange-500">Sorry, item not available now</span>}</li>
                  <Separator className="my-4" />
                  
                    
                </ul>            
              </CardContent>
              
              {product.countInStock !== 0 && (
                 <CardFooter>
                    <div className="card-actions justify-center">
                      <AddToCart
                        item={{
                          ...product,
                          qty: 0,
                          color: '',
                          size: '',
                        }}
                      />
                    </div>
                  </CardFooter>  
                  )}
               {product.countInStock === 0 && (
                <CardFooter>
                  
                  <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <BellRing className="text-orange-500" />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                      Notify me when back in stock.
                      </p>   
                    </div>
                    <Switch />
                  </div>
                </CardFooter>
              )}
            </Card>
          </div>

        {/* <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li>
               {product.rating} of {product.numReviews} Reviews                
             </li>
             <li> {product.brand}</li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
               Description: <p>{product.description}</p>
           </li>
           
          </ul>

          <div>
        <div className="card  bg-base-300 shadow-xl mt-5 md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                </div>
              </div>
             
            </div>
          </div>

        </div>
        </div> */}

      </div>
    </MaxWidthWrapper>
    </>


  )
}
export default PrudoctDetails;

