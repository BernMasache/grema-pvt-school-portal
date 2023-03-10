
import React from "react";
import Router, { withRouter } from "next/router";
import StudentLayout from "../../../../components/layouts/student.portal.layout";
import useStudentStore from "../../../../services/store/students.store";
import PreviousResults from "../../../../components/widgets/previousExams";
import useGradesStore from "../../../../services/store/grades.store";
import useAcademicYearsStore from "../../../../services/store/academicYears.store";
//STORES , COMPONETS AND FROMS 


//INITIALISE
const gradesStore = new useGradesStore()
const academicYearStore = new useAcademicYearsStore()
//PAGE
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      allGrades: [],
      academicYears: []
    };
  }

  componentDidMount() {
    this.getAllgrades()
    this.getAllAcademicYearsReleaseTrue()
  }

  getAllgrades = () => {

    gradesStore.allGrades().then(grades => {
      
      if (grades == "Session expired") {
        Router.push("/signin")
      }
      return this.setState({
        allGrades: grades
      })
    })
  }
  getAllAcademicYearsReleaseTrue = () => {

    academicYearStore.getAllAcademicYearsReleaseTrue().then(academicYears => {
      if (academicYears == "Session expired") {
        Router.push("/signin")
      }
      return this.setState({
        academicYears: academicYears
      })
    })
  }

  render() {
    return (
      <>
        {/* <LoadingWidget loading={this.state.loading} /> */}
        <div className="max-w-2xl mx-auto px-2 sm:px-6 lg:max-w-7xl lg:px-2">
          <div>
            {/* <BreadcrumbWidget breadcrumbs={this.state.breadcrumbPages} /> */}
          </div>
          <div className=" py-2  md:flex md:items-center md:justify-between">
            <div className="px-4 sm:px-6 md:px-0">
              <h1 className="text-3xl font-extrabold text-gray-900 capitalize">Previous results</h1>
            </div>
            <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">


            </div>
          </div>
          <div className="align-middle inline-block min-w-full min-h-full mt-5" style={{ height: '60vh', minHeight: '200px', width: '100%' }}>

            <PreviousResults academicYears={this.state.academicYears} grades={this.state.allGrades} />
          </div>
        </div>
      </>
    );
  }
}

const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <StudentLayout>{page}</StudentLayout>;
};
export default PageWithRouter