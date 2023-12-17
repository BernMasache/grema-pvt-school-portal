import Cookies from "js-cookie";

export default function PortalPage(props) {
  const currentAcademicYear = () => {

    let dd = Cookies.get("PCAY");
    // console.log(dd);
    // return JSON.parse(Cookies.get("PCAY"));
    // return dd
  };
  currentAcademicYear();
  return (
    <div className="overflow-hidden bg-white py-4">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-4 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-4">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Welcome to XamPortal
            </h2>
            <div className="mt-6 text-xl leading-8 text-gray-600">
              End of term {props?.currentAcademicYear?.AcademicYear?.term} examinations{" "}
              {props?.currentAcademicYear?.AcademicYear?.release == true ? (
                <>
                  are out.
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Please check your exams tab.
                  </p>
                </>
              ) : (
                <>
                  are not out.
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Please check later.
                  </p>
                </>
              )}
              
            </div>

            <div className="mt-10 flex">
              <a
                href="#"
                className="rounded-md bg-sky-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Read more of us <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="./assets/xamportal.jpg"
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
