import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  CardBody,
  CardTitle,
} from "react-bootstrap";
import "../App.css";

const TemplateH = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://ekazi.co.tz/api/cv/cv_builder/28100")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        return res.json();
      })
      .then((data) => {
        console.log(data.data);

        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const payload = data?.data || {}; // 👈 unwrap first

  const profiles = payload?.applicant_profile || [];
  const personalities = payload?.applicant_personality || [];
  const experiences = payload.experience || [];
  const referees = payload.referees || [];
  const users = payload.user || [];
  const addresses = payload.address || [];
  const education = payload.education || [];
  const skills = payload.knowledge || [];
  const contact = {
    phone: payload.phone?.number,
    email: payload.email?.email,
    address: payload.address?.street,
  };

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
          {profiles.map((profile) => (
            <>
              <h2 className="fw-bold">{`${profile.first_name} ${profile.middle_name} ${profile.last_name}`}</h2>
            </>
          ))}

          {/* Career Objective */}
          <Card className="border-0 p-0">
            <CardBody>
              <CardTitle className="fw-semibold text-uppercase mb-4">
                Career Objective
              </CardTitle>
              <p className="text-sm">
                {payload.objective.objective || "No objective provided."}
              </p>
            </CardBody>
          </Card>

          {/* Job Experience */}
          <Card className="border-0 p-0">
            <Card.Body>
              <Card.Title className="fw-semibold text-uppercase mb-4">
                Job Experience
              </Card.Title>

              {experiences.length > 0 ? (
                experiences.map((exp, index) => (
                  <div key={index} className="mb-4 text-start">
                    <h6 className="fw-bold d-flex justify-content-between">
                      {exp.position?.position_name || "Job Title"}{" "}
                      <span className="small text-muted">
                        {exp.start_date} - {exp.end_date || "Present"}
                      </span>
                    </h6>
                    <p className="mb-1 text-muted ">
                      <em>
                        {exp.employer?.employer_name} /{" "}
                        {exp.industry?.industry_name}
                      </em>
                    </p>
                    {/* <p className="small">{exp.responsibility}</p> */}
                    {exp.responsibility && (
                      <ul className="small mb-0">
                        {exp.responsibility
                          .split("\n") // split by newline
                          .map((item, i) => item.trim()) // remove extra spaces
                          .filter((item) => item.length > 0) // remove empty lines
                          .map((item, i) => (
                            <li key={i}>{item.replace(/^•\s*/, "")}</li> // remove bullet if exists
                          ))}
                      </ul>
                    )}
                  </div>
                ))
              ) : (
                <p>No job experience added.</p>
              )}
            </Card.Body>
          </Card>

          {/* Job Experience */}
          <Card className="border-0 p-0">
            <Card.Body>
              <Card.Title className="fw-semibold text-uppercase mb-4">
                Referees
              </Card.Title>

              {referees.length > 0 ? (
                referees.map((referee, index) => (
                  <div key={index} className="mb-4 text-start">
                    <h6 className="fw-bold d-flex justify-content-between">
                      {`${referee.first_name} ${referee.middle_name} ${referee.last_name}`}
                    </h6>
                    <p className="mb-1 text-muted ">
                      {referee.referee_position}
                    </p>
                    <p className="small">{referee.employer}</p>
                    <p className="small">{referee.email}</p>
                    <p className="small">{referee.phone}</p>
                  </div>
                ))
              ) : (
                <p>No job experience added.</p>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* RIGHT SECTION */}
        <Col md={4} className="bg-dark text-light p-4">
          {profiles.map((profile) => (
            <div className="text-center mb-4">
              <img
                src={`https://ekazi.co.tz/${profile.picture}`}
                alt="profile"
                className="rounded-circle border border-3 border-white"
                width="100"
                height="100"
              />
            </div>
          ))}

          {/* About */}
          <div className="small mb-4">
            <h5 className="border-bottom pb-1 text-uppercase">Personalities</h5>
            <ul>
              {personalities.map((personality) => (
                <li className="small text-start">
                  {personality.personality.personality_name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="small mb-4">
            <h5 className="border-bottom text-uppercase mb-2">Contact Me</h5>
            <ul>
              <li>{payload.phone.phone_number}</li>
              {users.map((user) => (
                <li>{user?.email}</li>
              ))}
              {addresses.map((address) => (
                <li>{`${address.region_name}, ${address.name}`}</li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h5 className="border-bottom pb-1 text-uppercase">Education</h5>
            {education.length > 0 ? (
              <ul className="small ps-3 text-start">
                {education.map((edu, i) => (
                  <li key={i} className="mt-2">
                    <strong>
                      {edu.qualification?.qualification || "Degree"}
                    </strong>{" "}
                    <br />
                    {edu.institution} ({edu.start_date} - {edu.end_date})
                  </li>
                ))}
              </ul>
            ) : (
              <p>No education records available.</p>
            )}
          </div>

          {/* Skills */}
          {/* <div>
            <h5 className="border-bottom pb-1 text-uppercase">Skills</h5>
            {skills.length > 0 ? (
              <ul className="small ps-3 text-start">
                {skills.map((skill, i) => (
                  <li key={i}>{skill.knowledge}</li>
                ))}
              </ul>
            ) : (
              <p>No skills listed.</p>
            )}
          </div> */}
        </Col>
      </Row>
    </Container>
  );
};

export default TemplateH;
