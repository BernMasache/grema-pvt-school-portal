import { Router } from 'next/router';
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
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                <dd className="mt-1 text-sm text-gray-900">{this.props!=null? this.props.student.username: Router.push("/signin")}</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Class</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    {this.props.student!=null? this.props.student.currentForm: Router.push("/signin")}
                                </dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Sex</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    {this.props.student!=null? this.props.student.sex: Router.push("/signin")}
                                </dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Contact</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    {this.props.student!=null? this.props.student.phone: Router.push("/signin")}
                                </dd>
                            </div>
                            <div className="sm:col-span-2">
                                <dt className="text-sm font-medium text-gray-500">More Details</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    You Enrolled in form {this.props.student!=null? this.props.student.formEnrolled: Router.push("/signin")} and {this.props.student.status} you are in form {this.props.student.currentForm}
                                </dd>
                            </div>

                        </dl>
                    </div>

                }
            </div>
        )
    }
}

export default ProfilePage

