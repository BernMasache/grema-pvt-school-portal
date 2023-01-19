import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { withRouter } from 'next/router'
import JsPDF from 'jspdf';
const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SchoolReport(props) {
    const [grades, setGrades] = useState(props.grades)

    const generatePDF = () => {

        const report = new JsPDF('l', 'pt', 'a4');
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        })
    }

    const pointsValueSet = (grade) => {
        return props.pointValueSet(grade)
    }

    const gradePassMark = (grade) => {

        if (grade >= 40 && grade <= 100) {
            return "Pass"
        } else {
            return "Fail"
        }
    }

    const getTerm = () => {

        return props.term
    }

    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-12 px-6 sm:py-8 lg:px-8">
                <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
                    <h2 className="text-center text-sm font-normal text-gray-500 sm:text-2xl">
                        Overral Report
                    </h2>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">

                        <Disclosure as="div" className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt className="text-lg">
                                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                            <span className="font-sm text-gray-600">{props.student.username} term {getTerm()} school report</span>
                                            <span className="ml-6 flex h-7 items-center">
                                                <ChevronDownIcon
                                                    className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Disclosure.Button>
                                    </dt>
                                    <Disclosure.Panel as="dd" className="mt-2 pr-12">

                                        {
                                            props && props.student.currentForm <= 2 ?
                                                <div className="mt-8 flex flex-col">
                                                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                                                <table className="min-w-full divide-y divide-gray-300">
                                                                    <thead className="bg-gray-50">
                                                                        <tr>
                                                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                                                Subject
                                                                            </th>
                                                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                                Score
                                                                            </th>
                                                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                                Grade
                                                                            </th>
                                                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                                Remarks
                                                                            </th>

                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="divide-y divide-gray-200 bg-white">
                                                                        {props.grades.length > 0 ? props.grades.map((grade, key) => (
                                                                            <tr key={key}>
                                                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                                                                                    {grade.name}
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                                    {grade.value}
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{pointsValueSet(grade.value)}</td>
                                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{gradePassMark(grade.value)}</td>

                                                                            </tr>
                                                                        )) : ""}
                                                                        <tr>
                                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-end font-medium text-gray-900 sm:pl-6">
                                                                                SubTotals
                                                                            </td>
                                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                                {props.totaGrades}

                                                                            </td>
                                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> </td>
                                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{props.passRemark}</td>

                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <div className="mt-8 flex flex-col">
                                                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                                                <table className="min-w-full divide-y divide-gray-300">
                                                                    <thead className="bg-gray-50">
                                                                        <tr>
                                                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                                                Subject
                                                                            </th>
                                                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                                Score
                                                                            </th>
                                                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                                Points
                                                                            </th>
                                                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                                Remarks
                                                                            </th>

                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="divide-y divide-gray-200 bg-white">
                                                                        {props.grades.length > 0 ? props.grades.map((grade, key) => (
                                                                            <tr key={key}>
                                                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                                                                                    {grade.name}
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                                    {grade.value}
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{pointsValueSet(grade.value)}</td>
                                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{gradePassMark(grade.value)}</td>

                                                                            </tr>
                                                                        )) : ""}
                                                                        <tr>
                                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-end font-medium text-gray-900 sm:pl-6">
                                                                                SubTotals
                                                                            </td>
                                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                                {props.totaGrades}

                                                                            </td>
                                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">  {props.points}</td>
                                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{props.passRemark}</td>

                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        }


                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>


                    </dl>
                </div>
            </div>
        </div>
    )
}
