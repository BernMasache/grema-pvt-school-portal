import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import SchoolReportTemplate from './report'

const results = [

  {
    acc_year: {
      name: "2020-2021",
      term: [
        {
          name: 1,
          position: 2,
          remarks: "Passed",
          points: 7,
          enrollment: 87

        },
        {
          name: 2,
          position: 4,
          remarks: "Passed",
          points: 12,
          enrollment: 87

        },
        {
          name: 3,
          position: 12,
          remarks: "Passed",
          points: 16,
          enrollment: 87

        }
      ],
    },
  },
  {
    acc_year: {
      name: "2021-2022",
      term: [
        {
          name: 1,
          position: 7,
          remarks: "Passed",
          points: 7,
          enrollment: 87

        },
        {
          name: 2,
          position: 17,
          remarks: "Passed",
          points: 20,
          enrollment: 87

        },
        {
          name: 3,
          position: 12,
          remarks: "Passed",
          points: 10,
          enrollment: 87

        }
      ],
    },
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PreviousResults() {
  return (
    <div className="bg-gray-50">
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Previous Results</h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <Link
              href="/exams"
              className="relative inline-flex items-center rounded-md border border-transparent bg-slate-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl py-6 px-6 sm:py-2 lg:px-2">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">

          <dl className="mt-6 space-y-2 divide-y divide-gray-200 pb-8">
            {results.map((result, key) => (
              <Disclosure as="div" key={key} className="pt-2">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{result.acc_year.name}</span>
                        <div className="flex ">
                          <span className="ml-6 flex h-7">
                          Form {key+1}
                          </span>
                          <span className="ml-6 flex h-7">
                            <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      {/* <p className="text-base text-gray-500">{result.termOne}</p> */}
                      <div className="mt-6 flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className="overflow-hidden border-t border-gray-200">


                              <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                      Term
                                    </th>
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
                                  {result.acc_year.term.map((termResults, key) => (
                                    <tr key={key}>
                                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                        {termResults.name}
                                      </td>
                                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                        {termResults.position}
                                      </td>
                                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                        {termResults.points}
                                      </td>
                                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                        {termResults.remarks}
                                      </td>
                                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                        <div href="" className="text-orange-600 hover:text-orange-900">
                                          <SchoolReportTemplate/>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>


                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
