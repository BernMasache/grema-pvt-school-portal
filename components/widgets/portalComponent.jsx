// import { PaperClipIcon } from '@heroicons/react/20/solid'
// import { Fragment, useState } from 'react'
// import { Disclosure, Menu, RadioGroup, Switch, Transition } from '@headlessui/react'
// import { MagnifyingGlassIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
// import {
//     Bars3Icon,
//     BellIcon,
//     CogIcon,
//     CreditCardIcon,
//     KeyIcon,
//     SquaresPlusIcon,
//     UserCircleIcon,
//     XMarkIcon,
// } from '@heroicons/react/24/outline'

// const user = {
//     name: 'Lisa Marie',
//     email: 'lisamarie@example.com',
//     imageUrl:
//         'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
// }
// const navigation = [
//     { name: 'Dashboard', href: '#' },
//     { name: 'Jobs', href: '#' },
//     { name: 'Applicants', href: '#' },
//     { name: 'Company', href: '#' },
// ]
// const userNavigation = [
//     { name: 'Your Profile', href: '#' },
//     { name: 'Settings', href: '#' },
//     { name: 'Sign out', href: '#' },
// ]
// const subNavigation = [
//     { name: 'Profile', href: '#', icon: UserCircleIcon, current: false },
//     { name: 'Exam Results', href: '#', icon: CreditCardIcon, current: true },
//     { name: 'Class Timetable', href: '#', icon: SquaresPlusIcon, current: false },
//     { name: 'Exam Timetable', href: '#', icon: SquaresPlusIcon, current: false },
//     { name: 'Performance Trend', href: '#', icon: SquaresPlusIcon, current: false },

// ]
// const plans = [
//     { name: 'Startup', priceMonthly: 29, priceYearly: 290, limit: 'Up to 5 active job postings' },
//     { name: 'Business', priceMonthly: 99, priceYearly: 990, limit: 'Up to 25 active job postings' },
//     { name: 'Enterprise', priceMonthly: 249, priceYearly: 2490, limit: 'Unlimited active job postings' },
// ]
// const payments = [
//     {
//         id: 1,
//         date: '1/1/2020',
//         datetime: '2020-01-01',
//         description: 'Business Plan - Annual Billing',
//         amount: 'CA$109.00',
//         href: '#',
//     },
//     // More payments...
// ]

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

// export default function PortalComponet() {
//     const [selectedPlan, setSelectedPlan] = useState(plans[1])
//     const [annualBillingEnabled, setAnnualBillingEnabled] = useState(true)

//     return (
//         <>
//             {/*
//         This example requires updating your template:

//         ```
//         <html class="h-full bg-gray-100">
//         <body class="h-full">
//         ```
//       */}
//             <div className="h-full">

//                 <main className="mx-auto max-w-7xl pb-10 lg:py-12 lg:px-8">
//                     <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
//                         <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
//                             <nav className="space-y-1">
//                                 {subNavigation.map((item) => (
//                                     <a
//                                         key={item.name}
//                                         href={item.href}
//                                         className={classNames(
//                                             item.current
//                                                 ? 'bg-gray-50 text-orange-600 hover:bg-white'
//                                                 : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
//                                             'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
//                                         )}
//                                         aria-current={item.current ? 'page' : undefined}
//                                     >
//                                         <item.icon
//                                             className={classNames(
//                                                 item.current ? 'text-orange-500' : 'text-gray-400 group-hover:text-gray-500',
//                                                 'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
//                                             )}
//                                             aria-hidden="true"
//                                         />
//                                         <span className="truncate">{item.name}</span>
//                                     </a>
//                                 ))}
//                             </nav>
//                         </aside>


//                         {/* Payment details */}
//                         <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
//                             <section>
//                                 <ProfilePage />
//                             </section>
//                         </div>
//                     </div>
//                 </main>
//             </div>
//         </>
//     )
// }

