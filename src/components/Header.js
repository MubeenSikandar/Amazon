import React from 'react';
import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';


function Header() {

    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);
    return (
        <header className="sticky top-0 z-50">
            {/*Top Nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div className= "mt-2 flex items-center flex-grow sm:flex-grow-0">
                <div>
                        <Image
                            onClick={() => router.push('/')}
                        src="http://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                        />
                         </div>
                </div>
                <div className= "hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                    <SearchIcon className="h-12 p-4" />
                </div>
          
            { /* Right Section */}
            <div>
                    <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                        <div onClick={!session ? signIn : signOut} className="link">
                            <p>
                                {session ? `Hello, ${session.user.name}` : "Sign In"}
                    </p>
                            <p className="font-extrabold md:text-sm">Account & Lists</p>
                            </div>
                <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                </div>
                        <div className="relative link flex items-center">
                            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                                {items.length}
                            </span>
                            <ShoppingCartIcon onClick={() => router.push("/checkout")} className="h-10" />
                            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                        </div>
                        
                    </div>
                    
                </div>

                </div>
        {/*Bottom Nav*/}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1"/>
                   All 
                </p>
                <p className="link">
                    Prime Video
                </p >
                <p className="link">
                    Amazon Business
                </p>
                <p className="link">
                    Today's Deals
                </p>
                <p className="link hidden lg:inline">
                    Electronics
                </p>
                <p className="link hidden lg:inline">
                    Food & Grocery
                </p>
                <p className="link hidden lg:inline">
                    Prime
                </p>
                <p className="link hidden lg:inline">
                    Buy Again
                </p>
                <p className="link hidden lg:inline">
                    Shopper Toolkit
                </p>
                <p className="link hidden lg:inline">
                    Health & Personal Care
                    </p>
            </div>
       </header>
    )
}

export default Header
