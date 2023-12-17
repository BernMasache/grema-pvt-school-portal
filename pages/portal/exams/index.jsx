import cookie from "js-cookie";
import React from "react";
import Router, { withRouter } from "next/router";
import StudentLayout from "../../../components/layouts/student.portal.layout";
import ResultsTemplate from "../../../components/widgets/exams";
import useGradesStore from "../../../services/store/grades.store";
import useCrypto from "../../../services/cryptoJs";
import useAcademicYearsStore from "../../../services/store/academicYears.store";
import useStudentStore from "../../../services/store/students.store";
//STORES , COMPONENTS AND FORMS

//INITIALISE
const gradesStore = new useGradesStore();
const academicYearsStore = new useAcademicYearsStore();
const studentStore = new useStudentStore();
const crypto = new useCrypto();
//PAGE
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      grades: [],
      allGrades: [],
      academicYears: [],
      currentAcademicYear: [],
      studentsGradesPerTermFormAcademicYear: [],
      roles: [],
      student: {},
    };
  }

  componentDidMount() {
    this.allAcademicYears();
    this.getCurrentAcademicYear();
    this.getStudent();
    this.studentGrades();
    this.studentDistinctData();
    this.studentsGradesPerTermFormAcademicYear();
  }

  allAcademicYears = () => {
    return academicYearsStore.getAllAcademicYearsReleaseTrue().then((data) => {
      return this.setState({
        academicYears: data.academicYears,
      });
    });
  };

  getCurrentAcademicYear = () => {
    return this.setState({
      currentAcademicYear:
        cookie.get("PCAY") == undefined ? {} : JSON.parse(cookie.get("PCAY")),
    });
  };

  getStudent = () => {
    let stu = JSON.parse(crypto.decrypt(cookie.get("PUSER")));
    return this.setState({
      student: stu,
    });
  };

  studentGrades = () => {
    return gradesStore.allGrades().then((grad) => {
      // console.log(grad);
      return this.setState({
        grades: grad,
      });
    });
  };
  
  studentsGradesPerTermFormAcademicYear = () => {
    return gradesStore
      .studentsGradesPerTermFormAcademicYear({
        term:
          cookie.get("PCAY") &&
          JSON.parse(cookie.get("PCAY"))?.AcademicYear?.term,
        form: this.state.student?.currentForm,
        year:
          cookie.get("PCAY") &&
          JSON.parse(cookie.get("PCAY"))?.AcademicYear?.academicYear,
      })
      .then((grad) => {
        return this.setState({
          studentsGradesPerTermFormAcademicYear: grad,
        });
      });
  };

  studentDistinctData = () => {
    return studentStore
      .distinctData(JSON.parse(cookie.get("PCAY"))?.AcademicYear?.term)
      .then((grad) => {
        // console.log(grad);
        // return this.setState({
        //   grades: grad,
        // });
      });
  };

  render() {
    return (
      <>
        <div className="max-w-2xl mx-auto px-2 sm:px-6 lg:max-w-5xl lg:px-2">
          <div></div>
          <div className=" py-2  md:flex md:items-center md:justify-between">
            <div className="px-4 sm:px-6 md:px-0">
              <h1 className="text-3xl font-extrabold text-gray-900 capitalize">
                exams
              </h1>
            </div>
            <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4"></div>
          </div>
          <div
            className="align-middle inline-block min-w-full min-h-full mt-5"
            style={{ height: "60vh", minHeight: "200px", width: "100%" }}
          >
            <ResultsTemplate
              grades={this.state?.grades}
              academicYears={this.state?.academicYears}
              student={this.state?.student}
              currentAcademicYear={this.state?.currentAcademicYear}
              studentsGradesPerTermFormAcademicYear={
                this.state?.studentsGradesPerTermFormAcademicYear
              }
            />
          </div>
        </div>
      </>
    );
  }
}

/***/
const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <StudentLayout>{page}</StudentLayout>;
};
export default PageWithRouter;
