import React from "react";
import ReactDOM from "react-dom";
import '../scss/general.scss';

 export class General extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ' ',
                      email:' ',
                      number:' ',
                      formToggle:true,
                      contentToggle:false,
                      schoolName:' ',
                      studyTitle:' ',
                      dateOfStudy:' ',
                      company:' ',
                      positionTitle:' ',
                      dateStarted:' ',
                      dateEnded:' '
                    };
        this.handleNameChange = this.handleNameChange.bind(this) 
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this)
        this.handleStudyTitleChange = this.handleStudyTitleChange.bind(this)
        this.handleDateOfStudyChange = this.handleDateOfStudyChange.bind(this)
        this.handleCompanyChange = this.handleCompanyChange.bind(this)
        this.handlePositionTitleChange = this.handlePositionTitleChange.bind(this)
        this.handleDateStartedChange = this.handleDateStartedChange.bind(this)
        this.handleDateEndedChange = this.handleDateEndedChange.bind(this)
    }; 

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    };

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    };

    handlePhoneChange(event) {
        this.setState({
            number:event.target.value
        });
    }

    handleSchoolNameChange(event) {
        this.setState({
            schoolName:event.target.value
        });
    }
    
    handleStudyTitleChange(event) {
        this.setState({
            studyTitle:event.target.value
        });
    }

    handleDateOfStudyChange(event) {
        this.setState({
            dateOfStudy:event.target.value
        });
    }

    handleCompanyChange(event) {
        this.setState({
            company:event.target.value
        });
    }

    handlePositionTitleChange(event) {
        this.setState({
            positionTitle:event.target.value
        });
    }

    handleDateStartedChange(event) {
        this.setState({
            dateStarted:event.target.value
        })
    }

    handleDateEndedChange(event) {
        this.setState({
            dateEnded:event.target.value
        })
    }

    handleSubmit(event) {
        this.setState({
            formToggle:false,
            contentToggle:true
        })
       console.log(this.state)
        event.preventDefault();
    }

    handleEdit() {
        this.setState({
            formToggle:true,
            contentToggle:false
        });
    }

    render () {
        if (this.state.formToggle == true) {
            return (
                <div>
                    <h1>CV Applicattion</h1>
                    
                    <form onSubmit={this.handleSubmit} className="form">
                    <h2>General Info</h2>
                        <label className="form-label">
                            Name:
                            <input type="text" name="name" onChange={this.handleNameChange} defaultValue={this.state.name} />
                        </label>
                        <label className="form-label">
                            Email:
                            <input type="email" name="email" onChange={this.handleEmailChange} defaultValue={this.state.email}/>
                        </label>
                        <label className="form-label">
                            Phone Number:
                            <input type="number" name="number" onChange={this.handlePhoneChange} defaultValue={this.state.number} />
                        </label>
                    <h2>Educational Experience</h2>
                        <label className="form-label">
                            School Name:
                            <input type="text" name="schoolName" onChange={this.handleSchoolNameChange} defaultValue={this.state.schoolName}/>
                        </label>
                        <label className="form-label">
                            Title of Study:
                            <input type="text" name="studyTitle" onChange={this.handleStudyTitleChange} defaultValue={this.state.studyTitle} />
                        </label>
                        <label className="form-label">
                            Date of Study:
                            <input type="text" name="dateOfStudy" onChange={this.handleDateOfStudyChange} defaultValue={this.state.dateOfStudy} />
                        </label>
                        <h2>Practical Experience</h2>
                        <label className="form-label">
                            Company Name:
                            <input type="text" name="company" onChange={this.handleCompanyChange} defaultValue={this.state.company} />
                        </label>
                        <label className="form-label">
                            Position Title:
                            <input type="text" name="positionTitle" onChange={this.handlePositionTitleChange} defaultValue={this.state.positionTitle} />
                        </label>
                        <label className="form-label">
                            Date Started:
                            <input type="number" name="dateStarted" onChange={this.handleDateStartedChange} defaultValue={this.state.dateStarted} />
                        </label>
                        <label className="form-label">
                            Date Ended:
                            <input type="number" name="dateEnded" onChange={this.handleDateEndedChange} defaultValue={this.state.dateEnded} />
                        </label>
                        <input type="submit" value="Submit" className="submit-btn" />
                    </form>
                </div>
            )
        } else if (this.state.contentToggle == true) {
            return(
                <div>
                    <h1>{this.state.name}</h1>
                    <h1>{this.state.email}</h1>
                    <h1>{this.state.number}</h1>
                    <h1>{this.state.schoolName}</h1>
                    <h1>{this.state.studyTitle}</h1>
                    <h1>{this.state.dateOfStudy}</h1>
                    <h1>{this.state.company}</h1>
                    <h1>{this.state.positionTitle}</h1>
                    <h1>{this.state.dateStarted}</h1>
                    <h1>{this.state.dateEnded}</h1>
                    <input type="submit"value="Edit" onClick={this.handleEdit} />
                </div>
            )
        }
  
    }
}

ReactDOM.render(<General />, document.getElementById('root'))