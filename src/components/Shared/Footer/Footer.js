import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="col-sm-12 col-md-12">
        <h2>
          <span className="footer-name">Ahammed</span>{" "}
          <small>Furniture Warehouse</small>
        </h2>

        <p>
          <small>
            &copy; 2022 Ahammed furniture warehouse All rights reserved
          </small>
        </p>
        <p>
          <small>Phone: +1 718-515-9346</small>
        </p>
        <p>
          <small>
            Address:3204 Bainbridge Ave, Bronx, NY 10467, United States
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
