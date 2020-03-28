import React from "react";
import Persons from "./person";
import Pictures from "./picture";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    setInterval(() => this.repeat(), 1000);
  }

  repeat() {
    fetch("https://randomuser.me/api/?results=1")
      .then(results => {
        console.log(results);
        return results.json();
      })
      .then(data => {
        console.log(data.results);
        let pictures = data.results.map(person => {
          return (
            <div>
              <div key={person.results}>
                <img src={person.picture.large} />
                <h1>First Name: {person.name.first}</h1>
                <h1>Gender: {person.gender}</h1>
                <h1>Age: {person.dob.age}</h1>
              </div>
            </div>
          );
        });
        this.setState({ pictures: pictures });
      });
  }

  render() {
    return (
      <div className="container1">
        <div className="container2">{this.state.pictures}</div>
      </div>
    );
  }
}

export default App;
