import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Alert,
  Badge,
} from "react-bootstrap";
import {
  FiUser,
  FiBriefcase,
  FiBookOpen,
  FiAward,
  FiGlobe,
  FiMail,
  FiPhone,
  FiMapPin,
  FiExternalLink,
  FiTool,
  FiCpu,
  FiTag,
} from "react-icons/fi";
import "../App.css";

const Title = ({ icon: Icon, children }) => (
  <div className="d-flex align-items-center gap-2 mb-2">
    <Icon size={18} />
    <h5
      className="fw-semibold text-uppercase mb-0"
      style={{ fontSize: "1rem", letterSpacing: ".02em" }}
    >
      {children}
    </h5>
  </div>
);

const SmallMuted = ({ children }) => (
  <span className="text-muted" style={{ fontSize: ".85rem" }}>
    {children}
  </span>
);

const formatMY = (d) =>
  d
    ? new Date(d).toLocaleDateString("en-GB", {
        month: "short",
        year: "numeric",
      })
    : "—";

const cvUrl = "https://ekazi.co.tz";

const TemplateH = () => {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://ekazi.co.tz/api/cv/cv_builder/30750")
      // fetch("https://ekazi.co.tz/api/cv/cv_builder/28100")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        console.log(json.data);
        setPayload(json?.data || {});
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load profile");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <Spinner animation="border" role="status" />
        <span className="ms-3">Loading CV…</span>
      </div>
    );
  }

  if (error) {
    return (
      <Container className="py-4">
        <Alert variant="danger" className="mb-0">
          {error}
        </Alert>
      </Container>
    );
  }

  // --- Safe unwrapping ---
  const profiles = payload?.applicant_profile ?? [];
  const profile = profiles[0] ?? {};
  const personalities = payload?.applicant_personality ?? [];
  const experiences = payload?.experience ?? [];
  const referees = payload?.referees ?? [];
  const languages = payload?.language ?? [];
  const users = payload?.user ?? [];
  const addresses = payload?.address ?? [];
  const education = payload?.education ?? [];
  const culture = payload?.culture ?? [];
  const software = payload?.software ?? [];
  const knowledge = payload?.knowledge ?? [];
  const tools = payload?.tools ?? [];
  const currentPosition =
    payload?.current_position ||
    payload?.experience?.[0]?.position?.position_name ||
    "—";

  const phone =
    payload?.phone?.phone_number ||
    payload?.phone?.number ||
    users?.[0]?.phone ||
    "—";
  const email = users?.[0]?.email || payload?.email?.email || "—";
  const location = addresses?.[0]
    ? `${addresses[0]?.region_name || ""}${
        addresses[0]?.name ? ", " + addresses[0].name : ""
      }`
    : "—";

  return (
    <Container
      fluid
      style={{
        width: "210mm",
        margin: "auto",
        backgroundColor: "#0b0b0b",
        padding: "5mm",

        color: "#333",
      }}
    >
      <Row
        className="text-start g-0"
        style={{ boxShadow: "0 2px 14px rgba(0,0,0,.25)" }}
      >
        {/* LEFT SECTION */}
        <Col md={8} className="bg-white p-4">
          {/* Header */}
          <div className="pb-3 mb-3 border-bottom">
            <h2
              className="fw-bold text-uppercase mb-1"
              style={{ fontSize: "1.15rem", letterSpacing: ".03em" }}
            >
              {`${profile.first_name || ""} ${profile.middle_name || ""} ${
                profile.last_name || ""
              }`.trim()}
            </h2>
            <SmallMuted>{currentPosition}</SmallMuted>
          </div>

          {/* About */}
          <Card className="border-0 p-0 mb-3">
            <Title icon={FiUser}>About</Title>
            <div className="ps-4">
              <p
                className="mb-0 text-justify"
                style={{ fontSize: ".95rem", lineHeight: "1.6" }}
              >
                {payload?.careers?.[0]?.career || "No career information"}
              </p>
            </div>
          </Card>

          {/* Career Objective */}
          <Card className="border-0 p-0 mb-3">
            <Title icon={FiAward}>Career Objective</Title>
            <div className="ps-4">
              <p
                className="mb-0 text-justify"
                style={{ fontSize: ".95rem", lineHeight: "1.6" }}
              >
                {payload?.objective?.objective || "No objective provided."}
              </p>
            </div>
          </Card>
          <div className="mb-4">
            <Title icon={FiBookOpen}>Education</Title>
            {education.length ? (
              <ul className="small ps-4 text-start mb-0">
                {[...education]
                  .sort(
                    (a, b) => new Date(b?.ended || 0) - new Date(a?.ended || 0)
                  )
                  .map((edu, i) => {
                    const level = edu?.level?.education_level || "—";
                    const college = edu?.college?.college_name || "—";
                    const course = edu?.course?.course_name || "—";
                    const major = edu?.major?.name || "";
                    const started = formatMY(edu?.started);
                    const ended = formatMY(edu?.ended);
                    const attachmentUrl = edu?.attachment
                      ? `${cvUrl}/${edu.attachment}`
                      : null;

                    return (
                      <li key={i} className="mt-3">
                        <div className="d-flex justify-content-between">
                          <strong className="text-capitalize">{level}</strong>
                          <SmallMuted>
                            {started} – {ended}
                          </SmallMuted>
                        </div>
                        <div className="fw-semibold mt-1">{college}</div>
                        <SmallMuted>
                          {course}
                          {major ? (
                            <>
                              {" "}
                              • <em>{major}</em>
                            </>
                          ) : null}
                        </SmallMuted>
                        {attachmentUrl && (
                          <div className="mt-1">
                            <a
                              href={attachmentUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="link-light text-decoration-underline d-inline-flex align-items-center"
                            >
                              <FiExternalLink className="me-1" /> View
                              Attachment
                            </a>
                          </div>
                        )}
                      </li>
                    );
                  })}
              </ul>
            ) : (
              <SmallMuted className="ps-4">
                No education records available.
              </SmallMuted>
            )}
          </div>

          {/* Job Experience */}
          <Card className="border-0 p-0 mb-3">
            <Title icon={FiBriefcase}>Job Experience</Title>
            <div className="ps-4" style={{ fontSize: ".95rem" }}>
              {experiences.length ? (
                experiences.map((exp, i) => (
                  <div key={i} className="mb-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="fw-bold text-capitalize mb-1">
                        {exp?.position?.position_name || "Job Title"}
                      </h6>
                      <SmallMuted>
                        {exp?.start_date
                          ? new Date(exp.start_date).getFullYear()
                          : ""}{" "}
                        –{" "}
                        {exp?.end_date
                          ? new Date(exp.end_date).getFullYear()
                          : "Present"}
                      </SmallMuted>
                    </div>
                    <SmallMuted>
                      {exp?.employer?.employer_name || "—"}{" "}
                      {exp?.industry?.industry_name
                        ? `/ ${exp.industry.industry_name}`
                        : ""}
                    </SmallMuted>
                    <div>
                      <SmallMuted>
                        {exp?.employer?.region?.region_name || ""}{" "}
                        {exp?.employer?.sub_location
                          ? `, ${exp.employer.sub_location}`
                          : ""}
                      </SmallMuted>
                    </div>

                    {exp?.responsibility && (
                      <ul className="mb-0 mt-2 ps-3">
                        {exp.responsibility
                          .split("\n")
                          .map((t) => t.trim())
                          .filter(Boolean)
                          .map((t, k) => (
                            <li key={k} style={{ marginBottom: ".25rem" }}>
                              {t.replace(/^•\s*/, "")}
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                ))
              ) : (
                <p className="mb-0">No job experience added.</p>
              )}
            </div>
          </Card>

          {/* Referees */}
          <div className="mb-4">
            <h5
              className="fw-bold border-bottom pb-1 text-uppercase"
              style={{ fontSize: "1rem" }}
            >
              Referees
            </h5>

            {Array.isArray(referees) && referees.length > 0 ? (
              <ul className="mb-0 ps-3">
                {referees.map((r, i) => {
                  const fullName = [r.first_name, r.middle_name, r.last_name]
                    .filter(Boolean)
                    .join(" ");

                  return (
                    <li key={r.id ?? i} className="mt-2">
                      <div className="fw-semibold">{fullName || "—"}</div>

                      <ul className="small text-muted">
                        <li>Position: {r?.referee_position || "—"}</li>
                        <li>Employer: {r?.employer || "—"}</li>
                        <li>
                          Email:{" "}
                          {r?.email ? (
                            <a
                              href={`mailto:${r.email}`}
                              className="link-light text-decoration-underline"
                            >
                              {r.email}
                            </a>
                          ) : (
                            "—"
                          )}
                        </li>
                        <li>
                          Phone:{" "}
                          {r?.phone ? (
                            <a
                              href={`tel:${r.phone}`}
                              className="link-light text-decoration-underline"
                            >
                              {r.phone}
                            </a>
                          ) : (
                            "—"
                          )}
                        </li>
                      </ul>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mb-0 small text-muted">No referees added.</p>
            )}
          </div>

          {/* Skills & Endorsements */}
        </Col>

        {/* RIGHT SECTION */}
        <Col md={4} className="bg-dark text-light p-4">
          {/* Avatar */}
          <div className="text-center mb-4">
            <img
              src={
                profile?.picture
                  ? `${cvUrl}/${profile.picture}`
                  : "https://placehold.co/120x120?text=No+Photo"
              }
              alt="profile"
              className="rounded-circle border border-3 border-white"
              width="110"
              height="110"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://placehold.co/120x120?text=No+Photo")
              }
            />
          </div>

          {/* Languages */}
          <div className="small mb-4">
            <Title icon={FiGlobe}>Language</Title>
            <div className="ps-4 d-flex flex-wrap gap-2">
              {languages.length ? (
                languages.map((l, i) => (
                  <Badge key={i} bg="secondary">
                    {l?.language?.language_name}
                  </Badge>
                ))
              ) : (
                <SmallMuted>—</SmallMuted>
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="small mb-4">
            <Title icon={FiPhone}>Contact Me</Title>
            <ul className="ps-4 mb-0">
              <li className="mb-1">{phone}</li>
              <li className="mb-1">{email}</li>
              <li className="mb-1">{location}</li>
            </ul>
          </div>

          {/* Education */}
          <div className="border-0 p-0s">
            <Title icon={FiTag}>Skills</Title>
            <div className="ps-4">
              {/* Culture */}
              {!!culture.length && (
                <div className="mb-2 d-flex flex-column align-items-start gap-2 ">
                  <strong className="me-2">Culture Fit:</strong>
                  {culture.map((c, i) => (
                    <Badge key={i} bg="light" text="dark" className="border ">
                      {c?.culture?.culture_name}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Personality */}
              {!!personalities.length && (
                <div className="mb-2 d-flex flex-column align-items-start gap-2 flex-wrap">
                  <strong className="me-2">Personality:</strong>
                  {personalities.map((p, i) => (
                    <Badge key={i} bg="light" text="dark" className="border">
                      {p?.personality?.personality_name}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Software */}
              <div className="mb-2">
                <strong className="d-block mb-1">Software:</strong>

                <div className="d-flex flex-wrap gap-2">
                  {Array.isArray(software) && software.length ? (
                    software.map((s, i) => (
                      <Badge
                        key={s?.software?.id ?? i}
                        bg="light"
                        text="dark"
                        className="border"
                      >
                        {s?.software?.software_name}
                      </Badge>
                    ))
                  ) : (
                    <span className="text-muted small">No software added</span>
                  )}
                </div>
              </div>

              {/* Knowledge */}
              {!!knowledge.length && (
                <div className="mb-2 d-flex flex-column align-items-start gap-2">
                  <strong className="me-2">Skills:</strong>
                  <div className="d-flex flex-wrap gap-2">
                    {knowledge.map((k, i) => (
                      <Badge
                        key={i}
                        bg="light"
                        text="dark"
                        className="border font-sizf"
                      >
                        {k?.knowledge?.knowledge_name}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools */}
              {!!tools.length && (
                <div className="mb-2 d-flex flex-column align-items-start gap-2 flex-wrap">
                  <strong className="me-2">Tools</strong>
                  {tools.map((t, i) => (
                    <Badge key={i} bg="light" text="dark" className="border">
                      {t?.tool?.tool_name}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TemplateH;
