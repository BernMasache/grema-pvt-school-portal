import Link from 'next/link'
import { useState } from 'react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PreviousResultsReportTemplate(props) {

  const getSubjects = (subj) => {
    return subj?.length > 0 ? subj : []
  }
  const getTerms = (terms) => {
    return terms?.length > 0 ? terms : []
  }
  const getForms = (forms) => {
    return forms?.length > 0 ? forms : []
  }
  const getGrades = (grades) => {
    let gradesHolder = []

    grades.map(grade => {
      gradesHolder.push({
        code: grade?.Subject.code,
        value: grade?.value,
        term: grade?.term,
        form: grade?.form,
        year: grade?.AcademicYear?.academicYear
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


  const passRemark = (grades, academicYear, term) => {
    let count = 0
    let passfail = ""
    let contain = []
    if (grades == undefined) {

    } else {

      grades?.length > 0 ? grades.map(dd => {

        if (dd?.AcademicYear?.academicYear == academicYear && dd?.AcademicYear?.term == term) {
          contain.push({
            code: dd?.Subject?.code,
            name: dd?.Subject?.name,
            value: dd?.value,
          })
        }

      }) : null
      contain?.map(grade => {
        if (grade?.value >= 40) {
          count += 1
        }
      })

      let english = 0
      contain?.map(grade => {
        if (grade?.code == "eng") {
          english = grade?.value
        }
      })

      if (count >= 6 && english >= 40) {
        passfail = "Pass"
      } else if (count > 0 && count < 6) {
        passfail = "Fail"
      } else {
        passfail = "N/A"
      }


    }

    // console.log(contain);
    return passfail
  }


  const pointValue = (grade) => {

    if (grade >= 90 && grade <= 100) {
      return 1
    } else if (grade >= 80 && grade <= 89) {
      return 2
    } else if (grade >= 70 && grade <= 79) {
      return 3
    } else if (grade >= 65 && grade <= 69) {
      return 4
    } else if (grade >= 60 && grade <= 64) {
      return 5
    } else if (grade >= 55 && grade <= 59) {
      return 6
    } else if (grade >= 46 && grade <= 54) {
      return 7
    } else if (grade >= 40 && grade <= 45) {
      return 8
    } else if (grade >= 0 && grade <= 39) {
      return 9
    } else {
      return 9
    }
  }


  const gradeLetter = (grade) => {
    if (grade >= 80 && grade <= 100) {
      return "A"
    } else if (grade >= 70 && grade <= 79) {
      return "B"
    } else if (grade >= 55 && grade <= 69) {
      return "C"
    } else if (grade >= 40 && grade <= 54) {
      return "D"
    } else if (grade >= 0 && grade <= 39) {
      return "F"
    } else {
      return "F"
    }
  }

  const points = (grades, academicYear, term) => {
    let total = 0
    let contain = []
    if (grades == undefined) {

    } else {

      if (grades == undefined) {

      } else {

        grades?.length > 0 ? grades?.map(dd => {

          if (dd?.AcademicYear?.academicYear == academicYear && dd?.AcademicYear?.term == term) {
            contain?.push(dd?.value,)
          }
        }) : null

        contain?.sort().reverse().slice(0, 6)?.map(grade => {
          total += pointValue(grade)
        })
      }
    }
    return total
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

                    getTerms(props?.terms?.sort())?.map((term, key) => {
                      if (passRemark(props?.grades, props.academicYear, term)=="N/A"){

                      }else{
                        return <tr key={key}>
                        <td className="whitespace-nowrap px-2 py-4 text-sm font-medium text-gray-600">
                          <span className='text-sky-600'>Term ( {term} )</span>
                        </td>
                        <td className="whitespace-nowrap px-2 py-4 text-sm font-medium text-gray-500">
                          <span>Points ( {points(props.grades, props.academicYear, term)} )</span>
                        </td>
                        <td className="whitespace-nowrap px-2 py-4 text-sm font-medium text-gray-500">
                          <span>Remarks ( {passRemark(props.grades, props.academicYear, term)} )</span>
                        </td>

                        {

                          getSubjects(props.subjects.sort()).map((subj, keys) => {

                            return getGrades(props.grades).map((grade, key) => {

                              return grade.term == term && grade.year == getAcademicYear(props.academicYear) && grade.code == subj ? <td key={key} className="whitespace-nowrap py-4 text-sm font-medium p-1"><span className='text-sky-600'>{subj.toUpperCase()}</span><span className={`text-${gradeColor(grade.value)}-600`}> ( {grade.value} )</span></td> : ""
                            })
                          })
                        }
                      </tr>
                      }
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
