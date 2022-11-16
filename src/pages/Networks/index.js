import { useState, useEffect } from "react";

import "./networks.css";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MdAddLink } from "react-icons/md";
import { toast } from "react-toastify";

import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

export default function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");

      getDoc(docRef)
        .then((snapshot) => {
          if (snapshot !== undefined) {
            setFacebook(snapshot.data().facebook);
            setInstagram(snapshot.data().instagram);
            setYoutube(snapshot.data().youtube);
          }
        })
        .catch((err) => {
          toast.error(
            "Houve um erro ao carregar seus dados, atualze a página por favor!",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        });
    }

    loadLinks();
  }, []);

  async function handleSave(e) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
    })
      .then(() => {
        toast.success("Links salvos com sucesso!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((err) => {
        toast.error("Houve um erro ao salvar, tente novamente!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  }

  return (
    <div className="admin-container">
      <Header />
      <h1 className="title-social">Suas redes sociais</h1>

      <form className="form" onSubmit={handleSave}>
        <label className="label">Link do Facebook</label>
        <Input
          placeholder="Digite a url do Facebook"
          type="url"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <label className="label">Link do Instagram</label>
        <Input
          placeholder="Digite a url do Instagram"
          type="url"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <label className="label">Link do YouTube</label>
        <Input
          placeholder="Digite a url do YouTube"
          type="url"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />
        <button type="submit" className="btn-register">
          Salvar Links <MdAddLink size={24} color="#FFF" />
        </button>
      </form>
    </div>
  );
}
