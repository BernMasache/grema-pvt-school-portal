import React from "react";
import Router, { withRouter } from "next/router";
import Layout from "../../../components/layouts/mainLayout";
import ProfilePage from "../../../components/widgets/profile";
import StudentLayout from "../../../components/layouts/student.portal.layout";
//STORES , COMPONETS AND FROMS
import cookie from "js-cookie";
import useCrypto from "../../../services/cryptoJs";
const crypto = new useCrypto();

//INITIALISE

//PAGE
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      student: {},
      roles: [],
    };
  }
  componentDidMount() {
    this.getStudent();
  }

  getStudent = () => {
    let stu = JSON.parse(crypto.decrypt(cookie.get("PUSER")));

    if (stu == null) {
      cookie.remove("PTOKEN");
      cookie.remove("PUSER");
      Router.push("/signin");
    } else {
      this.setState({
        student: stu,
      });
      return stu;
    }
  };

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
              <h1 className="sr-only text-3xl font-extrabold text-gray-900 capitalize">
                Student
              </h1>
            </div>
            <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
              {
                [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ][new Date().getMonth()]
              }
              ,{new Date().getDate()}
              {/* <CreateUserForm
                roles={this.state.roles}
                create={this.createUser}
                key={componentKey("create-users")} /> */}
            </div>
          </div>
          <div
            className="align-middle inline-block min-w-full min-h-full mt-5"
            style={{ height: "60vh", minHeight: "200px", width: "100%" }}
          >
            <ProfilePage student={this.state.student} />
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
export default PageWithRouter;
