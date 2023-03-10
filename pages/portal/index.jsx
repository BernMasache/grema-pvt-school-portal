import React from "react";
import Router, { withRouter } from "next/router";
// import { withTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from "../../components/layouts/mainLayout";
import StudentLayout from "../../components/layouts/student.portal.layout";
//STORES , COMPONETS AND FROMS 
// import BreadcrumbWidget from "../../components/widgets/breadcrumbs/admin.widget";
// import LoadingWidget from "../../components/widgets/loading.widget"
//INITIALISE
import cookie from "js-cookie";

import useCrypto from "../../services/cryptoJs";
const crypto = new useCrypto()
//PAGE
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      breadcrumbPages: [
        {
          href: "#",
          name: "Home"
        },
      ],
    };
  }
  componentDidMount() {
    // let stu = JSON.parse(crypto.decrypt(cookie.get("USER")))
    // stu==null?Router.push("/signin"):""
    // cookie.remove("TOKEN")
    // cookie.remove("USER")

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
              <h1 className="text-3xl font-extrabold text-gray-900 capitalize">Profile</h1>
            </div>
            <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
            </div>
          </div>
          <div className="align-middle inline-block min-w-full min-h-full mt-5">
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