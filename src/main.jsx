import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Card from "./projects/faq_collapse/faq";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Card />
  </StrictMode>
);
