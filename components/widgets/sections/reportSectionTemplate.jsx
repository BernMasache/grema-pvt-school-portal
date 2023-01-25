import Link from 'next/link'
import { useState } from 'react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PreviousResultsReportTemplate(props) {

  const getSubjects = (subj) => {
    return subj.length > 0 ? subj : []
  }
  const getTerms = (terms) => {
    return terms.length > 0 ? terms : []
  }
  const getForms = (forms) => {
    return forms.length > 0 ? forms : []
  }
  const getGrades = (grades) => {
    let gradesHolder = []

    grades.map(grade => {
      gradesHolder.push({
        code: grade.Subject.code,
        value: grade.value,
        term: grade.term,
        form: grade.form,
        year: grade.AcademicYear.academicYear
      })
    })

    return gradesHolder
  }
  const getAcademicYear = (year) => {
    return year == undefined ? "" : year
  }

  const gradeColor = (grade) => {

    if (grade <= 60) {
      return "red"
    } else {
      return "green"
    }
  }
  return (
    <div className="bg-gray-50">
      <div className="mt-6 flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-t border-gray-200">

              <table className="min-w-full divide-y divide-gray-200">

                <tbody className="divide-y divide-gray-200 bg-white">
                  {

                    getTerms(props.terms.sort()).map((term, key) => {
                      return <tr key={key}>
                        <td className="whitespace-nowrap px-2 py-4 text-sm font-medium text-gray-600">
                          <span className='text-sky-600'>Term ( {term} )</span> 
                        </td>
                        <td className="whitespace-nowrap px-2 py-4 text-sm font-medium text-gray-500">
                          <span>Points ( {term} )</span>
                        </td>
                        <td className="whitespace-nowrap px-2 py-4 text-sm font-medium text-gray-500">
                          <span>Remarks ( {term} )</span>
                        </td>
                        {

                          getSubjects(props.subjects.sort()).map((subj, keys) => {

                            return getGrades(props.grades).map((grade, key) => {

                              return grade.term == term && grade.year == getAcademicYear(props.academicYear) && grade.code == subj ? <td key={key} className="whitespace-nowrap py-4 text-sm font-medium"><span className='text-sky-600'>{subj.toUpperCase()}</span><span className={`text-${gradeColor(grade.value)}-600`}> ( {grade.value} )</span></td> : ""
                            })
                          })
                        }
                      </tr>
                    })
                  }

                </tbody>
              </table>

            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
