/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import "./home.css";

import {
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

import { Social } from "../../components/Social";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Home() {
  const [links, setLinks] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));

      getDocs(queryRef).then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.data().id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color,
          });
        });
        setLinks(lista);
      });
    }

    loadLinks();
  }, []);

  useEffect(() => {
    function socialLinks() {
      const docRef = doc(db, "social", "link");

      getDoc(docRef)
        .then((snapshot) => {
          if (snapshot.data() !== undefined) {
            setSocialLinks({
              facebook: snapshot.data().facebook,
              instagram: snapshot.data().instagram,
              youtube: snapshot.data().youtube,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    socialLinks();
  }, []);

  return (
    <div className="home-container">
      <h1>Gabriel</h1>
      <span>Veja meus links 👇</span>

      <main className="links">
        {links.map((item, index) => (
          <section
            key={index}
            className="link-area"
            style={{ backgroundColor: item.bg }}
          >
            <a href={item.url} target="_blank" rel="noreferrer">
              <p className="link-text" style={{ color: item.color }}>
                {item.name}
              </p>
            </a>
          </section>
        ))}

        {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <footer>
            <Social url={socialLinks?.facebook}>
              <FaFacebook size={35} color="#FFF" />
            </Social>
            <Social url={socialLinks?.instagram}>
              <FaInstagram size={35} color="#FFF" />
            </Social>
            <Social url={socialLinks?.youtube}>
              <FaYoutube size={35} color="#FFF" />
            </Social>
          </footer>
        )}
      </main>
    </div>
  );
}
