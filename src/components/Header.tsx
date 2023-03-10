import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

import logo from "../assets/logo.svg";

const navigation = [
  { name: 'Study Notes', href: '/study-notes' },
  { name: 'Summarize', href: '/summarize' },
  { name: 'Essay Outline', href: '/essay-outline' },
]

export function Header() {

  return (
    <Popover as="header" className="sticky top-0">
      <div className=" bg-white px-4 py-4 border-b border-b-[#d0d4dc] ">
        <nav
          className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">

                <Image
                  className="h-8 w-auto sm:h-10"
                  src={logo}
                  alt="OpenAI Projects"

                />

              </Link>
              <div className="-mr-2 flex items-center md:hidden ">
                <Popover.Button className="bg-gray-300 rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex  ml-auto">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-gray-500  py-2"
                >
                  {item.name}
                </Link>
              ))}
              <Link className="font-inter font-medium bg-[#6469ff] text-white px-2 py-2  rounded-md hover:bg-[#494dc0]" href="/">Community</Link>
            </div>
          </div>



        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Image
                  className="h-8 w-auto"
                  src={logo}
                  alt="OpenAI Projects"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link className=" inline-block ml-2 mt-2 font-inter font-medium bg-[#6469ff] text-white px-3 py-2  rounded-md hover:bg-[#494dc0]" href="/">Community</Link>
  
              </div>


            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}