import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/51770634?s=460&u=a9a6eb7365466c3ecbaa8ad85b9c9f7c2229243d&v=4"
          alt="Luiz Gustavo"
        />
        <div>
          <strong>Luiz Gustavo</strong>
          <span>Fisíca</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de física avançada
        <br /> <br />
        Apaixonado por Milena Morais
      </p>

      <footer>
        <p>
          Preço/hora
          <strong> R$ 80,00 </strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Icone do Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
