import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'
import SchoolReportTemplate from './report'
import PreviousResultsReportTemplate from './sections/reportSectionTemplate'

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

export default function PreviousResults(props) {
  const [termsSample, settermsSample] = useState([1, 2, 3])
  const [accYearsSample, setAccYearsSample] = useState(["2021-2022", "2022-2023"])
  const [formsSample, setformsSample] = useState([1, 2, 3, 4])
  const [subjecsSample, setSubjecsSample] = useState([{ code: "phy", name: "Physics" }, { code: "chi", name: "Chichewa" }, { code: "bio", name: "Biology" }])


  const getGrades = (grades) => {
    let accYear = []
    let terms = []

    let forms = []
    grades.grades == undefined ? "" : grades.grades.map(grade => {
      accYear.push(grade.academicYear)
      terms.push(grade.term)
      forms.push(grade.form)

    })
    return { accYear, terms, forms }
  }

  const terms = (data) => {

    // let uniqueChars = data.filter((c, index) => {
    //   return chars.indexOf(c) === index;
    // });

    let term = [...new Set(data.terms)]
 
    return term
  }

  const forms = (data) => {

    let allForms = [...new Set(data.forms)]
 
    return allForms
  }

  const academicYears = (data) => {

    let accYears = [...new Set(data.accYear)]
 
    return accYears
  }

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
            {accYearsSample.sort().reverse().map((result, key) => (
              <Disclosure as="div" key={key} className="pt-2">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{result}</span>
                        <div className="flex ">
                          <span className="ml-6 flex h-7">
                            Form {key + 1}
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
                      <PreviousResultsReportTemplate forms={forms(getGrades(props.grades))} subjects={subjecsSample} academicYears={academicYears(getGrades(props.grades))} terms={terms(getGrades(props.grades))}/>
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
