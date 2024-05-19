import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Button } from "./components/ui/button";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <h1 className="text-3-xl font-bold underline">HELLO World</h1>
    <Button>Click me</Button>
  </React.StrictMode>
);
