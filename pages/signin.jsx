
import { LockClosedIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import Router from 'next/router'
import { useState } from 'react'
import useCrypto from '../services/cryptoJs'
import useStudentStore from '../services/store/students.store'
import cookie from 'js-cookie'
const studentStore = new useStudentStore()
const crypto = new useCrypto()
export default function SigninPage() {
    const [student, setDetails] = useState({
        code: "",
        password: ""
    })

    const login = (e) => {
        e.preventDefault()

        studentStore.signin(student).then(response => {

            if (response.status == 200) {
                
                setTimeout(() => {
                    Router.push("/portal")
                }, 200)
            }
        })

    }
    const studentDetails = (e) => {
        setDetails({
            ...student,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>

            <div className="flex min-h-full items-top justify-center py-12 mt-24 px-4 sm:px-6 lg:px-8" style={{ height: "100vh" }}>
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>


                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="registration-number" className="sr-only">
                                    Student number
                                </label>
                                <input
                                    onChange={studentDetails}
                                    id="reg-number"
                                    name="code"
                                    type="text"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Registration number"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    onChange={studentDetails}

                                    id="user-password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={login}
                                type="button"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span> */}
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>


            </div>

        </>
    )
}
