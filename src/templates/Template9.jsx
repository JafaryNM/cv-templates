// Template11.jsx — Split Sidebar + Diagonal Ribbon + Card Stacks
// Brand: #0468d7 | Font: Inter | Data model: Template1-compatible (moment + safe parsing)

import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Spinner,
  Alert,
  Badge,
} from "react-bootstrap";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiUser,
  FiBriefcase,
  FiBookOpen,
  FiTag,
} from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

const API = "https://ekazi.co.tz/api/cv/cv_builder/30750";
const CV_BASE = "https://ekazi.co.tz";

const BRAND = "#0468d7";
const BRAND_DARK = "#034aa0";
const BRAND_SOFT = "rgba(4,104,215,0.08)";

/* ================== Small Bits ================== */
const Chips = ({ items }) => {
  if (!items?.length) return <span className="text-muted">—</span>;
  return (
    <div className="d-flex flex-wrap gap-2">
      {items.map((txt, i) => (
        <span
          key={i}
          className="px-2 py-1 small chip"
          style={{
            background: "rgba(4,104,215,.08)",
            border: "1px solid rgba(4,104,215,.25)",
            color: BRAND_DARK,
            borderRadius: 999,
            transition:
              "transform 120ms ease, background 120ms ease, border-color 120ms ease",
          }}
        >
          {txt}
        </span>
      ))}
    </div>
  );
};

const SectionHead = ({ icon: Icon, title }) => (
  <div className="d-flex align-items-center gap-2 mb-3">
    <span className="dot" />
    <Icon size={16} color={BRAND_DARK} />
    <h5 className="mb-0" style={{ color: BRAND_DARK }}>
      {title}
    </h5>
    <div className="flex-grow-1" />
    <div className="line" />
  </div>
);

/* Experience Card with subtle left accent */
const ExpCard = ({ title, meta, period, bullets }) => (
  <Card className="exp-card border-0 shadow-sm mb-3">
    <Card.Body className="p-3">
      <div className="d-flex justify-content-between align-items-start">
        <div className="pe-3">
          <div className="fw-semibold" style={{ color: BRAND_DARK }}>
            {title}
          </div>
          {meta ? <div className="small text-muted">{meta}</div> : null}
        </div>
        {period ? (
          <Badge bg="light" text="dark" className="border">
            {period}
          </Badge>
        ) : null}
      </div>
      {bullets?.length ? (
        <ul className="small mb-0 mt-2 ps-3">
          {bullets.map((b, i) => (
            <li key={i} className="lh-base text-muted">
              {b}
            </li>
          ))}
        </ul>
      ) : null}
    </Card.Body>
  </Card>
);

