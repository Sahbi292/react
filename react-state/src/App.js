
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Person: {
        fullName: "Sahbi Mosrati",
        bio: "A software engineer passionate about open source.",
        imgSrc: "https://www.google.com/imgres?q=software%20engineer&imgurl=https%3A%2F%2Fteentrust.ng%2Fwp-content%2Fuploads%2F2025%2F02%2Fcyber_security_vs_software_engineering-800x477.jpg&imgrefurl=https%3A%2F%2Fteentrust.ng%2Ftips-on-becoming-a-software-engineer%2F&docid=zqPF56m1Gtu5KM&tbnid=OvscQOYB68YqfM&vet=12ahUKEwi8q4SBzdWPAxUyVUEAHXjWOYkQM3oECBoQAA..i&w=800&h=477&hcb=2&ved=2ahUKEwi8q4SBzdWPAxUyVUEAHXjWOYkQM3oECBoQAA",
        profession: "Software Engineer",
      },
      shows: false,
      secondsSinceMount: 0,
    };
  }

  componentDidMount() {
    
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        secondsSinceMount: prevState.secondsSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
  
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { Person, shows, secondsSinceMount } = this.state;

    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "20px", maxWidth: "400px" }}>
            <img src={Person.imgSrc} alt={Person.fullName} style={{ width: "150px", borderRadius: "8px" }} />
            <h2>{Person.fullName}</h2>
            <p><strong>Bio:</strong> {Person.bio}</p>
            <p><strong>Profession:</strong> {Person.profession}</p>
          </div>
        )}

        <div style={{ marginTop: "20px", color: "#555" }}>
          <small>Time since component mounted: {secondsSinceMount} second{secondsSinceMount !== 1 ? "s" : ""}</small>
        </div>
      </div>
    );
  }
}

export default App; 