// const ProfilePage = () => {
//     return (
//         <div className="overflow-hidden bg-white shadow sm:rounded-lg">
//             <div className="px-4 py-5 sm:px-6">
//                 <h3 className="text-lg font-medium leading-6 text-gray-900">Applicant Information</h3>
//                 <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
//             </div>
//             <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
//                 <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
//                     <div className="sm:col-span-1">
//                         <dt className="text-sm font-medium text-gray-500">Full name</dt>
//                         <dd className="mt-1 text-sm text-gray-900">Margot Foster</dd>
//                     </div>
//                     <div className="sm:col-span-1">
//                         <dt className="text-sm font-medium text-gray-500">Class</dt>
//                         <dd className="mt-1 text-sm text-gray-900">Form 3</dd>
//                     </div>
//                     <div className="sm:col-span-1">
//                         <dt className="text-sm font-medium text-gray-500">Sex</dt>
//                         <dd className="mt-1 text-sm text-gray-900">Female</dd>
//                     </div>
//                     <div className="sm:col-span-1">
//                         <dt className="text-sm font-medium text-gray-500">Contact</dt>
//                         <dd className="mt-1 text-sm text-gray-900">0998987876</dd>
//                     </div>
//                     <div className="sm:col-span-2">
//                         <dt className="text-sm font-medium text-gray-500">Biography</dt>
//                         <dd className="mt-1 text-sm text-gray-900">
//                             Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
//                             qui ipsum aliquip consequat sint. Sit id mollit nulla.
//                         </dd>
//                     </div>

//                 </dl>
//             </div>
//         </div>
//     )
// }

// const ResultsTemplate = (data) => {
//     return (
//         <div className="">
//             {/* Billing history */}
//             <section aria-labelledby="billing-history-heading">
//                 <div className="bg-white pt-6 shadow sm:overflow-hidden sm:rounded-md">
//                     <div className="px-4 sm:px-6">
//                         <h2 id="billing-history-heading" className="text-lg font-medium leading-6 text-gray-900">
//                             Billing history
//                         </h2>
//                     </div>
//                     <div className="mt-6 flex flex-col">
//                         <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//                             <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//                                 <div className="overflow-hidden border-t border-gray-200">
//                                     <table className="min-w-full divide-y divide-gray-200">
//                                         <thead className="bg-gray-50">
//                                             <tr>
//                                                 <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
//                                                     Date
//                                                 </th>
//                                                 <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
//                                                     Description
//                                                 </th>
//                                                 <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
//                                                     Amount
//                                                 </th>
//                                                 {/*
//                                   `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
//                                 */}
//                                                 <th
//                                                     scope="col"
//                                                     className="relative px-6 py-3 text-left text-sm font-medium text-gray-500"
//                                                 >
//                                                     <span className="sr-only">View receipt</span>
//                                                 </th>
//                                             </tr>
//                                         </thead>
//                                         <tbody className="divide-y divide-gray-200 bg-white">
//                                             {payments.map((payment) => (
//                                                 <tr key={payment.id}>
//                                                     <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
//                                                         <time dateTime={payment.datetime}>{payment.date}</time>
//                                                     </td>
//                                                     <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
//                                                         {payment.description}
//                                                     </td>
//                                                     <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
//                                                         {payment.amount}
//                                                     </td>
//                                                     <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
//                                                         <a href={payment.href} className="text-orange-600 hover:text-orange-900">
//                                                             View receipt
//                                                         </a>
//                                                     </td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

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

  changeLanguage = (value) => {
    // this.props.t.locale = value
    // console.log(this.props.router)
    // if (this.props.router.locale != value){
    //   this.props.router.push({
    //     route: this.props.router.pathname,
    //     query: this.props.router.query
    // }, this.props.router.asPath, { value });
    //   this.setState({ language: value })
    //   i18n.changeLanguage(value)
    // }
  }
  navigation() {
    let navList = [
      { name: "Portal", href: "/portal", icon: HomeIcon, current: false },
      {
        name: "users",
        href: "/admin/users",
        icon: UsersIcon,
        current: false,
      },
      {
        name: "livestock",
        href: "/admin/livestock",
        icon: RectangleGroupIcon,
        current: false,
      },
      {
        name: "settings",
        href: "/admin/settings",
        icon: CogIcon,
        current: false,
      },
    ];
    // for (let nav of navList)
    //   if (
    //     nav.href.split("/")[1] + nav.href.split("/")[2] ==
    //     this.props.router.asPath.split("/")[1] + this.props.router.asPath.split("/")[2]
    //   )
    //     nav.current = true;
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
                            src="/logo.png"
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
