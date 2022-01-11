import React from "react";
import youtube from "../assets/icons/youtube.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";

export function Footer() {
  return (
    <footer className="footer">
      <h4>Marika Lunk &copy; 2022</h4>
      <ul>
        <li>
          <a href="#" title='youtube'>
            <img src={youtube} alt="youtube" />
          </a>
        </li>
        <li>
          <a href="#" title='twitter'>
            <img src={twitter} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="#" title='instagram'>
            <img src={instagram} alt="instagram" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
