import React, {useState, useEffect} from "react";
import api from "../api";
function Musicas() {
  
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

  return(
    <>
      <h2>Lista de músicas</h2>
      {
        listaMusicas.map(musicaAtual => (
          <div key={musicaAtual.id}>
            <h2>Nome: {musicaAtual.nome}</h2>
            <h2>Artista: {musicaAtual.artista}</h2>
          </div>
        ))
      }
    </>
  );
}

export default Musicas;