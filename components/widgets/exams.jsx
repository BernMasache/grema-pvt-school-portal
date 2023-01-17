import Link from "next/link"
import { useState } from "react"
import SchoolReportTemplate from "./report"
import SchoolReport from "./schoolReport"
import SchoolReportFrame from "./schoolReport"

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

const ResultsTemplate = (props) => {

    const calculateGradesTotal = (grades) => {
        let total = 0
        grades.length > 0 ? grades.map(dd => {
            total += dd.value
        }) : null
        return total
    }


    const pointValue = (grade) => {
        if (grade >= 85 && grade <= 100) {
            return 1
        } else if (grade >= 80 && grade <= 84) {
            return 2
        } else if (grade >= 75 && grade <= 79) {
            return 3
        } else if (grade >= 70 && grade <= 74) {
            return 4
        } else if (grade >= 60 && grade <= 69) {
            return 5
        } else if (grade >= 55 && grade <= 59) {
            return 6
        } else if (grade >= 50 && grade <= 54) {
            return 7
        } else if (grade >= 40 && grade <= 49) {
            return 8
        } else if (grade >= 0 && grade <= 39) {
            return 9
        } else {
            return 9
        }
    }


    const passRemark = (grades) => {
        let count = 0
        let passfail = ""
        let contain = []
        grades.length > 0 ? grades.map(dd => {
            contain.push({
                code: dd.Subject.code,
                name: dd.Subject.name,
                value: dd.value,
            })
        }) : null

        contain.map(grade => {
            if (grade.value >= 40) {
                count += 1
            }
        })

        let english = 0
        contain.map(grade => {
            if (grade.code == "eng") {
                english = grade.value
            }
        })

        if (count >= 6 && english >= 40) {
            passfail = "Pass"
        } else {
            passfail = "Fail"
        }

        return passfail
    }

    const points = (grades) => {
        let total = 0
        let contain = []
        grades.length > 0 ? grades.map(dd => {
            contain.push(dd.value,)
        }) : null

        contain.sort().reverse().slice(0, 6).map(grade => {

            total += pointValue(grade)
        })

        return total
    }

    const gradeList = (grades) => {
        let contain = []
        grades.length > 0 ? grades.map(dd => {
            contain.push({
                value: dd.value,
                name: dd.Subject.name
            })
        }) : null

        return contain

    }

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
                                                        {points(props.grades)}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                        {passRemark(props.grades)}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                                        {/* <a href={payment.href} className="text-orange-600 hover:text-orange-900"> */}
                                                        <button>
                                                            <Link href={"/portal/exams/report"} className="text-green-500">
                                                                View previous
                                                            </Link>
                                                        </button>
                                                        {/* <SchoolReportFrame pointValueSet={pointValue} grades={gradeList(props.grades)} totaGrades={calculateGradesTotal(props.grades)} points={points(props.grades)} passRemark={passRemark(props.grades)} /> */}
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

            <section className="mt-8">
                <SchoolReport pointValueSet={pointValue} grades={gradeList(props.grades)} totaGrades={calculateGradesTotal(props.grades)} points={points(props.grades)} passRemark={passRemark(props.grades)}/>
            </section>
          
        </div >
    )
}
export default ResultsTemplate