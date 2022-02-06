import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
function Footer() {
  return (
    <div className="footer">
      Made with &nbsp; <span className="footer__heart">❤</span> &nbsp; by
      Shashi. Get Code on &nbsp;
      <Link
        to={`https://github.com/unknownBalak/clothsstore`}
        style={{ fontSize: "14px" }}
      >
        GITHUB
      </Link>
    </div>
  );
}

export default Footer;
