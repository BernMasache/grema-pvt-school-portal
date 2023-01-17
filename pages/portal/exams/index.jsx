// import React from 'react';
// import ResultsTemplate from '../../components/widgets/exams';
// import useGradesStore from '../../services/store/grades.store';

// const gradesStore = new useGradesStore()

// class Index extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             open: false,
//             grades: [],
//             allGrades:[]
//         };
//     }
//     componentDidMount() {
//         this.studentGradesList()
//         this.studentsGradesList()

//     }



//     studentsGradesList = () => {
//         gradesStore.allGrades(1,1,"2022-2023").then(data => {
//             this.setState({
//                 allGrades: data
//             })
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <ResultsTemplate  grades={this.state.grades} allGrades={this.state.allGrades}/>
//             </div>
//         );
//     }
// }

// export default Index;

import React from "react";
import { withRouter } from "next/router";
import Layout from "../../../components/layouts/mainLayout";
import ProfilePage from "../../../components/widgets/profile"
import StudentLayout from "../../../components/layouts/student.portal.layout";
import useStudentStore from "../../../services/store/students.store";
//STORES , COMPONETS AND FROMS 


//INITIALISE
const studentStore = new useStudentStore()
//PAGE
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      //   breadcrumbPages: [
      //     {
      //       href: "/admin",
      //       name: this.props.t('navigation.home', { ns: 'common' })
      //     },
      //     {
      //       href: "#",
      //       name: this.props.t('pages.users', { ns: 'common' })
      //     },
      //   ],
      grades: [],
      allGrades: [],
      roles: [],
    };

  }
  componentDidMount() {
this.studentGrades()
  }
  studentGrades = () => {
    let body = {
      term:1,
      form:2,
      year:"2022-2023"
    }
    studentStore.getGrades(body).then(data => {
        this.setState({
            grades: data
        })
        console.log(data);
    })
}
  render() {
    return (
      <>
        {/* <LoadingWidget loading={this.state.loading} /> */}
        <div className="max-w-2xl mx-auto px-2 sm:px-6 lg:max-w-5xl lg:px-2">
          <div>
            {/* <BreadcrumbWidget breadcrumbs={this.state.breadcrumbPages} /> */}
          </div>
          <div className=" py-2  md:flex md:items-center md:justify-between">
            <div className="px-4 sm:px-6 md:px-0">
              <h1 className="text-3xl font-extrabold text-gray-900 capitalize">exams</h1>
            </div>
            <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
              Tab 1
              {/* <CreateUserForm
                roles={this.state.roles}
                create={this.createUser}
                key={componentKey("create-users")} /> */}
            </div>
          </div>
          <div className="align-middle inline-block min-w-full min-h-full mt-5" style={{ height: '60vh', minHeight: '200px', width: '100%' }}>

            {/* <ProfilePage/> */}
          </div>
        </div>
      </>
    );
  }
}
/*other supporting functions*/
export async function getStaticProps({ locale }) {
  return {
    props: {
      // ...(await serverSideTranslations(locale, ['users', 'common'])),
      // Will be passed to the page component as props
    },
  };
}
/***/
const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <StudentLayout>{page}</StudentLayout>;
};
export default PageWithRouter