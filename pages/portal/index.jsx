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
import useAcademicYearsStore from "../../services/store/academicYears.store";
import Cookies from "js-cookie";
import PortalPage from "../../components/widgets/portal";
const crypto = new useCrypto()
const academicYearsStore = new useAcademicYearsStore()
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
    this.getCurrentAcademicYear()
  }
  getCurrentAcademicYear = () => {
    return academicYearsStore.getCurrentAcademicYear().then(data => {
      if (data.length>0) {
        Cookies.set("CAY",JSON.stringify(data[0]))
      }else{
        Cookies.set("CAY",JSON.stringify({}))

      }
    })
  }

  render() {
    return (
      <>
     
            <PortalPage/>

      </>
    );
  }
}

const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <StudentLayout>{page}</StudentLayout>;
};
export default PageWithRouter;