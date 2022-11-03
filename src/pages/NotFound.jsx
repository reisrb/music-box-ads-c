import React from 'react';
import imgLateral from '../assets/imagens/target-red.png';
import { useNavigate } from 'react-router-dom';
function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="add-music">

          <div className="formulario">

            <h1>404</h1>

            <p className="subtitle">se perdeu? nada para ver por aqui...</p>
            <button className="btn" onClick={() => navigate(-1)}>voltar</button>
          </div>

          <div className="img-lateral">
            <img src={imgLateral} alt="" />

          </div>

        </div>
      </div>
    </>
  );
}

export default NotFound;