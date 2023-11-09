import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>© {year} Green Note</p>
    </footer>
  );
}

export default Footer;
