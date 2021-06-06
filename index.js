import React from "react";
import ReactDom from "react-dom";
import App from "App";
import Footer from "Footer";
import Note from "Note";
import Notes from "Notes";
import Noted from "Noted";

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
