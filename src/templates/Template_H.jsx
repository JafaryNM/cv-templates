import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const TemplateH = () => {
  return (
    <Container
      fluid
      style={{
        width: "210mm",
        margin: "auto",
        backgroundColor: "#000",
        padding: "5mm",
        fontFamily: "sans-serif",
        color: "#333",
        boxShadow: "0 0 5px rgba(0,0,0,0.2)",
      }}
    >
      <Row className="text-start">
        {/* LEFT SECTION */}
        <Col md={8} className="bg-white shadow-sm p-4">
          <h2 className="fw-bold">John Doe</h2>
          <p className="text-muted">Graphics Design | Developer</p>
          <div className="text-start">
            <h4>Career Objective</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              inventore quia veniam labore numquam necessitatibus veritatis illo
              expedita nulla explicabo aliquid autem laborum, nemo adipisci vel
              ipsum molestiae pariatur accusamus.
            </p>
          </div>

          {/* Contact */}
          <Card className="mb-4 border-0 p-0">
            <Card.Body>
              <Card.Title className="fw-semibold text-uppercase mb-2">
                Contact Me
              </Card.Title>
              <ListGroup variant="flush" className="text-start">
                <ListGroup.Item>📞 +91 9400056320</ListGroup.Item>
                <ListGroup.Item>🌐 www.yourwebsite.com</ListGroup.Item>
                <ListGroup.Item>✉️ yourinfo@email.com</ListGroup.Item>
                <ListGroup.Item>
                  🏠 113 Periyar Street, Madurai South - 630888
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          {/* Job Experience */}
          <Card className="border-0 p-0">
            <Card.Body>
              <Card.Title className="fw-semibold text-uppercase mb-4">
                Job Experience
              </Card.Title>

              <div className="mb-4 text-start">
                <h6 className="fw-bold d-flex justify-content-between">
                  Video Editing{" "}
                  <span className="text-muted">2020 - Present</span>
                </h6>
                <p className="mb-1 text-muted">
                  <em>BP Studio / Devakottai</em>
                </p>
                <p className="small">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati doloribus cupiditate odio accusantium, ea soluta
                  alias ex ratione architecto, dolorem exercitationem impedit
                  quis cumque earum illum blanditiis magni suscipit laboriosam?.
                </p>
              </div>

              <div className="mb-4 text-start">
                <h6 className="fw-bold d-flex justify-content-between">
                  Video Editing{" "}
                  <span className="text-muted">2020 - Present</span>
                </h6>
                <p className="mb-1 text-muted">
                  <em>BP Studio / Devakottai</em>
                </p>
                <p className="small">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati doloribus cupiditate odio accusantium, ea soluta
                  alias ex ratione architecto, dolorem exercitationem impedit
                  quis cumque earum illum blanditiis magni suscipit laboriosam?.
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* RIGHT SECTION */}
        <Col md={4} className="bg-dark text-light p-4">
          <div className="text-center mb-4 ">
            <img
              src="/profile.jpg"
              alt="profile"
              className="rounded-circle border border-3 border-white "
              width="100"
              height="100"
            />
          </div>

          {/* About */}
          <div className="mb-4">
            <h5 className="border-bottom pb-1 text-uppercase">About Me</h5>
            <p className="small text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h5 className="border-bottom pb-1 text-uppercase">Education</h5>
            <ul className="small ps-3 text-start">
              <li>
                <strong>SSLC Examination</strong> <br />
                Govt Higher Sec School (2006 - 2007)
              </li>
              <li className="mt-2">
                <strong>HSC Examination</strong> <br />
                Govt Higher Sec School (2007 - 2008)
              </li>
              <li className="mt-2">
                <strong>Under Graduate</strong> <br />
                Alagappa University (2008 - 2011)
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h5 className="border-bottom pb-1 text-uppercase">Skills</h5>
            <ul>
              <li>
                {" "}
                <div className="mb-2 text-start">Adobe Photoshop</div>
              </li>
              <li>
                <div className="mb-2 text-start">Adobe Premiere Pro</div>
              </li>
              <li>
                <div className="mb-2 text-start">Blender</div>
              </li>
              <li>
                <div className="mb-2 text-start">Adobe Illustrator</div>
              </li>
              <li>
                <div className="mb-2 text-start">Adobe After Effects</div>
              </li>
              <li>
                <div className="mb-2 text-start">CorelDRAW</div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TemplateH;
