import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TemplateG = () => {
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
      <Card
        className="border-0 p-0 text-start"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Card.Body className="p-0">
          {/* Header Section with Gray Background */}
          <div style={{ backgroundColor: "#e8e8e8", padding: "2rem" }}>
            <Row className="align-items-center">
              <Col md={3} className="text-center mb-3 mb-md-0">
                <div
                  className="mx-auto"
                  style={{
                    width: "120px",
                    height: "120px",
                    backgroundColor: "#d0d0d0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "48px",
                    color: "#666",
                    border: "1px solid #bbb",
                  }}
                >
                  👩
                </div>
              </Col>
              <Col md={9}>
                <h1
                  className="mb-1"
                  style={{
                    color: "#333",
                    fontWeight: "bold",
                    fontSize: "2.5rem",
                  }}
                >
                  CLAUDIA ALVES
                </h1>
                <h4
                  className="text-uppercase mb-3"
                  style={{
                    color: "#666",
                    fontWeight: "300",
                    letterSpacing: "2px",
                  }}
                >
                  Sales Manager
                </h4>
                <Row className="small" style={{ color: "#555" }}>
                  <Col md={6}>
                    <div className="mb-1">📧 claudia@email.com</div>
                    <div className="mb-1">📞 +123 456 789</div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-1">🔗 linkedin.com/in/claudia</div>
                    <div className="mb-1">📍 New York, USA</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <div className="p-4">
            {/* Professional Summary */}
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    backgroundColor: "#666",
                    color: "white",
                    padding: "0.5rem 1rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Professional Summary
                </div>
              </div>
              <p
                style={{
                  lineHeight: "1.6",
                  color: "#555",
                  textAlign: "justify",
                }}
              >
                Results-driven sales professional with 7+ years of experience in
                B2B sales and client relationship management. Proven track
                record of exceeding sales targets by 25%+ consistently. Expert
                in consultative selling, team leadership, and strategic account
                management. Skilled in CRM systems and data-driven sales
                analytics.
              </p>
            </div>

            {/* Academic Background */}
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    backgroundColor: "#666",
                    color: "white",
                    padding: "0.5rem 1rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Academic Background
                </div>
              </div>
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <h6 className="fw-bold mb-1">UNIVERSITY OF BUSINESS</h6>
                    <div className="small text-muted mb-1">
                      MBA IN SALES MANAGEMENT • 2 YEARS
                    </div>
                    <p className="small" style={{ color: "#555" }}>
                      Advanced coursework in strategic sales management,
                      customer relationship management, and business analytics.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <h6 className="fw-bold mb-1">UNIVERSITY OF RIVERSIDE</h6>
                    <div className="small text-muted mb-1">
                      BA IN ECONOMICS • 4 YEARS
                    </div>
                    <p className="small" style={{ color: "#555" }}>
                      Comprehensive study in economic principles, market
                      analysis, and financial planning with magna cum laude
                      honors.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Career History */}
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    backgroundColor: "#666",
                    color: "white",
                    padding: "0.5rem 1rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Career History
                </div>
              </div>
              <Row>
                <Col md={6}>
                  <div className="mb-4">
                    <h6 className="fw-bold text-uppercase">Sales Manager</h6>
                    <div className="small text-muted mb-2">
                      REGIONAL INDUSTRIES
                    </div>
                    <p
                      className="small"
                      style={{ color: "#555", lineHeight: "1.4" }}
                    >
                      Led a high-performing sales team of 12 representatives,
                      achieving 130% of annual targets. Implemented CRM
                      optimization strategies resulting in 40% improvement in
                      lead conversion rates. Managed key enterprise accounts
                      worth $2M+ annually.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-4">
                    <h6 className="fw-bold text-uppercase">
                      Sales Representative
                    </h6>
                    <div className="small text-muted mb-2">
                      TECH SOLUTIONS INC
                    </div>
                    <p
                      className="small"
                      style={{ color: "#555", lineHeight: "1.4" }}
                    >
                      Consistently exceeded sales quotas by average of 25% over
                      3 years. Developed and maintained relationships with 50+
                      enterprise clients. Specialized in consultative selling of
                      technology solutions to Fortune 500 companies.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Bottom Row */}
            <Row>
              {/* Core Skills */}
              <Col md={6}>
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      backgroundColor: "#666",
                      color: "white",
                      padding: "0.5rem 1rem",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontSize: "0.9rem",
                    }}
                  >
                    Core Skills
                  </div>
                </div>
                <div className="small" style={{ color: "#555" }}>
                  <div className="mb-2">• Strategic Sales Planning</div>
                  <div className="mb-2">• Client Relationship Management</div>
                  <div className="mb-2">• Team Leadership & Training</div>
                  <div className="mb-2">
                    • CRM Systems (Salesforce, HubSpot)
                  </div>
                  <div className="mb-2">• Data Analysis & Reporting</div>
                  <div className="mb-2">• Negotiation & Closing</div>
                  <div className="mb-2">• Market Research & Analysis</div>
                </div>
              </Col>

              {/* Value References */}
              <Col md={6}>
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      backgroundColor: "#666",
                      color: "white",
                      padding: "0.5rem 1rem",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontSize: "0.9rem",
                    }}
                  >
                    Value References
                  </div>
                </div>
                <div className="small" style={{ color: "#555" }}>
                  <div className="mb-3">
                    <div className="fw-bold">MICHAEL JOHNSON</div>
                    <div className="text-muted">Regional Manager</div>
                    <div>michael.johnson@company.com</div>
                    <div>+1 555 123 4567</div>
                  </div>
                  <div className="mb-3">
                    <div className="fw-bold">SARAH WILLIAMS</div>
                    <div className="text-muted">Director of Sales</div>
                    <div>sarah.williams@techsol.com</div>
                    <div>+1 555 987 6543</div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TemplateG;
