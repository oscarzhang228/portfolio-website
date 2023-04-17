import { Component } from "react";
import photo from "./images/OZ_photo.JPG";
class Browser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      social: this.props.item === "Socials",
      bio: this.props.item === "Bio",
      projects: this.props.item === "Projects",
    };
  }
  render() {
    return (
      <div className="bg-dark vh-100 border">
        {this.state.bio && (
          <div>
            <img
              className="img-fluid img-thumbnail rounded mx-auto d-block mt-5"
              src={photo}
              style={{ height: "250px" }}
              alt="Oscar Zhang"
            ></img>
            <h1
              className="text-center mt-5 text-light"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Hi, I'm Oscar Zhang.
            </h1>
            <h4
              className="ms-5 me-5 text-light"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              As an rising second-year student at Georgia Tech, I'm passionate
              about creating beautiful and engaging websites using modern web
              development technologies. With experience in HTML, CSS,
              JavaScript, React.js, Node.js, SQL, and Bootstrap, I have worked
              on multiple projects that showcase my skills and expertise.
              <br></br>One of my most notable achievements was creating and
              maintaining the website for the largest culture club on campus
              using WordPress and basic web development technologies. By
              incorporating user-friendly design principles and intuitive
              navigation, I was able to significantly improve user engagement
              and increase overall website traffic. The website also played a
              crucial role in advertising for Tour of Asia, the club's flagship
              event with over 1000 people in attendance.
              <br></br>I'm always eager to learn new skills and tackle new
              challenges, and I'm excited to explore opportunities in front-end
              or software development roles. If you're looking for a driven and
              enthusiastic developer with a strong foundation in modern web
              technologies, let's connect and discuss how I can contribute to
              your team.
            </h4>
          </div>
        )}
        {this.state.projects && (
          <div>
            <h1>hi</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Browser;
