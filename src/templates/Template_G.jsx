// TemplateA.jsx
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Badge,
  ListGroup,
  Spinner,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiLinkedin,
  FiUser,
} from "react-icons/fi";

const API = "https://ekazi.co.tz/api/cv/cv_builder/30750";
const CV_BASE = "https://ekazi.co.tz";

// BRAND COLORS
const BRAND = "#d36314";
const BRAND_DARK = "#933a07";
const BRAND_SOFT = "#fde6d8";
const PAPER = "#ffffff";
const INK = "#111827";
const INK_MUTED = "#6b7280";

export default function TemplateA() {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(API)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((j) => {
        setPayload(j?.data || {});
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message || "Failed to load profile");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "60vh" }}
      >
        <Spinner animation="border" role="status" />
        <span className="ms-3">Loading CV…</span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="container py-4">
        <Alert variant="danger" className="mb-0">
          {error}
        </Alert>
      </div>
    );
  }

  // Safe data
  const profiles = Array.isArray(payload?.applicant_profile)
    ? payload.applicant_profile
    : [];
  const profile = profiles[0] || {};
  const user = Array.isArray(payload?.user)
    ? payload.user[0]
    : payload?.user?.[0] || {};
  const experiences = Array.isArray(payload?.experience)
    ? payload.experience
    : [];
  const education = Array.isArray(payload?.education) ? payload.education : [];
  const languages = Array.isArray(payload?.language) ? payload.language : [];
  const knowledge = Array.isArray(payload?.knowledge) ? payload.knowledge : [];
  const software = Array.isArray(payload?.software) ? payload.software : [];
  const referees = Array.isArray(payload?.referees) ? payload.referees : [];
  const addresses = Array.isArray(payload?.address) ? payload.address : [];
  const culture = Array.isArray(payload?.culture) ? payload.culture : [];

  const fullName =
    `${profile?.first_name || ""} ${profile?.middle_name || ""} ${
      profile?.last_name || ""
    }`
      .replace(/\s+/g, " ")
      .trim() || "—";

  const currentTitle =
    payload?.current_position ||
    payload?.experience?.[0]?.position?.position_name ||
    "—";

  const summary =
    payload?.careers?.[0]?.career ||
    payload?.objective?.objective ||
    "Professional summary not provided.";

  const phone =
    payload?.phone?.phone_number ||
    payload?.phone?.number ||
    user?.phone ||
    "—";
  const email = user?.email || payload?.email?.email || "—";
  const address0 = addresses?.[0];
  const location = address0
    ? `${address0?.region_name || ""}${
        address0?.name ? ", " + address0.name : ""
      }`
    : "—";
  const linkedin = payload?.socials?.linkedin || "";
  const website = payload?.socials?.website || "";

  const splitLines = (text = "") =>
    text
      .split("\n")
      .map((t) => t.replace(/^•\s*/, "").trim())
      .filter(Boolean);

  const work = experiences.map((e) => ({
    title: e?.position?.position_name || e?.title || "—",
    company: e?.employer?.employer_name || e?.company || e?.organization || "—",
    location: e?.location || "",
    period: `${formatMY(e?.start_date)} – ${
      formatMY(e?.end_date) || "Present"
    }`,
    bullets: splitLines(e?.responsibility || ""),
  }));

  return (
    <Container
      fluid
      style={{
        width: "210mm",
        minHeight: "297mm",
        margin: "auto",
        backgroundColor: PAPER,
        color: INK,
        boxShadow: "0 0 6px rgba(0,0,0,.15)",
        borderRadius: 8,
        overflow: "hidden",
      }}
      className="mb-4"
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <Row className="g-0">
        <Col xs={12}>
          <div
            className="position-relative"
            style={{
              background: `linear-gradient(90deg, ${BRAND}, ${BRAND_DARK})`,
              height: 150,
            }}
          >
            <div
              className="position-absolute"
              style={{ left: 28, bottom: 24, right: 180 }}
            >
              <div
                className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill"
                style={{ background: "rgba(255,255,255,.15)", color: "#fff" }}
              >
                <FiUser />
                <span className="small">Curriculum Vitae</span>
              </div>
              <h1
                className="m-0 fw-bold"
                style={{ color: "#fff", letterSpacing: ".3px" }}
              >
                {fullName}
              </h1>
              <div className="text-white-50">{currentTitle}</div>
            </div>
            <div className="position-absolute" style={{ right: 24, top: 15 }}>
              <Image
                src={
                  profile?.picture
                    ? `${CV_BASE}/${profile.picture}`
                    : "https://placehold.co/128x128?text=Photo"
                }
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://placehold.co/128x128?text=Photo")
                }
                width={128}
                height={128}
                className="border border-3 border-white shadow"
                style={{
                  borderRadius: 16,
                  objectFit: "cover",
                  background: "#fff",
                }}
                alt="profile"
              />
            </div>
          </div>
        </Col>
      </Row>

      <Row className="g-0">
        {/* Main */}
        <Col md={8} className="p-4 border-end">
          <SectionTitle>Summary</SectionTitle>
          <p
            className="small"
            style={{ color: INK_MUTED, textAlign: "justify" }}
          >
            {summary}
          </p>

          <SectionTitle className="mt-4">Work Experience</SectionTitle>
          {work.length ? (
            <div className="d-grid gap-3">
              {work.map((exp, i) => (
                <Card
                  key={i}
                  className="border-0 shadow-sm"
                  style={{ borderRadius: 10 }}
                >
                  <Card.Body className="p-3">
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                      <div>
                        <div
                          className="fw-bold"
                          style={{ color: BRAND_DARK, lineHeight: 1.1 }}
                        >
                          {exp.title}
                        </div>
                        <div className="text-muted">{exp.company}</div>
                        {exp.location ? (
                          <div className="text-muted small">{exp.location}</div>
                        ) : null}
                      </div>
                      <Badge bg="light" className="text-dark border">
                        {exp.period}
                      </Badge>
                    </div>
                    {exp.bullets?.length ? (
                      <ul className="mb-0 mt-2 ps-3">
                        {exp.bullets.map((b, k) => (
                          <li
                            key={k}
                            className="small"
                            style={{ color: INK_MUTED }}
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </Card.Body>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-muted">—</div>
          )}

          <SectionTitle className="mt-4">Education</SectionTitle>
          {education.length ? (
            <Card className="border-0 shadow-sm">
              <div
                className="position-relative text-white"
                style={{ background: BRAND }}
              >
                <Row className="g-0 fw-semibold">
                  <Col xs={6} className="px-3 py-2 border-end">
                    School/College
                  </Col>
                  <Col xs={4} className="px-3 py-2 border-end">
                    Course/Degree
                  </Col>
                  <Col xs={2} className="px-3 py-2">
                    Year
                  </Col>
                </Row>
              </div>
              <div>
                {education
                  .slice()
                  .sort(
                    (a, b) => new Date(b?.ended || 0) - new Date(a?.ended || 0)
                  )
                  .map((ed, i) => (
                    <Row key={i} className="g-0 border-top">
                      <Col xs={6} className="px-3 py-2">
                        {ed?.college?.college_name || ed?.institution || "—"}
                      </Col>
                      <Col xs={4} className="px-3 py-2">
                        {ed?.course?.course_name || ed?.degree || "—"}
                      </Col>
                      <Col xs={2} className="px-3 py-2">
                        {formatY(ed?.ended) || formatY(ed?.started) || "—"}
                      </Col>
                    </Row>
                  ))}
              </div>
            </Card>
          ) : (
            <div className="text-muted">—</div>
          )}
        </Col>

        {/* Sidebar */}
        <Col md={4} className="p-4" style={{ background: "#fafafa" }}>
          <SectionTitle>Contact</SectionTitle>
          <ListGroup variant="flush" className="small">
            <ContactItem icon={<FiMapPin />} text={location} />
            <ContactItem icon={<FiPhone />} text={phone} />
            <ContactItem icon={<FiMail />} text={email} />
            {website && <ContactItem icon={<FiGlobe />} text={website} />}
            {linkedin && <ContactItem icon={<FiLinkedin />} text={linkedin} />}
          </ListGroup>

          <SectionTitle className="mt-4">Skills</SectionTitle>
          {knowledge.length ? (
            <BulletList
              items={knowledge.map((k) => k?.knowledge?.knowledge_name)}
            />
          ) : (
            <div className="text-muted small">—</div>
          )}
          {software.length ? (
            <>
              <div
                className="fw-semibold small mt-3"
                style={{ color: BRAND_DARK }}
              >
                Software
              </div>
              <BulletList
                items={software.map((s) => s?.software?.software_name)}
              />
            </>
          ) : null}

          <SectionTitle className="mt-4">Languages</SectionTitle>
          {languages.length ? (
            <BulletList
              items={languages.map((l) => l?.language?.language_name)}
            />
          ) : (
            <div className="text-muted small">—</div>
          )}

          <SectionTitle className="mt-4">Culture Fit</SectionTitle>
          {culture.length ? (
            <ChipList items={culture.map((c) => c?.culture?.culture_name)} />
          ) : (
            <ChipList items={["Teamwork", "Integrity", "Customer-first"]} />
          )}

          {referees.length ? (
            <>
              <SectionTitle className="mt-4">Referees</SectionTitle>
              <div className="d-grid gap-2">
                {referees.map((r, i) => {
                  const nm = [r.first_name, r.middle_name, r.last_name]
                    .filter(Boolean)
                    .join(" ");
                  return (
                    <Card
                      key={r.id ?? i}
                      className="border-0 border-start"
                      style={{ borderLeftColor: BRAND, borderLeftWidth: 3 }}
                    >
                      <Card.Body className="py-2 px-3">
                        <div className="fw-semibold">{nm || "—"}</div>
                        <div className="text-muted small">
                          {r?.referee_position || "—"}
                        </div>
                        <div className="small">{r?.employer || "—"}</div>
                        <div className="small">Tel: {r?.phone || "—"}</div>
                        <div className="small">Email: {r?.email || "—"}</div>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </>
          ) : null}
        </Col>
      </Row>

      <style>{`
        body { font-family:"Poppins",sans-serif }
      `}</style>
    </Container>
  );
}

/* Helpers */
function SectionTitle({ children, className = "" }) {
  return (
    <div className={`d-flex align-items-center mb-2 ${className}`}>
      <span
        style={{
          width: 6,
          height: 20,
          background: BRAND,
          borderRadius: 4,
          marginRight: 6,
        }}
      />
      <h3 className="h6 fw-bold m-0" style={{ color: BRAND_DARK }}>
        {children}
      </h3>
    </div>
  );
}
function ContactItem({ icon, text }) {
  return (
    <ListGroup.Item className="px-0 d-flex align-items-center gap-2 bg-transparent border-0">
      <span
        className="d-inline-grid place-items-center rounded-circle"
        style={{ width: 28, height: 28, background: BRAND_SOFT, color: BRAND }}
      >
        {icon}
      </span>
      <span>{text}</span>
    </ListGroup.Item>
  );
}
function BulletList({ items = [] }) {
  return (
    <ul className="list-unstyled small mb-0">
      {items.map((t, i) => (
        <li key={i} className="mb-1 d-flex align-items-start">
          <span
            className="me-2 mt-1"
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: BRAND,
            }}
          />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
function ChipList({ items = [] }) {
  return (
    <div className="d-flex flex-wrap gap-2">
      {items.map((t, i) => (
        <span
          key={i}
          className="badge"
          style={{
            background: BRAND_SOFT,
            color: BRAND_DARK,
            border: `1px solid ${BRAND}55`,
          }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}
function formatMY(d) {
  return d
    ? new Date(d).toLocaleDateString("en-GB", {
        month: "short",
        year: "numeric",
      })
    : "";
}
function formatY(d) {
  return d ? new Date(d).getFullYear() : "";
}
