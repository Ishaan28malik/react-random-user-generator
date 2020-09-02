import React from "react";
import Persons from "./person";
import Pictures from "./picture";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      pictures: [],
=======
      pictures: []
>>>>>>> 1035be41e84e92842a1c36795be610baacd2540d
    };
  }

  componentDidMount() {
<<<<<<< HEAD
    setInterval(() => this.repeat(), 2000);
=======
    setInterval(() => this.repeat(), 1000);
>>>>>>> 1035be41e84e92842a1c36795be610baacd2540d
  }

  repeat() {
    fetch("https://randomuser.me/api/?results=1")
<<<<<<< HEAD
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        let pictures = data.results.map((person) => {
          return (
            <div>
              <div key={person.results}>
                <img
                  src={person.picture.large}
                  style={{
                    marginTop: "-130px",
                    marginLeft: "85px",
                    height: "200px",
                    width: "200px",
                    borderRadius: "100px",
                    border: "5px solid blue",
                  }}
                />
                <h1
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  First Name: {person.name.first}
                </h1>
                <h1
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  Gender: {person.gender}
                </h1>
                <h1
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  Age: {person.dob.age}
                </h1>
                <h1
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  Country:{person.location.country}
                </h1>
=======
      .then(results => {
        return results.json();
      })
      .then(data => {
        let pictures = data.results.map(person => {
          return (
            <div>
              <div key={person.results}>
                <img src={person.picture.large} />
                <h1>First Name: {person.name.first}</h1>
                <h1>Gender: {person.gender}</h1>
                <h1>Age: {person.dob.age}</h1>
>>>>>>> 1035be41e84e92842a1c36795be610baacd2540d
              </div>
            </div>
          );
        });
        this.setState({ pictures: pictures });
      });
  }

  render() {
    return (
<<<<<<< HEAD
      <>
        {/* <h1>Hi there</h1> */}
        <div
          style={{
            // border: "2px solid",
            borderRadius: "20px",
            height: "520px",
            width: "450px",
            marginTop: "150px",
            backgroundColor: "blue",
          }}
        >
          <div className="container1" style={{ margin: "30px" }}>
            <div className="container2">{this.state.pictures}</div>
          </div>
        </div>
      </>
=======
      <div className="container1">
        <div className="container2">{this.state.pictures}</div>
      </div>
>>>>>>> 1035be41e84e92842a1c36795be610baacd2540d
    );
  }
}

export default App;
