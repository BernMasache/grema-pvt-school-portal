import Link from "next/link"
import SchoolReportTemplate from "./report"

const payments = [
    {
        id: 1,
        position: '11',
        remarks: 'Passed',
        points: '14',
        amount: 'CA$109.00',
        href: '#',
    },
]

const ResultsTemplate = (data) => {
    return (
        <div className="">
            {/* Billing history */}
            <section aria-labelledby="billing-history-heading">
                <div className="bg-white pt-6 shadow sm:overflow-hidden sm:rounded-md">
                    <div className="px-4 sm:px-6">
                        <h2 id="billing-history-heading" className="text-lg font-medium leading-6 text-gray-900">
                            {"2023"} End of Term {"1"} examinamtions
                        </h2>
                        <p className="text-xl font-normal leading-2 text-gray-500">Form {"2"}</p>
                    </div>
                    <div className="mt-6 flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden border-t border-gray-200">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                                    Position
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                                    Points
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                                    Remarks
                                                </th>
                                                {/*
                                  `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                                */}
                                                <th
                                                    scope="col"
                                                    className="relative px-6 py-3 text-left text-sm font-medium text-gray-500"
                                                >
                                                    <span className="sr-only">View receipt</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {payments.map((payment) => (
                                                <tr key={payment.id}>
                                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                                        <time remarks={payment.remarks}>{payment.position}</time>
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                        {payment.points}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                        {payment.remarks}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                                        {/* <a href={payment.href} className="text-orange-600 hover:text-orange-900"> */}
                                                            <SchoolReportTemplate/>
                                                        {/* </a> */}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </section >
            <div className="border-b mt-8 border-gray-200 pb-5 sm:flex sm:items-center sm:justify-end">
                
                <div className="mt-3 sm:mt-0 sm:ml-4">
                    <Link
                        href="/exams/previous-results"
                        className="inline-flex items-center rounded-md border border-transparent bg-slate-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Previous Results
                    </Link>
                </div>
            </div>
        </div >
    )
}
export default ResultsTemplate