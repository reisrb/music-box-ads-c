import React from "react";
import imgLateral from "../assets/imagens/half-circles-pink-blue.png";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Adicionar() {

  const navegar = useNavigate();

  function cadastrar(evento) {
    evento.preventDefault();
    const novaMusica = {
      nome: evento.target.nome.value,
      artista: evento.target.artista.value,
      genero: evento.target.genero.value,
      ano: evento.target.ano.value,
      imagem: evento.target.imagem.value
    };

    api
      .post(`/`, novaMusica)
      .then((resposta) => {
        alert("A musica foi criada");
        navegar("/musicas");
      })
      .catch((erro) => {
        alert("Deu erro, chama o reis");
      });
  }

  return (
    <>
      <div className="container">
        <div className="add-music">
          <div className="formulario">
            <h1>adicionar</h1>

            <br />

            <form onSubmit={cadastrar}>
              <label>
                Música: <br />
                <input name="nome" type="text" />
              </label>
              <br />
              <label>
                Artista: <br />
                <input name="artista" type="text" />
              </label>
              <br />
              <label>
                Genêro: <br />
                <input name="genero" type="text" />
              </label>
              <br />
              <label>
                Ano de Lançamento: <br />
                <input name="ano" type="text" />
              </label>
              <br />
              <label>
                {" "}
                Imagem (url): <br />
                <input name="imagem" />
              </label>
              <br />
              <button className="btn" type="submit">
                Enviar
              </button>
            </form>
          </div>

          <div className="img-lateral">
            <img src={imgLateral} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Adicionar;
