import React from "react";
import TemplateC from "./templates/Template_BI";
import ErrorBoundary from "./ErrorBoundary";

import TemplateA from "./templates/Template_A";

import Template1 from "./templates/Template1";
import Template2 from "./templates/Template_2";
import Template3 from "./templates/Template_3";
import Template5 from "./templates/template5";
import Template4 from "./templates/Template_A";
import Template6 from "./templates/Template6";
import Template7 from "./templates/Template7";
import Template8 from "./templates/Template8";
import Template9 from "./templates/Template9";

export default function App() {
  return (
    <ErrorBoundary>
      <Template7 />
    </ErrorBoundary>
  );
}
