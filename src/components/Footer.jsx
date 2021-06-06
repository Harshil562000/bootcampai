import React from "react";


function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <footer>
      <p><h3>copyright@{currYear}</h3></p>
    </footer>
  );
}
export default Footer;