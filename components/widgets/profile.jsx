import React, { useEffect, useState } from 'react'
import useStudentStore from '../../services/store/students.store'
const studentStore = new useStudentStore()
class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            students: []
        };
    }
    componentDidMount() {
        this.studentsList()
    }


    studentsList = () => {
        studentStore.get("BG097").then(data => {
            this.setState({
                students: data
            })

        })

    }

    render() {
        let { students } = this.state
       
        return (
            <div className="overflow-hidden bg-white shadow sm:rounded-lg" >
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Student Profile</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details.</p>
                </div>
                {
                    students.map((student, key) => {
                        return <div key={key} className="border-t border-gray-200 px-4 py-5 sm:px-6">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{student.name}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Class</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{student.current_form}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Sex</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{student.sex}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Contact</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{student.phone}</dd>
                                </div>
                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-medium text-gray-500">More Details</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                       You Enrolled in {student.year_enrolled} and currently {student.status}
                                    </dd>
                                </div>

                            </dl>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default ProfilePage

