import React from "react";
import { Container, Row, Col, Card, Image, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TemplateA = () => {
  const contactInfo = {
    address: "Jacadine Jemicahina",
    phone: "+255 752 158",
    email: "m.mussa@email.com",
  };

  const skills = [
    "Customer Service operation",
    "POS systems operation",
    "Sales expertise",
    "Teamwork",
    "Inventory management",
    "Marketing",
    "Accurate money handling",
    "Communication and recordkeeping",
    "Retail merchandising expertise",
  ];

  const experiences = [
    {
      title: "Retail Sales Associate",
      company: "Reids General Store",
      period: "02/2017 - Current",
      location: "Monrovia of Jacadine - Jacadine, Tanzania",
      responsibilities: [
        "Maintain retail stocks on floor by efficiently restocking and cross selling products",
        "Processed post boxes by leveraging inventory, attention to detail and integrity to identify and investigate customer concerns",
        "Processed payments and maintained accurate accounts to meet financial standards for businesses",
      ],
    },
    {
      title: "Barista",
      company: "Seest Town Cafe",
      period: "01/2015 - 01/2017",
      location: "Jacadine, Tanzania",
      responsibilities: [
        "Fulfilled customer coffee and beverage ordering average orders daily by 3 jobs (50 (TO) activity)",
        "Managed morning rush of over 300 customers daily with efficient, level headed customer service",
        "Trained entire staff of business in new smoothie program offerings and conventions",
        "Developed creative and appealing sales and techniques and instructed customers on methods",
      ],
    },
    {
      title: "Cashier",
      company: "Majeetha fast food",
      period: "07/2014 - 12/2014",
      location: "Jacadine, Tanzania",
      responsibilities: [
        "Processed all sales transactions accurately and promptly to prevent long customer wait times",
        "Stocked requisition dining items into POS terminal, modifying with substitutions and add-ons to customized orders",
        "Accurately made change for cash transactions",
        "Certified orders and bagged items for easy transport",
        "Completed opening, closing and shift change tasks to promote store efficiency",
        "Maintained and supplied food stock and supplies in good condition with promotional strategies",
        "Kept customer and food preparation areas clean and well organized for maximum efficiency",
      ],
    },
  ];

  return (
    <Container
      fluid
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
      className="p-0 mb-4"
    >
      <Row className="g-0">
        {/* Header with Image */}
        <Col xs={12}>
          <div
            style={{ backgroundColor: "#2c5f5f", height: "100px" }}
            className="position-relative"
          >
            <div
              className="position-absolute"
              style={{ right: "30px", top: "20px" }}
            >
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iMTAiIGZpbGw9IiNmNGY0ZjQiLz4KPGNpcmNsZSBjeD0iNjAiIGN5PSI0NSIgcj0iMjAiIGZpbGw9IiM2YzY5NjkiLz4KPHBhdGggZD0iTTMwIDk1YzAtMTUgMTUtMjcgMzAtMjdzMzAgMTIgMzAgMjciIGZpbGw9IiM2YzY5NjkiLz4KPC9zdmc+"
                width="120"
                height="120"
                className="border border-2 border-white shadow"
                style={{ borderRadius: "8px" }}
              />
            </div>
          </div>
        </Col>
      </Row>

      <Row className="g-0">
        {/* Left Column */}
        <Col md={8} className="bg-white p-4 text-start border-end">
          {/* Name */}
          <div className="mb-4">
            <h1 className="h2 fw-bold mb-0" style={{ color: "#2c5f5f" }}>
              MARIAM MUSSA
            </h1>
            <hr
              className="mt-2 mb-3"
              style={{ color: "#2c5f5f", height: "2px" }}
            />
          </div>

          {/* Summary */}
          <div className="mb-4">
            <h3 className="h5 fw-bold mb-3" style={{ color: "#2c5f5f" }}>
              SUMMARY
            </h3>
            <p className="small text-muted lh-base">
              Customer-focused Retail Sales professional with solid
              understanding of retail dynamics, marketing and customer service.
              Offering 5 years of experience providing quality product
              recommendations and solutions to satisfy customer needs and exceed
              expectations. Demonstrated record of driving both customer loyalty
              programs and boost income sharing expertise.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-4">
            <h3 className="h5 fw-bold mb-4" style={{ color: "#2c5f5f" }}>
              EXPERIENCE
            </h3>

            {experiences.map((exp, index) => (
              <Card key={index} className="mb-4 border-0 shadow-sm">
                <Card.Body className="p-0">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h4
                        className="h5 fw-bold mb-1"
                        style={{ color: "#2c5f5f" }}
                      >
                        {exp.title}
                      </h4>
                      <h5 className="h6 fw-semibold text-dark mb-1">
                        {exp.company}
                      </h5>
                      <p className="small text-muted mb-0">{exp.location}</p>
                    </div>
                    <Badge
                      bg="secondary"
                      className="fs-6 fw-normal px-3 py-2"
                      style={{ backgroundColor: "#6c757d" }}
                    >
                      {exp.period}
                    </Badge>
                  </div>

                  <ul className="mb-0">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="small text-muted mb-2 lh-base"
                      >
                        {resp}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>

        {/* Right Column */}
        <Col md={4} className="bg-light p-4 text-start">
          {/* Contact */}
          <div className="mt-4 mb-4">
            <h3 className="h5 fw-bold mb-3" style={{ color: "#2c5f5f" }}>
              CONTACT
            </h3>
            <div className="small">
              <div className="mb-2">
                <strong>Address:</strong> {contactInfo.address}
              </div>
              <div className="mb-2">
                <strong>Phone:</strong> {contactInfo.phone}
              </div>
              <div>
                <strong>Email:</strong> {contactInfo.email}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="h5 fw-bold mb-3" style={{ color: "#2c5f5f" }}>
              SKILLS
            </h3>
            <ul className="list-unstyled small">
              {skills.map((skill, index) => (
                <li key={index} className="mb-1 d-flex align-items-center">
                  <span className="me-2" style={{ color: "#2c5f5f" }}>
                    •
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TemplateA;
