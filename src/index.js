import React from "react";
import ReactDOM from "react-dom/client";
import Resume from "./Resume.tsx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ResumePDF } from "./resume/ResumePDF";

export const DownloadPDFButton = () => (
  <PDFDownloadLink
    style={{ color: "black" }}
    document={<ResumePDF />}
    fileName="Constanza_Mallea_Frontend_Developer_Dec2025_ATS.pdf"
  >
    Download ATS CV (PDF)
  </PDFDownloadLink>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Resume />
    <DownloadPDFButton />
  </React.StrictMode>
);
