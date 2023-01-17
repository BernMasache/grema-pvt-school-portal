
import React from "react";
import { withRouter } from "next/router";
import StudentLayout from "../../../../components/layouts/student.portal.layout";
import useStudentStore from "../../../../services/store/students.store";

//STORES , COMPONETS AND FROMS 


//INITIALISE
const studentStore = new useStudentStore()
//PAGE
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
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
              <h1 className="text-3xl font-extrabold text-gray-900 capitalize">Previous results</h1>
            </div>
            <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
              Tab 1

            </div>
          </div>
          <div className="align-middle inline-block min-w-full min-h-full mt-5" style={{ height: '60vh', minHeight: '200px', width: '100%' }}>


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