import React from "react";
import ReactDOM from "react-dom";

 export class General extends React.Component {
    render () {
        return (
            <div>
                <h1>CV Applicattion</h1>
                
                <form>
                <h2>General Info</h2>
                    <label>
                        Name:
                        <input type="text" name="name"></input>
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email"></input>
                    </label>
                    <label>
                        Phone Number:
                        <input type="number" name="number"></input>
                    </label>
                <h2>Educational Experience</h2>
                    <label>
                        School Name:
                        <input type="text" name="name"></input>
                    </label>
                    <label>
                        Name:
                        <input type="text" name="name"></input>
                    </label>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<General />, document.getElementById('root'))