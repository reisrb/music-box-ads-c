import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import ItemMusica from "../components/ItemMusica";

function Musicas() {
  const navigate = useNavigate();

  const [listaMusicas, setListaMusicas] = useState([]);

  useEffect(() => {
    api.get().then(res => {
      console.log("dados:", res.data);
      console.log("status code:", res.status);
      setListaMusicas(res.data);
    }).catch(erro => {
      console.log(erro);
    })
  }, [])

  return (
    <>
    

      <div className="container">
        <div className="filter">
          <button className="btn" onClick={() => navigate("/adicionar")}>Adicionar</button>
        </div>
      </div>

      <div className="container">
        <div className="music-boxes">

          {
            listaMusicas.map(musicaAtual => (
              // <React.Fragment key={musicaAtual.id}>
                <ItemMusica
                  musica={musicaAtual.nome}
                  artista={musicaAtual.artista}
                  ano={musicaAtual.ano}
                  categoria={musicaAtual.genero}
                  capa={musicaAtual.imagem}
                  id={musicaAtual.id}
                  key={musicaAtual.id}
                />
              // </React.Fragment>
            ))
          }

        </div>
      </div>
    </>
  );
}

export default Musicas;