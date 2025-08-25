import React from "react";
import { Container, Row, Col, Card, Badge, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TemplateC = () => {
  const skills = [
    "Customer Service",
    "POS Systems Operation",
    "Sales Skills",
    "Teamwork",
    "Inventory Management",
    "Marketing",
    "Communication and recordkeeping",
    "Retail merchandising standards",
  ];

  const experiences = [
    {
      title: "Sales Associate",
      company: "Reids General Store",
      period: "02/2017 - Current",
      location: "Monrovia of Seniles - Jacadine, Tanzania",
      responsibilities: [
        "Maintain retail stocks on floor by efficiently restocking and cross selling product",
        "Processed post boxes by leveraging inventory attention to detail and ability to identify and investigate customer concerns",
        "Processed payments and maintained accurate account to meet financial standards for businesses",
      ],
    },
    {
      title: "Barista",
      company: "Seest Town Cafe",
      period: "Current",
      location: "Jacadine, Tanzania",
      responsibilities: [
        "Fulfilled customer coffee and beverage ordering average orders daily by 3 job POS (thirty)",
        "Managed inventory of over 300 customers daily with efficient retail merchandising standards",
        "Trained entire staff of business in new mobile programs offerings and conventions",
        "Developed creative and appealing sales and techniques and instructed customers on methods",
      ],
    },
    {
      title: "Sales Team Member",
      company: "Majectic fast food",
      period: "",
      location: "Jacadine, Tanzania",
      responsibilities: [
        "Participated at sales transactions accurately and promptly to prevent long customer wait times",
        "Stocked requisition dining items into POS terminal, modifying with additional options and sales suggestion prompts",
        "Accurately made change for cash transactions",
        "Certified extent and bagging items for easy transport",
        "Completed opening, closing and shift charge tasks to promote store efficiency",
        "Maintained and supplied food bars and supplied in good condition with promotional strategies",
        "Fast customer and food preparation areas clean and well-organized for maximum efficiency",
      ],
    },
  ];

  return (
    <Container
      fluid
      className="p-0 mb-4 px-5"
      style={{
        width: "210mm",
        minHeight: "297mm",
        margin: "auto",
        backgroundColor: "#fff",
        padding: "5mm",
        fontFamily: "sans-serif",
        color: "#333",
        boxShadow: "0 0 5px rgba(0,0,0,0.2)",
      }}
    >
      {/* Header */}
      <Row>
        <Col
          style={{
            width: "100%",
            height: "30px",
            backgroundColor: "#2c5aa0",
            marginBottom: "32px",
          }}
        ></Col>
      </Row>

      <Row>
        {/* Left Column */}
        <Col lg={8} className="text-start">
          {/* Name */}
          <div>
            <h4 className="mb-1" style={{ fontWeight: "700" }}>
              MARIAM MUSSA
            </h4>
            <hr
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "#6c757d",
              }}
              className="mt-0"
            />
          </div>

          {/* Summary Card */}
          <Card className="mb-4 p-0 shadow-sm border-0">
            <Card.Header
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              SUMMARY
            </Card.Header>
            <Card.Body>
              <p
                className="mb-0"
                style={{ lineHeight: "1.6", color: "#495057" }}
              >
                Customer-focused Retail Sales professional with solid
                understanding of retail dynamics, marketing and customer
                service. Efficient team player experience providing quality
                product recommendations and solutions to satisfy customer needs
                and exceed expectations. Demonstrated record of driving both
                customer loyalty programs and boost income.
              </p>
            </Card.Body>
          </Card>

          {/* Experience Card */}
          <Card className="shadow-sm border-0 p-0">
            <Card.Header
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              EXPERIENCE
            </Card.Header>
            <Card.Body>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={
                    index < experiences.length - 1 ? "mb-4 pb-4" : "mb-0"
                  }
                  style={{
                    borderBottom:
                      index < experiences.length - 1
                        ? "1px solid #dee2e6"
                        : "none",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h5
                        className="mb-1"
                        style={{ color: "#2c5aa0", fontWeight: "600" }}
                      >
                        {exp.title}
                      </h5>
                      <h6 className="mb-1 text-muted">{exp.company}</h6>
                      <small className="text-muted">{exp.location}</small>
                    </div>
                    {exp.period && (
                      <Badge bg="secondary" className="ms-2">
                        {exp.period}
                      </Badge>
                    )}
                  </div>
                  <ul className="ps-3" style={{ color: "#495057" }}>
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="mb-1"
                        style={{ lineHeight: "1.5" }}
                      >
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>

        {/* Right Column */}

        <Col lg={4} className="mb-4">
          {/* Header Card */}
          <div
            style={{
              background: "linear-gradient(135deg, #2c5aa0 0%, #1e3a5f 100%)",
              color: "white",
              padding: "16px",
              marginBottom: "16px",
            }}
          >
            <div className="mb-3 d-flex justify-content-center">
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iNTAiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjM2IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+TU08L3RleHQ+Cjwvc3ZnPgo="
                roundedCircle
                width="100"
                height="100"
                className="mb-3"
                style={{ border: "4px solid rgba(255,255,255,0.3)" }}
              />
            </div>
          </div>

          {/* Contact Card */}
          <Card className="mb-4 p-0 shadow-sm border-0 text-start">
            <Card.Header
              style={{
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              CONTACT
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <strong style={{ color: "#2c5aa0" }}>Address:</strong>
                <div>Chekabwe Jemicahina</div>
              </div>
              <div className="mb-3">
                <strong style={{ color: "#2c5aa0" }}>Phone:</strong>
                <div>+255 752 158</div>
              </div>
              <div className="mb-0">
                <strong style={{ color: "#2c5aa0" }}>Email:</strong>
                <div>m.mussa@email.com</div>
              </div>
            </Card.Body>
          </Card>

          {/* Skills Card */}
          <Card className="shadow-sm border-0 p-0">
            <Card.Header
              style={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                textAlign: "start",
              }}
            >
              SKILLS
            </Card.Header>
            <Card.Body>
              <div className="d-flex flex-wrap">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    bg="light"
                    text="dark"
                    className="me-2 mb-2 p-2"
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: "normal",
                      border: "1px solid #dee2e6",
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TemplateC;
