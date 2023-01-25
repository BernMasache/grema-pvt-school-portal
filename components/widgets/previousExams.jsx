import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'
import SchoolReportTemplate from './report'
import PreviousResultsReportTemplate from './sections/reportSectionTemplate'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PreviousResults(props) {

  const getGrades = (grades) => {
    let accYear = []
    let terms = []
    let subjects = []
    let forms = []
    let formAndAcademicYears = []

    if (grades == undefined) {

    } else {

      if (grades.grades == undefined) {

      } else {

        grades.grades == undefined ? "" : grades.grades.map(grade => {

          accYear.push(grade.AcademicYear.academicYear)

          formAndAcademicYears.push({
            form: grade.form,
            academicYear: grade.AcademicYear.academicYear
          })

          terms.push(grade.AcademicYear.term)
          forms.push(grade.form)
          subjects.push(grade.Subject)
        })
      }
    }

    return { subjects, formAndAcademicYears, accYear, terms, forms, grades: grades.grades }
  }

  const formAndAcademicYears = (formsAc) => {

    let academicYearsSorted = [...formsAc.reduce((map, obj) => map.set(obj.academicYear, obj), new Map()).values()]
    return academicYearsSorted
  }

  const terms = (data) => {

    let term = [...new Set(data.terms)]

    return term
  }

  const forms = (data) => {

    let allForms = [...new Set(data.forms)]

    return allForms
  }

  const allSubjects = (data) => {
    let sub = []
    data && data.subjects.map(subj => {
      sub.push(subj.code)
    })

    let subjects = [...new Set(sub)]

    return subjects
  }
  return (
    <div className="bg-gray-50">
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Academic Years</h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <Link
              href="/portal/exams"
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
            {formAndAcademicYears(getGrades(props.grades).formAndAcademicYears).reverse().map((result, key) => (
              <Disclosure as="div" key={key} className="pt-2">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{result.academicYear}</span>
                        <div className="flex ">
                          <span className="ml-6 flex h-7">
                            Form {result.form}
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
                      <PreviousResultsReportTemplate formAndAcademicYears={formAndAcademicYears(getGrades(props.grades).formAndAcademicYears)} grades={getGrades(props.grades).grades} forms={forms(getGrades(props.grades))} subjects={allSubjects(getGrades(props.grades))} academicYear={result.academicYear} academicYears={props.academicYears} terms={terms(getGrades(props.grades))} />
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
