const plans = [
    {
        id: 1,
        name: 'Hobby',
        memory: '4 GB RAM',
        cpu: '4 CPUs',
        storage: '128 GB SSD disk',
        price: '$40',
        isCurrent: false,
        grades: [{ subj: "", value: 0 }]
    },
    {
        id: 2,
        name: 'Startup',
        memory: '8 GB RAM',
        cpu: '6 CPUs',
        storage: '256 GB SSD disk',
        price: '$80',
        isCurrent: true,
    },
    {
        id: 1,
        name: 'Hobby',
        memory: '4 GB RAM',
        cpu: '4 CPUs',
        storage: '128 GB SSD disk',
        price: '$40',
        isCurrent: false,
        grades: [{ subj: "", value: 0 }]
    },
    {
        id: 2,
        name: 'Startup',
        memory: '8 GB RAM',
        cpu: '6 CPUs',
        storage: '256 GB SSD disk',
        price: '$80',
        isCurrent: true,
    },
    {
        id: 1,
        name: 'Hobby',
        memory: '4 GB RAM',
        cpu: '4 CPUs',
        storage: '128 GB SSD disk',
        price: '$40',
        isCurrent: false,
        grades: [{ subj: "", value: 0 }]
    },
    {
        id: 2,
        name: 'Startup',
        memory: '8 GB RAM',
        cpu: '6 CPUs',
        storage: '256 GB SSD disk',
        price: '$80',
        isCurrent: true,
    },
    {
        id: 1,
        name: 'Hobby',
        memory: '4 GB RAM',
        cpu: '4 CPUs',
        storage: '128 GB SSD disk',
        price: '$40',
        isCurrent: false,
        grades: [{ subj: "", value: 0 }]
    },
    {
        id: 2,
        name: 'Startup',
        memory: '8 GB RAM',
        cpu: '6 CPUs',
        storage: '256 GB SSD disk',
        price: '$80',
        isCurrent: true,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { withRouter } from 'next/router'
import JsPDF from 'jspdf';

class SchoolReportTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    componentDidMount() {

    }

    handleOpen = () => {
        this.setState({ open: true })
    };

    handleClose = () => {
        this.setState({ open: false })
    };

    // handlePdf = () => {

    // }

    generatePDF = () => {

        const report = new JsPDF('l', 'pt', 'a4');
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        })
    }

    //Render
    render() {
        return (
            <React.Fragment>

                <div>
                    <button
                        type="button"
                        onClick={this.handleOpen}
                        className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 capitalize"
                    >
                        View as report
                    </button>
                    <Transition.Root show={this.state.open} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={() => { }} >
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            <div className="fixed inset-0 z-10 overflow-y-auto" >
                                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" >
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 translatey-0 sm:scale-100"
                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    >
                                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-3 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:p-6  w-2/4">
                                            <div className="sm:flex sm:items-start" >
                                                <div className="mt-3 text-center sm:mt-0  sm:text-left">
                                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 capitalize">

                                                    </Dialog.Title>

                                                </div>
                                            </div>
                                            <div>
                                                <div >

                                                    {/* table results */}
                                                    <div className="px-4 sm:px-6 lg:px-8">
                  

                                                        <div className="-mx-4 mt-10 ring-1 ring-gray-300 bg-slate-100 sm:-mx-6 md:mx-0 md:rounded-lg" id='report'>
                                                            <div className="sm:flex p-4 sm:items-center">
                                                                <div className="sm:flex-auto">
                                                                    <h1 className="text-xl font-semibold text-gray-900">Mike Sambakodwa</h1>
                                                                    <p className="mt-2 text-sm text-gray-700">
                                                                        End of term 2 exams, 2022
                                                                    </p>
                                                                    <p className="mt-2 text-xl text-gray-700">
                                                                        GREMA Pvt Sec School
                                                                    </p>
                                                                </div>
                                                                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                                                    <p

                                                                        className="inline-flex items-center justify-center  px-4 py-2 text-sm font-medium text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                                                    >
                                                                        No. {"3"}
                                                                    </p>
                                                                </div>



                                                            </div>
                                                            <table className="min-w-full divide-y divide-gray-300">
                                                                <thead className='bg-gray-300'>
                                                                    <tr>
                                                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-xl font-semibold text-gray-900 sm:pl-6">
                                                                            Subject
                                                                        </th>
                                                                        <th
                                                                            scope="col"
                                                                            className="hidden px-3 py-3.5 text-left text-xl font-semibold text-gray-900 lg:table-cell"
                                                                        >
                                                                            Grade
                                                                        </th>
                                                                        <th
                                                                            scope="col"
                                                                            className="hidden px-3 py-3.5 text-left text-xl font-semibold text-gray-900 lg:table-cell"
                                                                        >
                                                                            Points
                                                                        </th>
                                                                        <th
                                                                            scope="col"
                                                                            className="hidden px-3 py-3.5 text-left text-xl font-semibold text-gray-900 lg:table-cell"
                                                                        >
                                                                            Remarks
                                                                        </th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {plans.map((plan, planIdx) => (
                                                                        <tr key={plan.id}>
                                                                            <td
                                                                                className={classNames(
                                                                                    planIdx === 0 ? '' : 'border-t border-transparent',
                                                                                    'relative py-4 pl-4 sm:pl-6 pr-3 text-sm'
                                                                                )}
                                                                            >
                                                                                <div className="font-medium text-gray-900">
                                                                                    {plan.name}
                                                                                    {plan.isCurrent ? <span className="ml-1 text-indigo-600">(Current Plan)</span> : null}
                                                                                </div>
                                                                                <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                                                                                    <span>
                                                                                        {plan.memory} / {plan.cpu}
                                                                                    </span>
                                                                                    <span className="hidden sm:inline">·</span>
                                                                                    <span>{plan.storage}</span>
                                                                                </div>
                                                                                {planIdx !== 0 ? <div className="absolute right-0 left-6 -top-px h-px bg-gray-200" /> : null}
                                                                            </td>
                                                                            <td
                                                                                className={classNames(
                                                                                    planIdx === 0 ? '' : 'border-t border-gray-200',
                                                                                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                                                                )}
                                                                            >
                                                                                {plan.memory}
                                                                            </td>
                                                                            <td
                                                                                className={classNames(
                                                                                    planIdx === 0 ? '' : 'border-t border-gray-200',
                                                                                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                                                                )}
                                                                            >
                                                                                {plan.cpu}
                                                                            </td>
                                                                            <td
                                                                                className={classNames(
                                                                                    planIdx === 0 ? '' : 'border-t border-gray-200',
                                                                                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                                                                )}
                                                                            >
                                                                                {plan.storage}
                                                                            </td>

                                                                        </tr>

                                                                    ))}
                                                                    <tr className=''>
                                                                       
                                                                            
                                                                            <th
                                                                                scope="col"
                                                                                className="hidden px-3 py-3.5 text-end text-xl font-semibold text-gray-900 lg:table-cell"
                                                                            >
                                                                              Total
                                                                            </th>
                                                                            <th
                                                                                scope="col"
                                                                                className="hidden bg-gray-300 px-3 py-3.5 text-left text-xl font-semibold text-gray-900 lg:table-cell"
                                                                            >
                                                                                21
                                                                            </th>
                                                                            <th
                                                                                scope="col"
                                                                                className="hidden bg-gray-300 px-3 py-3.5 text-left text-xl font-semibold text-gray-900 lg:table-cell"
                                                                            >
                                                                                21
                                                                            </th>
                                                                            <th
                                                                                scope="col"
                                                                                className="hidden bg-gray-300 px-3 py-3.5 text-left text-xl font-semibold text-gray-900 lg:table-cell"
                                                                            >
                                                                                Passed
                                                                            </th>

                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                                            <button
                                                                onClick={this.generatePDF}
                                                                type="button"
                                                                className="sr-only inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm capitalize"

                                                            >
                                                                Save as pdf
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm capitalize"
                                                                onClick={this.handleClose}
                                                            >
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* button cancel */}
                                                </div>

                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition.Root>
                </div>
            </React.Fragment>
        );
    }
}


export default SchoolReportTemplate;
