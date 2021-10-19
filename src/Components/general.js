import React from "react";
import ReactDOM from "react-dom";

 export class General extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ' ',
                      email:' ',
                      number:' ',
                      formToggle:true,
                      contentToggle:false  
                    };
        this.handleNameChange = this.handleNameChange.bind(this) 
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)        
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
        })
    }

    render () {
        if (this.state.formToggle == true) {
            return (
                <div>
                    <h1>CV Applicattion</h1>
                    
                    <form onSubmit={this.handleSubmit}>
                    <h2>General Info</h2>
                        <label>
                            Name:
                            <input type="text" name="name" onChange={this.handleNameChange} />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" onChange={this.handleEmailChange}/>
                        </label>
                        <label>
                            Phone Number:
                            <input type="number" name="number" />
                        </label>
                        <input type="submit" value="Submit" />
                    <h2>Educational Experience</h2>
                        <label>
                            School Name:
                            <input type="text" name="school-name"></input>
                        </label>
                        <label>
                            Title of Study:
                            <input type="text" name="title"></input>
                        </label>
                        <label>
                            Date of Study:
                            <input type="text" name="date-of-study"></input>
                        </label>
                        <input type="submit" value="Submit" />
                        <h2>Practical Experience</h2>
                        <label>
                            Company Name:
                            <input type="text" name="company"></input>
                        </label>
                        <label>
                            Position Title:
                            <input type="text" name="position-title"></input>
                        </label>
                        <label>
                            Date Started:
                            <input type="number" name="date-started"></input>
                        </label>
                        <label>
                            Date Ended:
                            <input type="number" name="date-started"></input>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )
        } else if (this.state.contentToggle == true) {
            return(
                <div>
                    <h1>{this.state.name}</h1>
                    <h1>{this.state.email}</h1>
                    <h1>{this.state.number}</h1>
                    <input type="submit"value="Edit" />
                </div>
            )
        }
  
    }
}

ReactDOM.render(<General />, document.getElementById('root'))