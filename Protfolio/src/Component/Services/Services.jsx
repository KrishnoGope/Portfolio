import './Services.css'
import { Row, Col, Card, Button } from "react-bootstrap";

const topics = [
    {
      title: "JavaScript",
      description: "JavaScript is a versatile scripting language used for web development.  It enables dynamic content, interactive elements, and powerful client-side scripting.",
      link: "https://www.w3schools.com/js/"
    },
    {
      title: "React.js",
      description: "React.js is a JavaScript library for building user interfaces using components. It allows developers to create reusable UI components and efficiently manage application state.",
      link: "https://www.w3schools.com/REACT/DEFAULT.ASP"
    },
    {
      title: "Bootstrap 5",
      description: "Bootstrap 5 is a front-end framework for building responsive and mobile-first web applications.  It offers a comprehensive set of prebuilt components, utility classes, and more.",
      link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/"
    },
    {
      title: "Node.js",
      description: "Node.js is a JavaScript runtime that allows execution of JavaScript on the server-side. It is built on Chrome's V8 engine and is widely used for building scalable network applications.",
      link: "https://www.w3schools.com/nodejs/"
    },
    {
      title: "PHP",
      description: "PHP is a popular server-side scripting language designed for web development. It powers many content management systems (CMS) like WordPress and Drupal.",
      link: "https://www.w3schools.com/php/"
    },
    {
      title: "MVC",
      description: "MVC (Model-View-Controller) is a software architectural pattern for implementing user interfaces. It separates an application into three interconnected components.",
      link: "https://www.w3schools.in/mvc-architecture"
    },
  ];

const Services = () => {
    return (
        <div id='services' className="Services">
          <div className="services_title">
            <h1 className="gradient-title">My Services</h1>
            <img src="#" alt="" />
          </div>
          <Row className="Service_body m-4">
            {topics.map((topic, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="service-card shadow-lg h-100 border-0 d-flex flex-column">
                  <Card.Body className="p-4 border border-info d-flex flex-column flex-grow-1">
                    <Card.Title className="text-center gradient-text fw-bold">{topic.title}</Card.Title>
                    <Card.Text className="text-justify text-secondary flex-grow-1" style={{ textAlign: "justify" }}>
                      {topic.description}
                    </Card.Text>
                    <div className="text-center mt-auto">
                      <Button 
                        variant="primary" 
                        href={topic.link} 
                        target="_blank" 
                        className="btn-gradient"
                        rel="noopener noreferrer"
                      >
                        Learn More...
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      );
    };
    
export default Services;
