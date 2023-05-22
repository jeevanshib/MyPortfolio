import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "FitClub",
      description: "Design & Development",
      imgUrl: projImg1,
      url: "https://github.com/jeevanshib/Gym_Project" // Add the URL of the deployed site here
    },
    {
      title: "Gericht - A Restaurant",
      description: "Design & Development",
      imgUrl: projImg2,
      url: "https://github.com/jeevanshib/restaurant" // Add the URL of the deployed site here
    },
    {
      title: "Metaversus Madness",
      description: "Design & Development",
      imgUrl: projImg3,
      url: "https://github.com/jeevanshib/Metaversus" // Add the URL of the deployed site here
    },
    {
      title: "Polygon Jaipur",
      description: "Design",
      imgUrl: projImg4,
      url: "https://www.figma.com/proto/ghYIu5WQY9gnMWwMNIXS9I/PolygonWebsiteUI?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&scdownaling=scale-&scaling=scale-down" // Add the URL of the deployed site here
    },
    {
      title: "Doingly - Task Manager",
      description: "Design",
      imgUrl: projImg5,
      url: "https://www.figma.com/proto/LOGbsyJU0q1hWhkVJK0zpJ/Webflow?page-id=0%3A1&node-id=23-490" // Add the URL of the deployed site here
    },
    {
      title: "My Chat App",
      description: "Development",
      imgUrl: projImg6,
      url: "https://github.com/jeevanshib/ChatApplication" // Add the URL of the deployed site here
    },
    // Add more projects with their respective URLs
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
