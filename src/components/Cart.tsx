'use client'
//src: https://ui.shadcn.com/docs/components/sheet

import { ShoppingCart } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'


const Cart = () => {
  const itemCount = 1

  const fee = 1
  return (
    <Sheet>

      <SheetTrigger className='group -m-2 flex items-center p-2'>
        <ShoppingCart
          aria-hidden='true'
          className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
        />
        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
          0
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
                  <span className='flex-1'>
                    Transaction Fee
                  </span>
                  <span>1</span>
                </div>
                

              </div>

            </div>
          </>

        ) : (
          <div>

          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default Cart
