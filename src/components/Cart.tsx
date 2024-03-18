'use client'
//src: https://ui.shadcn.com/docs/components/sheet

import { ShoppingCart } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import { formatPrice } from '@/lib/utils'
import { buttonVariants } from './ui/button'

import useCartService from '@/lib/hooks/useCartStore'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'



import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'


const Cart = () => {

  const { items } = useCartService()
  const [mounted, setMounted] = useState(false)
  useEffect(()=>{
    setMounted(true)
  },[])

  const itemCount = 0

  const fee = 1
  return (
    <Sheet>

      <SheetTrigger className='group -m-2 flex items-center p-2'>
        <ShoppingCart
          aria-hidden='true'
          className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
        />
        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
          {mounted && items.length != 0 && (
                  <div className="badge badge-secondary">
                    {items.reduce((a, c) => a + c.qty, 0)}{' '}
                  </div>
           )}
        </span>
      </SheetTrigger>

      <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6'>
          <SheetTitle>Cart (0) </SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className='flex w-full flex-col pr-6'>
              {/*TODO:  cat logic */}
              Cart Items
            </div>
            <div className='space-y-4 pr-6'>
              <Separator className="my-4" />
              <div className='space-y-1.5 text-sm'>
                <div className='flex'>
                  <span className='flex-1'>Shipping</span>
                  <span>Free</span>
                </div>
                <div className='flex'> 
                  <span className='flex-1'>Transaction Fee</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                
                <div className='flex justify-between items-start'>
                  
                  <span className='flex flex-col text-right'>Total</span>
                  <div className='flex flex-col text-right' >
                    <span>{formatPrice(fee)} </span>
                    <span>*BEFORE TAXES</span>
                  </div>
                  
                </div>              
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                      href='/cart'
                      className={buttonVariants({
                        className: 'w-full',
                      })}>
                      Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (// cartitem = 0
          <div className='flex h-full flex-col items-center justify-center space-y-1'>
          <div
            aria-hidden='true'
            className='relative mb-4 h-60 w-60 text-muted-foreground'>
            <Image
              src='/empty-cart.png'
              fill
              alt='empty shopping cart '
            />
          </div>
          <div className='text-xl font-semibold'>
            Your cart is empty
          </div>
          <SheetTrigger asChild>
            <Link
              href='/products'
              className={buttonVariants({
                variant: 'link',
                size: 'sm',
                className:
                  'text-sm text-muted-foreground',
              })}>
              Add items to your cart to checkout
            </Link>
          </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default Cart
