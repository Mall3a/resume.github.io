import React from "react"
import ReactDOM from "react-dom/client"
import { PDFDownloadLink } from "@react-pdf/renderer"

import Resume from "./Resume"
import { ResumePDF } from "./resume/ResumePDF"

const DownloadATSResume = () => (
  <PDFDownloadLink
    style={{ color: "black", display: "block", marginBottom: 12 }}
    document={<ResumePDF />}
    fileName="Constanza_Mallea_Frontend_Developer_Dec_2025_ATS.pdf"
  >
    Download ATS CV (PDF)
  </PDFDownloadLink>
)

const Root = () => (
  <>
    <div id="cv">
      <Resume />
    </div>
    <DownloadATSResume />
  </>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
