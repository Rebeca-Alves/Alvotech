import React from 'react';
import './style.css';

const HomeOficial: React.FC = () => {

  return (
    <div>
      <header id="icabecalho" className="cabecalho">
        <span id="icone-cabecalho" className="material-symbols-outlined icone-menu">
          menu
        </span>
        <h1>SEJA BEM VINDO!</h1>
        <img className="imagem-logo" src="../img/Logo.png" alt="" />
      </header>
      <nav id="imenu" className="menu-lateral">
        <span id="icone-menu" className="material-symbols-outlined icone-menu icone-lateral">
          menu
        </span>
        <div className="topico inicio">
          <span className="icone material-symbols-outlined">home</span>
          <p className="topico-titulo">Inicio</p>
        </div>
        <div className="topico config">
          <span className="material-symbols-outlined icone">settings</span>
          <p className="topico-titulo">Configurações</p>
        </div>
        <div className="topico fale">
          <span className="material-symbols-outlined icone">mail</span>
          <p className="topico-titulo">Fale Conosco</p>
        </div>
        <div className="topico freq">
          <span className="material-symbols-outlined icone">contact_support</span>
          <p className="topico-titulo">Perguntas Frequentes</p>
        </div>
        <hr className="linha" />
        <div className="topico">
          <span className="material-symbols-outlined icone">logout</span>
          <p className="topico-titulo">Desconectar</p>
        </div>
        <img className="imagem-menu" src="../img/Logo.png" alt="" />
      </nav>
      <section className="banner">
        <img className="imagem_banner" src="../img/20231112_200945_0000.png" alt="" />
      </section>
      <main>
        <section className="container">
          <div className="primerio">
            <div className="quadro">
              <span className="material-symbols-outlined icone-caixa">chronic</span>
            </div>
            <p className="titulo">MARCAÇÃO DE PONTO</p>
          </div>
          <div className="secundo">
            <div className="quadro">
              <span className="material-symbols-outlined icone-caixa">notifications_active</span>
            </div>
            <p className="titulo">NOTIFICAÇÕES</p>
          </div>
          <div className="terceiro">
            <div className="quadro">
              <span className="material-symbols-outlined icone-caixa">pin_drop</span>
            </div>
            <p className="titulo">LOCALIZAÇÃO</p>
          </div>
          <div className="quarto">
            <div className="quadro">
              <span className="material-symbols-outlined icone-caixa">edit</span>
            </div>
            <p className="titulo">CORRIGIR PONTO</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeOficial;
