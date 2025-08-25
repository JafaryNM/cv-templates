import React from "react";
import { Container, Row, Col, Card, ProgressBar, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TemplateB = () => {
  const contactInfo = {
    email: "sample@gmail.com",
    phone: "+255 752 158 000",
    address: "Chekabwe Jemicahina",
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

  const languages = [
    { name: "Swahili", level: 100 },
    { name: "English", level: 85 },
  ];

  const hobbies = [
    "Reading books",
    "Listening to music",
    "Two-time league champion",
    "Self-care and personal development",
    "Community service",
  ];

  const educationAndTraining = [
    {
      title: "B.A in Linguistics",
      institution: "University of Dar es Salaam",
      field: "Anthropology",
      period: "2008-2013",
      location: "Dar es Salaam, Tanzania",
    },
    {
      title: "High School Diploma",
      institution: "Beka Secondary School - Jacadine",
      location: "Jacadine, Tanzania",
    },
  ];

  const experiences = [
    {
      title: "Retail Sales Associate",
      company: "Monrovia of Jacadine",
      period: "02/2017 - Current",
      responsibilities: [
        "Increased monthly sales 15% by effectively upselling and cross selling products",
        "Maintained customer loyalty",
        "Processed post boxes by leveraging inventory, attention to detail and integrity to identify and investigate customer concerns",
        "Processed payments and maintained accurate accounts to meet financial standards for businesses",
      ],
    },
    {
      title: "Barista",
      company: "Seest Town Cafe",
      period: "02/2015 - 02/2017",
      responsibilities: [
        "Fulfilled customer drinks and pastries, boosting average sales daily by 5 jobs (50)",
        "Managed inventory rush of over 300 customers daily with efficient, level headed customer service",
        "Trained entire staff of business in new smoothie programs offerings and conventions",
        "Developed creative and appealing sales and techniques and instructed customers on methods",
      ],
    },
    {
      title: "Cashier",
      company: "Majeetha Fast food",
      period: "",
      responsibilities: [
        "Processed all sales transactions accurately and promptly to prevent long customer wait times",
        "Stocked requisition dining items into POS terminal, modifying with substitutions and add-ons to customize orders",
        "Accurately made change for cash transactions",
        "Certified extent and bagging items for easy transport",
        "Completed opening, closing and shift change tasks to promote store efficiency",
        "Maintained and supplied food stock and supplies in good condition with promotional strategies",
        "Kept customer and food preparation areas clean and well-organized for maximum efficiency",
      ],
    },
  ];

  return (
    <Container
      fluid
      className="p-0 mb-4"
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
      <Row className="g-0 min-vh-100">
        {/* Left Sidebar */}
        <Col
          lg={4}
          style={{ backgroundColor: "#6c757d" }}
          className="text-white text-start p-4"
        >
          {/* Contact Info */}
          <div className="mb-4 pb-3 border-bottom border-secondary">
            <div className="fw-medium mb-2">{contactInfo.email}</div>
            <div className="fw-medium mb-2">{contactInfo.phone}</div>
            <div className="small">{contactInfo.address}</div>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3">Skills</h5>
            <ul className="list-unstyled">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="d-flex align-items-center mb-2 small"
                >
                  <span
                    className="bg-white rounded-circle d-inline-block me-3"
                    style={{ width: "8px", height: "8px" }}
                  ></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Education and Training */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3">Education And Training</h5>
            <div>
              {educationAndTraining.map((edu, index) => (
                <div key={index} className="mb-3 small">
                  <div className="fw-semibold">{edu.title}</div>
                  <div className="text-light">{edu.institution}</div>
                  {edu.field && (
                    <div className="text-light opacity-75">{edu.field}</div>
                  )}
                  {edu.period && (
                    <div className="text-light opacity-75">{edu.period}</div>
                  )}
                  <div className="text-light opacity-75">{edu.location}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3">Languages</h5>
            <div>
              {languages.map((lang, index) => (
                <div key={index} className="mb-3">
                  <div className="d-flex justify-content-between small mb-1">
                    <span>{lang.name}</span>
                    <span>{lang.level}%</span>
                  </div>
                  <ProgressBar
                    now={lang.level}
                    style={{ height: "8px" }}
                    className="bg-secondary"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Profile */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3">Profile</h5>
            <ProgressBar
              now={80}
              style={{ height: "8px" }}
              className="bg-secondary mb-2"
            />
            <p className="small text-light">Customer-focused professional</p>
          </div>

          {/* Interests and Hobbies */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3">Interests And Hobbies</h5>
            <ul className="list-unstyled">
              {hobbies.map((hobby, index) => (
                <li
                  key={index}
                  className="d-flex align-items-center mb-2 small"
                >
                  <span
                    className="bg-white rounded-circle d-inline-block me-3"
                    style={{ width: "8px", height: "8px" }}
                  ></span>
                  {hobby}
                </li>
              ))}
            </ul>
          </div>
        </Col>

        {/* Main Content */}
        <Col lg={8} className="bg-white text-start p-4 px-0">
          {/* Header */}
          <div className="mb-0">
            <h1 className="display-4 fw-light text-muted mb-2">Mariam Mussa</h1>
            <hr
              style={{
                width: "80px",
                height: "3px",
                backgroundColor: "#6c757d",
              }}
              className="mt-0"
            />
          </div>

          {/* Summary */}
          <Card className="border-0 mb-0">
            <Card.Body className="p-0">
              <h2 className="h4 fw-light text-secondary mb-3 pb-2 border-bottom">
                Summary
              </h2>
              <p className="text-muted lh-lg">
                Customer-focused Retail Sales professional with solid
                understanding of retail dynamics, marketing and customer
                service. Offering 5 years of experience providing quality
                product recommendations and solutions to meet customer needs and
                exceed expectations. Demonstrated record of driving customer
                loyalty by leveraging communication skills with and sales
                expertise.
              </p>
            </Card.Body>
          </Card>

          {/* Experience */}
          <Card className="border-0">
            <Card.Body className="p-0">
              <h2 className="h4 fw-light text-secondary mb-4 pb-2 border-bottom">
                Experience
              </h2>
              <div className="position-relative">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="mb-4 position-relative"
                    style={{ paddingLeft: "10px" }}
                  >
                    {/* Timeline dot */}
                    <div
                      className="position-absolute bg-secondary rounded-circle border border-3 border-white shadow-sm"
                      style={{
                        width: "16px",
                        height: "16px",
                        left: "-8px",
                        top: "8px",
                      }}
                    ></div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start mb-2">
                      <div>
                        <h6 className="h5 fw-semibold text-dark mb-1">
                          {exp.company} - {exp.title}
                        </h6>
                      </div>
                      {exp.period && (
                        <Badge
                          bg="light"
                          text="dark"
                          className="fs-6 fw-normal"
                        >
                          {exp.period}
                        </Badge>
                      )}
                    </div>

                    <ul className="list-unstyled ps-3">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-muted mb-1 lh-base">
                          • {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TemplateB;
