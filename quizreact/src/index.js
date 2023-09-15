import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Quiz from "./Quiz";
import Col from "react-bootstrap/esm/Col";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
 <Container className="mt-3">
   
        <Quiz />
 </Container>
);