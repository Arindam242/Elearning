import React from "react";
import Link from "next/link";
import {SearchIcon} from "@heroicons/react/outline";
import {useAuthState} from "react-firebase-hooks/auth";
import {signInWithPopup, GoogleAuthProvider, auth} from "../utils/firebase";
import Image from 'next/image'

const Navbar = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="w-full h-16 bg-gray-800">
            <div className="max-w-7xl w-full mx-auto flex items-center h-full justify-between">
                <div className="flex items-center space-x-5">
                    <h2 className="text-2xl  text-white">Stepik</h2>
                    <Link passhref href="/">
            <span className="text-gray-400 cursor-pointer hover:text-green-500">
              Catalog
            </span>
                    </Link>
                    <Link passhref href="/">
            <span className="text-gray-400 cursor-pointer hover:text-green-500">
              Teach
            </span>
                    </Link>
                </div>
                <div className="flex items-center space-x-5">
                    <div className="flex items-center bg-gray-500 rounded-md px-4 py-2 space-x-2 focus:bg-white">
                        <SearchIcon className="h-5 text-gray-200 "/>
                        <input
                            type="text"
                            className="focus:outline-none  bg-gray-500 text-gray-200  leading-tight "
                            placeholder="search"
                        />
                    </div>
                    {!user ? (
                        <>
                            <button
                                onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
                                className="px-4 py-2 border-2 border-gray-700 rounded-md text-white hover:border-gray-400"
                            >
                                Login
                            </button>
                            <button
                                className="px-4 py-2 border-2 border-gray-700 rounded-md text-white hover:border-gray-400">
                                Register
                            </button>
                        </>
                    ) : (
                        <div className="w-8 h-8 ">
                            <Image
                                className="w-full rounded-md hover:cursor-pointer  object-cover h-full"
                                src={user.photoURL}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
