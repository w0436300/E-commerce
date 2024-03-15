import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper';
import NavItems from './NavItems';
import { buttonVariants } from './ui/button'
import Cart from './Cart'

import { Icons } from './Icons';

const Navbar = () => {

    const user = null

    return (
        <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
            <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
                <MaxWidthWrapper>
                    <div className='border-b border-gray-200'>
                        <div className='flex h-16 items-center'>
                            {/* Mobile nav */}

                            <div className='ml-4 flex lg:ml-0'>
                                {/* logo */}
                                <Link href='/'>
                                    <Icons.logo className='h-10 w-10' />
                                </Link>
                            </div>

                            <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                                {/* navbar-left */}
                                <NavItems />
                            </div>

                            <div className='ml-auto flex items-center'>
                                {/* Navbar-right: signin/ signup/ cart */}
                                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                                    {user ? null : (
                                        <Link
                                            href='/sign-in'
                                            className={buttonVariants({
                                                variant: 'ghost',
                                            })}>
                                            Sign in
                                        </Link>
                                    )}

                                    {user ? null : (
                                        <span
                                            className='h-6 w-px bg-gray-200'
                                            aria-hidden='true'
                                        />
                                    )}

                                    {user ? (
                                        <UserAccountNav user={user} />
                                    ) : (
                                            <Link
                                                href='/sign-up'
                                                className={buttonVariants({
                                                    variant: 'ghost',
                                                })}>
                                                Create account
                                        </Link>
                                    )}

                                    {user ? (
                                        <span
                                        className='h-6 w-px bg-blue-200'
                                        aria-hidden='true'
                                        />
                                    ) : null}

                                    {user ? null : (
                                        <div className='flex lg:ml-6'>
                                        <span
                                            className='h-6 w-px bg-gray-200'
                                            aria-hidden='true'
                                        />
                                        </div>
                                    )}

                                    <div className='ml-4 flow-root lg:ml-6'>
                                        <Cart />
                                        
                                    </div>
                                </div>
                            </div>

                            

                            




                        </div>
                    </div>                  
                </MaxWidthWrapper>
            </div>
        
        </div>


    )
}

export default Navbar