/* ================== Component ================== */
const Template9 = () => {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((json) => {
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

  /* ===== Safe Extract ===== */
  const profiles = Array.isArray(payload?.applicant_profile)
    ? payload.applicant_profile
    : [];
  const personalities = Array.isArray(payload?.applicant_personality)
    ? payload.applicant_personality
    : [];
  const experiences = Array.isArray(payload?.experience)
    ? payload.experience
    : [];
  const referees = Array.isArray(payload?.referees) ? payload.referees : [];
  const languages = Array.isArray(payload?.language) ? payload.language : [];
  const users = Array.isArray(payload?.user) ? payload.user : [];
  const addresses = Array.isArray(payload?.address) ? payload.address : [];
  const education = Array.isArray(payload?.education) ? payload.education : [];
  const skills = Array.isArray(payload?.knowledge) ? payload.knowledge : [];
  const software = Array.isArray(payload?.software) ? payload.software : [];
  const tools = Array.isArray(payload?.tools) ? payload.tools : [];
  const culture = Array.isArray(payload?.culture) ? payload.culture : [];

  const fullName = (() => {
    const p = profiles[0] || {};
    const name = `${p?.first_name || ""} ${p?.middle_name || ""} ${
      p?.last_name || ""
    }`
      .replace(/\s+/g, " ")
      .trim();
    return name || "—";
  })();

  const currentTitle =
    payload?.current_position ||
    payload?.experience?.[0]?.position?.position_name ||
    "—";

  const summary =
    payload?.careers?.[0]?.career ||
    payload?.objective?.objective ||
    "Professional summary not provided.";

  const primaryEmail = users?.[0]?.email || payload?.email?.email || "—";
  const primaryPhone =
    payload?.phone?.phone_number ||
    payload?.phone?.number ||
    users?.[0]?.phone ||
    "—";
  const primaryAddress = addresses?.[0]
    ? `${addresses[0]?.region_name || ""}${
        addresses[0]?.name ? ", " + addresses[0]?.name : ""
      }`.replace(/^,\s*/, "")
    : "—";

  /* ===== Transforms ===== */
  const work = experiences
    .slice()
    .sort((a, b) => {
      const bEnd = moment(b?.end_date);
      const bStart = moment(b?.start_date);
      const aEnd = moment(a?.end_date);
      const aStart = moment(a?.start_date);
      const bKey = (bEnd.isValid() ? bEnd : bStart).valueOf() || 0;
      const aKey = (aEnd.isValid() ? aEnd : aStart).valueOf() || 0;
      return bKey - aKey;
    })
    .map((e) => {
      const start = moment(e?.start_date);
      const end = moment(e?.end_date);
      const period =
        (start.isValid() ? start.format("MMM YYYY") : "") +
        " – " +
        (end.isValid() ? end.format("MMM YYYY") : "Present");
      return {
        title: e?.position?.position_name || e?.title || "—",
        company:
          e?.employer?.employer_name || e?.company || e?.organization || "—",
        industry: e?.industry?.industry_name || "",
        location: `${e?.employer?.region?.region_name || ""}${
          e?.employer?.sub_location ? ", " + e?.employer?.sub_location : ""
        }`.replace(/^,\s*/, ""),
        period,
        bullets: (e?.responsibility || "")
          .split("\n")
          .map((t) => t.trim().replace(/^•\s*/, ""))
          .filter(Boolean),
      };
    });

  const eduVM = education
    .slice()
    .sort((a, b) => {
      const bEnd = moment(b?.ended || b?.end_date);
      const bStart = moment(b?.started || b?.start_date);
      const aEnd = moment(a?.ended || a?.end_date);
      const aStart = moment(a?.started || a?.start_date);
      const bKey = (bEnd.isValid() ? bEnd : bStart).valueOf() || 0;
      const aKey = (aEnd.isValid() ? aEnd : aStart).valueOf() || 0;
      return bKey - aKey;
    })
    .map((ed) => {
      const start = moment(ed?.started || ed?.start_date);
      const end = moment(ed?.ended || ed?.end_date);
      return {
        school:
          ed?.college?.college_name || ed?.institution || ed?.school || "—",
        course:
          ed?.course?.course_name ||
          ed?.qualification?.qualification ||
          ed?.degree ||
          "—",
        years:
          (start.isValid() ? start.format("YYYY") : "") +
          (start.isValid() || end.isValid() ? " - " : "") +
          (end.isValid()
            ? end.format("YYYY")
            : start.isValid()
            ? "Present"
            : ""),
      };
    });

  const chipsCulture = culture
    .map((c) => c?.culture?.culture_name || c?.culture_name || c?.name)
    .filter(Boolean);
  const chipsPersonality = personalities
    .map((p) => p?.personality?.personality_name)
    .filter(Boolean);
  const chipsSoftware = software
    .map((s) => s?.software?.software_name || s?.software_name)
    .filter(Boolean);
  const chipsSkills = skills
    .map((k) => k?.knowledge?.knowledge_name || k?.knowledge_name)
    .filter(Boolean);
  const chipsTools = tools
    .map((t) => t?.tool?.tool_name || t?.tool_name)
    .filter(Boolean);

  /* ================== Render ================== */
  return (
    <Container
      fluid
      className="p-0"
      style={{
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      }}
    >
      {/* Inter Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Scoped Styles — fundamentally different layout (split sidebar + diagonal ribbon) */}
      <style>{`
        :root {
          --brand: ${BRAND};
          --brandDark: ${BRAND_DARK};
          --brandSoft: ${BRAND_SOFT};
        }

        .ribbon {
          position: relative;
          isolation: isolate;
          background: linear-gradient(90deg, var(--brand), var(--brandDark));
          min-height: 160px;
          color: #fff;
          overflow: hidden;
        }
        .ribbon::after {
          content: "";
          position: absolute;
          inset: 0 -20% 0 0;
          transform: skewX(-18deg);
          background: radial-gradient(800px 260px at 10% 0%, rgba(255,255,255,.15), transparent 60%);
          opacity: .9;
          pointer-events: none;
        }

        .main-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }

        /* Sticky left sidebar card */
        .leftbar {
          position: relative;
          top: -70px;
        }
        @media (min-width: 992px) {
          .leftbar-sticky {
            position: sticky;
            top: 24px;
          }
        }

        .avatar-card {
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 16px 30px rgba(0,0,0,.08);
        }
        .avatar-band {
          height: 10px; background: #fff;
        }
        .avatar-photo {
          width: 100%;
          height: 280px;
          object-fit: cover; /* NO opacity */
          display: block;
        }

        .name-block {
          border-radius: 16px;
          background: #fff;
          color: #111;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 10px 20px rgba(0,0,0,.06);
        }

        .soft {
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 8px 20px rgba(0,0,0,.06);
          border-radius: 14px;
        }

        .dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: var(--brand);
          display: inline-block;
        }
        .line {
          width: 80px; height: 3px; background: var(--brand); border-radius: 3px;
        }

        .chip:hover {
          transform: translateY(-1px);
          background: rgba(4,104,215,.12);
          border-color: rgba(4,104,215,.35);
        }

        /* Experience card left accent */
        .exp-card {
          position: relative;
        }
        .exp-card::before {
          content: "";
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
          background: var(--brand);
          opacity: .9;
        }

        /* Grids */
        .triple-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 768px) {
          .triple-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1200px) {
          .triple-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
      `}</style>

      {/* ===== Top Ribbon ===== */}
      <div className="ribbon d-flex align-items-end">
        <div className="main-wrap w-100 pb-4">
          <Row className="align-items-end">
            <Col lg={7} className="text-white">
              <div className="text-uppercase small" style={{ opacity: 0.95 }}>
                {currentTitle}
              </div>
              <h1 className="fw-bold mb-1">{fullName}</h1>
              <div
                className="small d-flex flex-wrap gap-3"
                style={{ opacity: 0.95 }}
              >
                <span>
                  <FiPhone /> {primaryPhone}
                </span>
                <span>
                  <FiMail /> {primaryEmail}
                </span>
                <span>
                  <FiMapPin /> {primaryAddress}
                </span>
                <span>
                  <FiGlobe /> www.yourwebsite.com
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* ===== Body (Split: Sidebar | Content) ===== */}
      <div className="main-wrap">
        <Row className="g-4">
          {/* Left Sidebar (sticky) */}
          <Col lg={4} className="leftbar">
            <div className="leftbar-sticky">
              <Card className="avatar-card mb-3">
                <div className="avatar-band" />
                <Image
                  className="avatar-photo"
                  src={
                    profiles?.[0]?.picture
                      ? `${CV_BASE}/${profiles[0].picture}`
                      : "https://placehold.co/600x800?text=Photo"
                  }
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://placehold.co/600x800?text=Photo")
                  }
                  alt="Profile"
                />
              </Card>

              <Card className="name-block mb-3">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="dot" />
                    <h5 className="mb-0">About</h5>
                  </div>
                  <p className="small text-muted mb-0">{summary}</p>
                </Card.Body>
              </Card>

              <Card className="soft mb-3">
                <Card.Body className="p-4">
                  <SectionHead icon={FiMail} title="Contact" />
                  <ul className="small ps-0 mb-0" style={{ listStyle: "none" }}>
                    <li className="mb-1">
                      <FiPhone /> {primaryPhone}
                    </li>
                    <li className="mb-1">
                      <FiMail /> {primaryEmail}
                    </li>
                    <li className="mb-1">
                      <FiMapPin /> {primaryAddress}
                    </li>
                    <li>
                      <FiGlobe /> www.yourwebsite.com
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className="soft mb-3">
                <Card.Body className="p-4">
                  <SectionHead icon={FiGlobe} title="Languages" />
                  <ul className="small ps-3 mb-0">
                    {languages?.length ? (
                      languages.map((l, i) => (
                        <li key={i}>{l?.language?.language_name || "—"}</li>
                      ))
                    ) : (
                      <li>—</li>
                    )}
                  </ul>
                </Card.Body>
              </Card>

              <Card className="soft">
                <Card.Body className="p-4">
                  <SectionHead icon={FiTag} title="Skills & Profile" />
                  <div className="small text-muted mb-1">Culture Fit</div>
                  <Chips items={chipsCulture} />

                  <div className="small text-muted mt-3 mb-1">Personality</div>
                  <Chips items={chipsPersonality} />

                  <div className="small text-muted mt-3 mb-1">Software</div>
                  <Chips items={chipsSoftware} />

                  <div className="small text-muted mt-3 mb-1">Skills</div>
                  <Chips items={chipsSkills} />

                  <div className="small text-muted mt-3 mb-1">Tools</div>
                  <Chips items={chipsTools} />
                </Card.Body>
              </Card>
            </div>
          </Col>

          {/* Right Content */}
          <Col lg={8}>
            {/* Experience Stack */}
            <Card className="soft mb-4">
              <Card.Body className="p-4">
                <SectionHead icon={FiBriefcase} title="Experience" />
                {work?.length ? (
                  work.map((w, i) => (
                    <ExpCard
                      key={i}
                      title={`${w.title} — ${w.company}`}
                      meta={[w.industry, w.location]
                        .filter(Boolean)
                        .join(" / ")}
                      period={w.period}
                      bullets={w.bullets}
                    />
                  ))
                ) : (
                  <p className="text-muted small mb-0">
                    No job experience added.
                  </p>
                )}
              </Card.Body>
            </Card>

            {/* Education + Referees mosaic */}
            <div className="triple-grid">
              <Card className="soft">
                <Card.Body className="p-4">
                  <SectionHead icon={FiBookOpen} title="Education" />
                  {eduVM?.length ? (
                    <div className="d-flex flex-column gap-2">
                      {eduVM.map((ed, i) => (
                        <Card key={i} className="border-0 shadow-sm">
                          <Card.Body className="p-3">
                            <div className="d-flex justify-content-between align-items-start">
                              <div>
                                <div
                                  className="fw-semibold"
                                  style={{ color: BRAND_DARK }}
                                >
                                  {ed.course}
                                </div>
                                <div className="small text-muted">
                                  {ed.school}
                                </div>
                              </div>
                              <Badge bg="light" text="dark" className="border">
                                {ed.years}
                              </Badge>
                            </div>
                          </Card.Body>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted small mb-0">
                      No education records available.
                    </p>
                  )}
                </Card.Body>
              </Card>

              <Card className="soft">
                <Card.Body className="p-4">
                  <SectionHead icon={FiUser} title="Referees" />
                  {referees?.length ? (
                    <div className="d-flex flex-column gap-2">
                      {referees.map((r, i) => {
                        const name = [
                          r?.first_name,
                          r?.middle_name,
                          r?.last_name,
                        ]
                          .filter(Boolean)
                          .join(" ");
                        return (
                          <Card key={i} className="border-0 shadow-sm">
                            <Card.Body className="p-3">
                              <div
                                className="fw-semibold"
                                style={{ color: BRAND_DARK }}
                              >
                                {name || "—"}
                              </div>
                              <div className="small text-muted mb-1">
                                {r?.referee_position || "—"} •{" "}
                                {r?.employer || "—"}
                              </div>
                              <div className="small">{r?.email || "—"}</div>
                              <div className="small">{r?.phone || "—"}</div>
                            </Card.Body>
                          </Card>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-muted small mb-0">No referees added.</p>
                  )}
                </Card.Body>
              </Card>

              {/* Quick Facts / Highlights */}
              <Card className="soft">
                <Card.Body className="p-4">
                  <SectionHead icon={FiTag} title="Highlights" />
                  <ul className="small text-muted mb-0 ps-3">
                    <li>
                      Results-oriented professional with strong collaboration
                      skills.
                    </li>
                    <li>
                      Comfortable with modern tools and rapid environments.
                    </li>
                    <li>Committed to continuous learning and impact.</li>
                  </ul>
                </Card.Body>
              </Card>
            </div>

            {/* Footer Accent */}
            <div className="py-4">
              <div
                className="mx-auto"
                style={{
                  maxWidth: 220,
                  height: 8,
                  background: BRAND,
                  borderRadius: 8,
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Template9;
