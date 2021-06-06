import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Notes from "./components/Notes";
import Noted from "./components/Noted";

ReactDom.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
ReactDom.render(
  <div>
    <Footer />
  </div>,
  document.getElementById("footer")
);

ReactDom.render(
  <div>
    <Note />
  </div>,
  document.getElementById("note")
);

ReactDom.render(
  <div>
    <Notes />
  </div>,
  document.getElementById("notes")
);

ReactDom.render(
  <div>
    <Noted />
  </div>,
  document.getElementById("noted")
);
