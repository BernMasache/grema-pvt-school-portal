import React from 'react';
import ResultsTemplate from '../../components/widgets/exams';
import useGradesStore from '../../services/store/grades.store';

const gradesStore = new useGradesStore()

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            grades: [],
            allGrades:[]
        };
    }
    componentDidMount() {
        this.studentGradesList()
        this.studentsGradesList()

    }


    studentGradesList = () => {
        gradesStore.get("BA121",1,1,"2022-2023").then(data => {
            this.setState({
                grades: data
            })
        })
    }

    studentsGradesList = () => {
        gradesStore.allGrades(1,1,"2022-2023").then(data => {
            this.setState({
                allGrades: data
            })
        })
    }
    render() {
        return (
            <div>
                <ResultsTemplate  grades={this.state.grades} allGrades={this.state.allGrades}/>
            </div>
        );
    }
}

export default Index;