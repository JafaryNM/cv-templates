import React from "react";
import TemplateC from "./templates/Template_B";
import ErrorBoundary from "./ErrorBoundary";
import TemplateH from "./templates/Template_G";
import TemplateG from "./templates/Template_G";
import TemplateA from "./templates/Template_A";

export default function App() {
  return (
    <ErrorBoundary>
      <TemplateG />
    </ErrorBoundary>
  );
}
