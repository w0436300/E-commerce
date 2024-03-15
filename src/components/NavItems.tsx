'use client'
import { useRef, useState, useEffect } from "react"
import { PRODUCT_CATEGORIES } from "@/config"
import NavItem from './NavItem'
import { useOnClickOutside } from "@/hooks/use-on-click-outside"


const NavItems = () => {

    // Step 1: Initialize the 'activeIndex' state: no items are expanded.
    const [activeIndex, setActiveIndex] = useState<
    null | number
    >(null)
    
    //Handle user pressing Escape on keyboard
    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setActiveIndex(null)
        }
      }
  
      document.addEventListener('keydown', handler)
  
      return () => {
        //Prevents memory leaks and handler functions from being accidentally called after the component is unloaded
        document.removeEventListener('keydown', handler)
      }
    }, [])

    //Initial state: activeIndex= null, isAnyOpen is False
    //Step2: Determine whether any items are expanded.
    const isAnyOpen = activeIndex !== null
    
    //close navbar when click outside
    const navRef = useRef<HTMLDivElement | null>(null)
    useOnClickOutside(navRef, () => setActiveIndex(null))

    
    return (
        <div className='flex gap-4 h-full' ref={navRef}>
            {/* Step 3: Traverse PRODUCT_CATEGORIES to generate NavItem component list */}
          {PRODUCT_CATEGORIES.map((category, i) => {
            // Step 4: Define the click processing function for each NavItem
            const handleOpen = () => {
                // Step 5: If the clicked item is expanded, close it; otherwise, expand it.
              if (activeIndex === i) {
                setActiveIndex(null) //close it
              } else {
                setActiveIndex(i) //Set it to the index of the clicked item (expand this item)
              }
            }
            
            //Step 6: Determine if the current NavItem is expanded
            const isOpen = i === activeIndex
            
            //Step 7: Render NavItem, pass state and handler function
            return (
              <NavItem
                category={category}
                handleOpen={handleOpen}
                isOpen={isOpen}
                key={category.value}
                isAnyOpen={isAnyOpen}
              />
            )
          })}
        </div>
      )
}

export default NavItems