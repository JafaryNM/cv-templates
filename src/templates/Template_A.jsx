// TemplateA.jsx
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Badge,
  ListGroup,
  ProgressBar,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiMail, FiPhone, FiMapPin, FiGlobe } from "react-icons/fi";

const BRAND = "#1756a5";
const BRAND_DARK = "#0e3668";
const PAPER = "#ffffff";
const INK = "#1f2937";

const TemplateA = () => {
  const contactInfo = {
    address: "Jacadine Jemicahina",
    phone: "+255 752 158",
    email: "m.mussa@email.com",
    website: "empower.co.tz",
  };

  const summary =
    "Customer-focused Retail Sales professional with strong marketing and service skills. 5+ years delivering quality recommendations, driving loyalty programs, and increasing sales through excellent communication and accurate POS operations.";

  const skills = [
    "Customer service operations",
    "POS systems",
    "Sales & upselling",
    "Teamwork",
    "Inventory management",
    "Marketing",
    "Cash handling",
    "Record keeping",
    "Retail merchandising",
  ];

  const skillLevels = [
    { name: "Customer Service", level: 95 },
    { name: "POS / Cashiering", level: 90 },
    { name: "Sales & Upselling", level: 85 },
    { name: "Inventory Control", level: 80 },
  ];

  const experiences = [
    {
      title: "Retail Sales Associate",
      company: "Reids General Store",
      period: "02/2017 – Current",
      location: "Monrovia of Jacadine – Jacadine, Tanzania",
      responsibilities: [
        "Maintained well-stocked shelves; cross-sold complementary products to raise basket size.",
        "Investigated and resolved customer concerns with integrity and attention to detail.",
        "Processed payments accurately and reconciled till to meet financial standards.",
      ],
    },
    {
      title: "Barista",
      company: "Seest Town Cafe",
      period: "01/2015 – 01/2017",
      location: "Jacadine, Tanzania",
      responsibilities: [
        "Managed morning rushes of 300+ customers with calm, efficient service.",
        "Trained staff on new smoothie lineup and standardized preparation.",
        "Created engaging product displays and coached customers on brewing methods.",
      ],
    },
    {
      title: "Cashier",
      company: "Majeetha Fast Food",
      period: "07/2014 – 12/2014",
      location: "Jacadine, Tanzania",
      responsibilities: [
        "Processed sales quickly and accurately to minimize wait times.",
        "Entered custom orders in POS, handled substitutions and add-ons.",
        "Kept prep and service areas clean and organized; closed registers and prepared deposits.",
      ],
    },
  ];

  const education = [
    {
      school: "Jacadine Business Institute",
      credential: "Diploma in Business & Marketing",
      year: "2014",
    },
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Swahili", level: "Native" },
  ];

  const interests = ["Community outreach", "Reading", "Football"];

  return (
    <Container
      fluid
      style={{
        width: "210mm",
