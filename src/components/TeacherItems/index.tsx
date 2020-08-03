import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'


function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/57605630?s=460&u=405fc739a67a260aff0fa391c4de313a0433c362&v=4" alt="Tarcio Rocha" />
        <div>
          <strong>Tarcio Rocha</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologicas de química avançada.
        <br /><br />
        Apixonado por explodir coisas em laborarório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas ja passaram por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong> 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contanto
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;