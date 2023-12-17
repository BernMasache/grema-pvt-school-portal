import React from "react";
import Router, { withRouter } from "next/router";
import StudentLayout from "../../../components/layouts/student.portal.layout";
import { Disclosure, Tab } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cookies from "js-cookie";
import UpdatePassword from "../../../components/widgets/settings/settings";
import useStudentStore from "../../../services/store/students.store";
import useCrypto from "../../../services/cryptoJs";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// // inctances
const studentStore = new useStudentStore();
const crypto = new useCrypto();
// const academicYearsStore = new AcademicYearService();
//PAGE
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      students: [],
      studentInForm: [],
      studentsDefaultPasswords: [],
      subjects: [],
      subjectsByFormPresent: [],
      academicYears: [],
      breadcrumbPages: [
        {
          href: "/",
          name: "Home",
        },
      ],
      tabs: [{ name: "General" }, { name: "Security" }],
    };
  }

  componentDidMount() {
    this.getUser();
  }

  createNotification = (type, message) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success("Success message", message, 2000);
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", message, 5000, () => {
            alert("callback");
          });
          break;
      }
    };
  };
  getUser = () => {
    let user = Cookies.get("PUSER");
    let decryptedUser = crypto.decrypt(user);

    return JSON.parse(decryptedUser);
  };

  // resetStudentPassword = (data) => {
  //   data.id = this.getUser().uuid;
  //   studentStore
  //     .updatePassword(data)
  //     .then((result) => {
  //       toast(result.data.message);
  //       if (result.data.message == "password updated") {
  //         this.notify(result.data.message);
  //       } else {
  //         this.notify(result.data.message);
  //       }
  //     })
  //     .catch((e) => {})
  //     .finally(() => {});
  // };

  render() {
    return (
      <>
        {/* <LoadingWidget loading={this.state.loading} /> */}
        <div className="max-w-2xl mx-auto px-2 sm:px-6 lg:max-w-5xl lg:px-2">
          <div className="align-middle inline-block min-w-full min-h-full mt-5">
            <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white sm:p-5">
              <Tab.Group>
                <div className="border-b border-gray-200 bg-white">
                  <Tab.List>
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                      {this.state.tabs.map((tab) => (
                        <Tab
                          key={tab.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-primary-500 text-primary-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                              "group inline-flex items-center py-4 px-1 border-b-2 focus:outline-none"
                            )
                          }
                        >
                          <span className="capitalize  font-medium text-sm">
                            {tab.name}
                          </span>
                        </Tab>
                      ))}
                    </nav>
                  </Tab.List>
                </div>
                <Tab.Panels>
                  <Tab.Panel>
                    <div className="">
                      <div className="grid grid-cols-1 md:grid-cols21 lg:grid-cols-2 space-x-4 p-2"></div>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-x-4 p-2">
                      <div className="">
                        <div className="p-2 mt-8 mb-4">
                          Warning. This operation cannot be undone.
                        </div>
                        <UpdatePassword
                          studentId={this.getUser}
                          // resetStudentPassword={this.resetStudentPassword}
                        />
                      </div>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
          <ToastContainer />
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
