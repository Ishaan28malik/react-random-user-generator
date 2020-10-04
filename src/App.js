import React from "react";
import Loader from "./components/Loader";

const style = {
  display: "grid",
  gridTemplateColumns: "0.8fr 1fr",
  justifyItems: "left",
  color: "white",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      loading: true,
    };
  }

  componentDidMount() {
    setInterval(() => this.repeat(), 10000);
  }

  repeat() {
    if (this.state.loading === true) {
      this.setState({ loading: false });
    }
    fetch("https://randomuser.me/api/?results=1")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        let pictures = data.results.map((person) => {
          return (
              <div key={person.login.uuid} style={{textAlign: 'center'}}>
                <img
                  src={person.picture.large}
                  className="profile-pic"
                  style={{
                    marginTop: "-130px",
                    height: "200px",
                    width: "200px",
                    borderRadius: "100px",
                    border: "5px solid #ff337d",
                  }}
                  alt="profile-img"
                />
                <div style={style}>
                  <h2>First Name </h2>
                  <h2>: {person.name.first}</h2>
                  <h2>Gender</h2>
                  <h2>: {person.gender}</h2>
                  <h2>Age</h2>
                  <h2>: {person.dob.age}</h2>
                  <h2>Country</h2>
                  <h2>: {person.location.country}</h2>
                  <h2>Phone</h2>
                  <h2>: {person.phone}</h2>
                  <h2>DOB</h2>
                  <h2>: {person.dob.date.slice(0, 10)}</h2>
                </div>
                <button className="random-btn" onClick={() => this.repeat()}>
                  New random user!
                </button>
              </div>
          );
        });
        this.setState({ pictures });
      });
  }

  render() {
    return (
      <>
        <div
          style={{
            borderRadius: "20px",
            height: "520px",
            width: "450px",
            marginTop: "150px",
            backgroundColor: "#222831",
          }}
        >
          <div className="container1" style={{ margin: "25px" }}>
            <div className="container2">
              {this.state.loading ? <Loader /> : this.state.pictures}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
