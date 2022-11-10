import React, { useState } from "react";

import editIcon from "../assets/imagens/edit-icon.png";
import deleteIcon from "../assets/imagens/delete-icon.png";
import capaPadrao from "../assets/imagens/capa.png";

import api from "../api";

function ItemMusica(props) {
  const [editavel, setEditavel] = useState(false);
  const [nomeInput, setNomeInput] = useState(props.musica);
  const [artistaInput, setArtistaInput] = useState(props.artista);
  const [categoriaInput, setCategoriaInput] = useState(props.categoria);
  const [anoInput, setAnoInput] = useState(props.ano);
  const [imagemInput, setImagemInput] = useState(props.capa);

  const estilo = {
    backgroundImage: `url(${props.capa ? props.capa : capaPadrao})`
  };

  function editar() {
    const musicaAtualizada = {
      nome: nomeInput,
      artista: artistaInput,
      genero: categoriaInput,
      ano: anoInput,
      imagem: imagemInput
    };

    api
      .put(`/${props.id}`, musicaAtualizada)
      .then((res) => {
        alert("Musica atualizada com sucesso!");
        setEditavel(false);
      })
      .catch((erro) => {
        alert("Deu erro, se vira!");
      });
  }

  return (
    <>
      <div className="card-music" style={estilo}>
        <div className="icons">
          <img src={editIcon} alt="" onClick={() => setEditavel(!editavel)} />

          <img
            src={deleteIcon}
            alt=""
      onClick={() => props.funcaoDeletar(props.id)}
          />
        </div>
        <div className="info-music">
          <p>
            <strong className="card-title">música: </strong>
            <input
              className={
                editavel ? "input-music-enable" : "input-music-disabled"
              }
              disabled={!editavel}
              type="text"
              defaultValue={nomeInput}
              onChange={(e) => setNomeInput(e.target.value)}
            />
          </p>
          <p>
            <strong className="card-title">artista: </strong>
            <input
              className={
                editavel ? "input-music-enable" : "input-music-disabled"
              }
              disabled={!editavel}
              type="text"
              defaultValue={artistaInput}
              onChange={(e) => setArtistaInput(e.target.value)}
            />
          </p>
          <p>
            <strong className="card-title">categoria: </strong>
            <input
              className={
                editavel ? "input-music-enable" : "input-music-disabled"
              }
              disabled={!editavel}
              type="text"
              defaultValue={categoriaInput}
              onChange={(e) => setCategoriaInput(e.target.value)}
            />
          </p>
          <p>
            <strong className="card-title">ano: </strong>
            <input
              className={
                editavel ? "input-music-enable" : "input-music-disabled"
              }
              disabled={!editavel}
              type="text"
              defaultValue={anoInput}
              onChange={(e) => setAnoInput(e.target.value)}
            />
          </p>
          <p>
            <strong className="card-title">imagem: </strong>
            <input
              className={
                editavel ? "input-music-enable" : "input-music-disabled"
              }
              disabled={!editavel}
              type="text"
              defaultValue={imagemInput}
              onChange={(e) => setImagemInput(e.target.value)}
            />
          </p>
          <button
            className={editavel ? "btn-salvar-enable" : "btn-salvar-disabled"}
            onClick={editar}
          >
            Salvar
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemMusica;
