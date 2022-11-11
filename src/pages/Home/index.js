/* eslint-disable jsx-a11y/anchor-is-valid */
import "./home.css";
import { Social } from "../../components/Social";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Gabriel</h1>
      <span>Veja meus links 👇</span>

      <main className="links">
        <section className="link-area">
          <a href="#">
            <p className="link-text">Canal do YouTube</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Canal do YouTube</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Canal do YouTube</p>
          </a>
        </section>

        <footer>
          <Social url="https://www.fb.gg/uTwesport">
            <FaFacebook size={35} color="#FFF" />
          </Social>
          <Social url="https://www.instagram.com/vish_mura">
            <FaInstagram size={35} color="#FFF" />
          </Social>
          <Social url="https://www.youtube.com/@im4EV3R">
            <FaYoutube size={35} color="#FFF" />
          </Social>
        </footer>
      </main>
    </div>
  );
}
