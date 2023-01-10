import React from "react";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { withRouter } from 'next/router'
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  CogIcon,
  UserCircleIcon,
  UserGroupIcon,
  UsersIcon,
  RectangleGroupIcon,
  HomeIcon,
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
// import moment from 'moment';
import { classNames, componentKey } from "../../services/helpers.service"
// import Swal from 'sweetalert2/dist/sweetalert2.js';
//STORES , COMPONETS AND FROMS 

//INITIALISE

//PAGE
class LayoutComponet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      user: { username: " ", email: " " },
      role: " ",
      userNavigation: [
        { name: "Settings" },
        { name: "About"},
      ],
      other: [
        { name: "help"},
        { name: "about" },
      ],
    };
  }
  componentDidMount() {
  
  }

  navigation() {
    let navList = [
      { name: "Profile", href: "/profile", icon: HomeIcon, current: false },
      {
        name: "Exams Results",
        href: "/exams",
        icon: UsersIcon,
        current: false,
      },
      {
        name: "Class Timetable",
        href: "/time-tables/class",
        icon: RectangleGroupIcon,
        current: false,
      },
      {
        name: "Exams Timetable",
        href: "/time-tables/exams",
        icon: CogIcon,
        current: false,
      },
    ];
    
    return navList;
  }


  render() {
    return (
      <React.Fragment>
        <div className="min-h-full bg-slate-100 " style={{ height: '100vh' }}>
          {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
          <Popover
            as="header"
            className={({ open }) =>
              classNames(
                open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
                'bg-white shadow-sm lg:static lg:overflow-y-visible'
              )
            }
          >
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                  <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12 py-3">
                    <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                      <div className="flex flex-shrink-0 items-center">
                        <a href="#">
                          <Image
                            className="block "
                            src="/assets/GREMA-LOGO3.jpg"
                            width={40}
                            height={40}
                            alt={process.env.NEXT_PUBLIC_NAME}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                      <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                        <div className="w-full">

                        </div>
                      </div>
                    </div>
                    <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                      {/* Mobile menu button */}
                      <Popover.Button className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                        <span className="sr-only">Open menu</span>
                        {open ? (
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Popover.Button>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">

                      <a
                        href="#"
                        className="ml-5 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </a>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-5 flex-shrink-0">
                        <div>
                          <Menu.Button className="flex rounded-full bg-white focus:outline-none ">
                            <span className="sr-only">Open user menu</span>
                            <div className="text-right">username
                              {/* <div className="text-base text-sm font-medium text-gray-700 lowercase">{this.state.user.username} {"(" + this.state.role + ")"}</div> */}
                              <div className="text-xs font-medium text-gray-500 lowercase">{this.state.user.email}</div>
                            </div>
                            < Bars3Icon className="ml-2 mt-2 h-7 w-7 rounded-full text-gray-400 " aria-hidden="true" />

                          </Menu.Button>

                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {this.state.userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block py-2 px-4 text-sm text-gray-700', 'capitalize'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  style={{ cursor: "pointer" }}
                                  href={null}
                                  onClick={() =>
                                    this.onSignout()
                                  }
                                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 capitalize')}
                                >
                                  signout
                                </a>

                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                      <div className="ml-5">
                        {/*language options**/}
                      </div>


                    </div>
                  </div>
                </div>

                <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
                  <div className="mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4">
                    {this.navigation().map((item) => (
                      <Link key={item.name} href={item.href} >
                        <a
                          aria-current={item.current ? 'page' : undefined}
                          className={classNames(
                            item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                            'block rounded-md py-2 px-3 text-base font-medium', "capitalize"
                          )}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                      <div className="flex-shrink-0">
                        <UserCircleIcon className="h-8 w-8 rounded-full text-gray-400 " aria-hidden="true" />

                      </div>
                      <div className="ml-3">
                      </div>
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
                      {this.state.userNavigation.map((item) => (
                        <a
                          style={{ cursor: "pointer" }}
                          key={item.name}

                          className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 capitalize"
                        >
                          {item.name}
                        </a>
                      ))}
                      <a
                        style={{ cursor: "pointer" }}
                        href={null}
                        onClick={() =>
                          this.onSignout()
                        }
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 capitalize"
                      >
                        Signout
                      </a>
                    </div>
                  </div>

                  <div className="mx-auto mt-6 max-w-3xl px-4 sm:px-6">
                    {/*language options*/}

                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>

          <div className="py-5">
            <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
              <div className="hidden lg:col-span-2 lg:block xl:col-span-2">
                <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
                  <div className="space-y-1 pb-8">
                    {this.navigation().map((item) => (
                      <Link key={item.name} href={item.href} replace
                      aria-current={item.current ? "page" : undefined}
                          className={classNames(
                            item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-50',
                            'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
                          )}>
                      
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          <span className="truncate capitalize">{item.name}</span>
                       
                      </Link>
                    ))}
                  </div>
                  <div>
                  
                    <div className="text-center text-xs px-4 py-5  text-gray-500">
                      <Link href="/help" target="_blank" rel='noopener noreferrer' className="font-medium text-xs text-gray-500 hover:text-gray-500 capitalize" >
                    
                          help
                      </Link>
                   
                    </div>
                  </div>
                </nav>
              </div>
              <main className=" sm:col-span-10">
                {this.props.children}
              </main>
            </div>
          </div>
        </div >
      </React.Fragment>
    )
  }
}
export default LayoutComponet;
