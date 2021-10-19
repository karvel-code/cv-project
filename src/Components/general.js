import React from "react";
import ReactDOM from "react-dom";

 export class General extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ' ',
                      email:' ',
                      number:' '  
                    };
        this.handleNameChange = this.handleNameChange.bind(this)            
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

    render () {
        return (
            <div>
                <h1>CV Applicattion</h1>
                
                <form>
                <h2>General Info</h2>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={this.handleNameChange}></input>
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" onChange={this.handleEmailChange}></input>
                    </label>
                    <label>
                        Phone Number:
                        <input type="number" name="number"></input>
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

                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

ReactDOM.render(<General />, document.getElementById('root'))