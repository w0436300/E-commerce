'use client'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from './ui/button'
import { PRODUCT_CATEGORIES } from '@/config'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'



type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemProps {
    category: Category
    handleOpen: () => void
    isOpen: boolean //Indicates whether this NavItem should be in the expanded state, which is determined by comparing activeIndex with the index i of the current item.
    isAnyOpen: boolean //Indicates whether any nav items are in the expanded state, determined by checking that activeIndex is not null.
}

const NavItem = ({isAnyOpen,isOpen, handleOpen, category }: NavItemProps) => {
    // console.log('Rendering NavItems', PRODUCT_CATEGORIES);
    // console.log('NavItem Props', { isOpen, isAnyOpen, category });

    //// Step 8: Display the expanded or closed state of NavItem according to the isOpen state
    return (
        <div className='flex'>
            <div className='relative flex items-center'>
                {/* Step 9: Call handleOpen when the button is clicked, and 'activeIndex' may be updated */}
                <Button
                    className='gap-1.5'
                    onClick={handleOpen}
                    //after handleOpen clicked, activeIndex changes
                    //the state update of the NavItems component triggers a re-render.
                    variant={isOpen ? 'secondary' : 'ghost'}>
                    {category.label}
                    {/* Step 10: Rotate the ChevronDown icon according to the isOpen status */}
                    <ChevronDown
                       strokeWidth={3}            
                        color="#3338cc"
                        className={cn(
                        'h-4 w-4 transition-all text-muted-foreground',
                        {
                            '-rotate-180': isOpen,
                        }
                   
                        )}
                    />
                </Button>
            </div>
            
            {isOpen ? (
                <div className={cn(
                    "absolute inset-x-0 top-full text-sm text-muted-foreground",
                    {"animate-in fade-in-10 slide-in-from-top-5":
                        !isAnyOpen})}>  
                    <div className='absolute inset-0 top-1/2 bg-white shadow'
                    aria-hidden='true' />

                    {/* show category when navbar open */}
                    <div className='relative bg-white'>
                        <div className='mx-auto max-w-7xl px-8'>
                            <div className='grid grid-cols-4 gap-x-8 gap-y-10 py-16'>
                            <div className='col-span-4 col-start-1 grid grid-cols-3 gap-x-8'>
                                {category.featured.map((item)=>(
                                    <div 
                                        key={item.name}
                                        className='group relative text-base sm:text-sm'>
                                            <div className='relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                                            <Image
                                                src={item.imageSrc}
                                                alt='product category image'
                                                fill
                                                className='object-cover object-center'
                                            />
                                            </div>

                                            <Link
                                                href={item.href}
                                                className='mt-6 block font-medium text-gray-900'>
                                                {item.name}
                                            </Link>

                                            <p
                                                className='mt-1'
                                                aria-hidden='true'>
                                                Shop now
                                            </p>
                                        </div>
                                ))}
                            </div>
                            </div>   
                        </div>
                    </div>
                </div>
            ) : null}
        </div>


    )
}

export default NavItem