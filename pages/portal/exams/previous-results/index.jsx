import React from 'react';
import StudentLayout from '../../../../components/layouts/student.portal.layout';
import PreviousResults from '../../../../components/widgets/previousExams';

function index(props) {
    return (
        <div>
            {/* <PreviousResults/> */}
        </div>
    );
}
const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <StudentLayout>{page}</StudentLayout>;
};
export default PageWithRouter