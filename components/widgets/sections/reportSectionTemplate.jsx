import Link from 'next/link'
import { useState } from 'react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PreviousResultsReportTemplate(props) {

  const getSubjects = (subj) => {
    return subj.length > 0 ? subj : []
  }
  return (
    <div className="bg-gray-50">
      <div className="mt-6 flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-t border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>

                    {
                      getSubjects(props.subjects).map((subj, key) => {

                        return <th key={key} scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                          {subj.code.toUpperCase()}
                        </th>
                      })
                    }
                    <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Points
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Remarks
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {/* {result.acc_year.term.map((termResults, key) => (
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
                                  ))} */}
                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
