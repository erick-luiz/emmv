import React from 'react';
import './Programacao.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LongLine from '../Line/LongLine.js'
import CardEvento from './CardEvento.js'
import CardAtividade from './CardAtividade.js'

const programacao = [
  {
    dia: 'Sexta-Feira',
    diaMes: '08-11-2024',
    turnos: [
      {
        turno: 'Manhã',
        horarios: [
          { hora: '08h – 09h', evento: 'Abertura do evento', apresentador: 'Cordenação' },
          { hora: '09h – 12h', evento: 'Roda de Conversa: Música e Mercado', apresentador: 'Marcelo Vaz, Douglas Vallejos, Gabriel Medeiros e Dionísio Souza' },
          { hora: '12h – 14H', type: 'almoco'}
        ],
      },
      {
        turno: 'Tarde',
        horarios: [
          { hora: '14h – 16h', evento: 'Produção musical (End: Vice Almirante Abreu 434)', apresentador: 'Michel Corrêa Studio Vitrola' },
          { hora: '14h – 16h', evento: 'Produção musical (End: Vice Almirante Abreu 434)', apresentador: 'Michel Corrêa Studio Vitrola' },
          { hora: '16h – 16h30', type: 'coffee-break'},
          { hora: '16h30 – 17h', evento: 'Palestra', apresentador: 'Pocket Show' },
          { hora: '14h – 16h', evento: 'Produção musical (End: Vice Almirante Abreu 434)', apresentador: 'Michel Corrêa Studio Vitrola' },
        ],
      },
      {
      turno: 'Noite',
      horarios: [
          { hora: '18h30 – 20h', evento: 'Oficina de Canto', apresentador: 'Luana Medina' },
          { hora: '21h', evento: 'Apresentação Musical – Maré Som', apresentador: 'Maré Som' },
      ],
    },
    ],
  },
  {
    dia: 'Sábado',
    diaMes: '09-11-2024',
        turnos: [
          {
            turno: 'Manhã',
            horarios: [
              { hora: '08h – 09h', evento: 'Palestra', apresentador: '...' },
              { hora: '09h – 11h', evento: 'Mostra de Experiências', apresentador: '...' },
              { hora: '11h – 12h', evento: 'Oficina de Percursão', apresentador: 'Rodrigo Terra' },
              { hora: '12h – 14H', type: 'almoco'}
            ],
          },
          {
            turno: 'Tarde',
            horarios: [
              { hora: '14h – 16h', evento: 'Palestra ', apresentador: 'Filha Teresa' },
              { hora: '16h – 16h30', type: 'coffee-break'},
              { hora: '16h30 – 17h', evento: 'Pocket Show', apresentador: 'Pocket Show' },
              { hora: '17h – 18:30h', evento: 'Palestra: Educação Musical', apresentador: 'Lelia Diniz' },
            ],
          },
          {
          turno: 'Noite',
          horarios: [
              { hora: '18:30h - 20h', evento: 'Palestra ', apresentador: 'Xande' },
              { hora: '21h', evento: 'Apresentação Musical – Teresa in Concert', apresentador: 'Teresa in Concert' },
          ],
        },
        ],
  },
  {
    dia: 'Domingo',
    diaMes: '10-11-2024',
        turnos: [
          {
            turno: 'Manhã',
            horarios: [
              { hora: '08h – 09h', evento: 'Palestra', apresentador: '...' },
              { hora: '09h – 11h', evento: 'flauta nativa, música e cura', apresentador: 'Willian Tavares' },
              { hora: '11h – 12h', evento: 'Oficina de Arranjo', apresentador: 'Marcelo Vaz' },
              { hora: '12h – 14H', type: 'almoco'}
            ],
          },
          {
            turno: 'Tarde',
            horarios: [
              { hora: '14h – 16h', evento: 'Palestra Música e Tecnologia', apresentador: 'Gustavo Silveira' },
              { hora: '16h – 16h30', type: 'coffee-break'},
              { hora: '16h30 – 17h', evento: 'Roda de conversa', apresentador: 'Bruno Soares' },
            ],
          },
          {
          turno: 'Noite',
          horarios: [
                        { hora: '18:30h - 20h', evento: 'Palestra ', apresentador: 'Silvia Zanatta' },
                        { hora: '21h', evento: 'Apresentação Musical', apresentador: 'Gafieira do Mar e Kiai Grupo' },
                    ],
        },
        ],
  },
  // Adicione mais dias conforme necessário
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Programacao = () => {
  return (
    <div className="programacao-container">
      <h1 className="titulo-programacao">
        <span className="highlight">Programação</span> do Evento
      </h1>
      <hr className="linha-programacao" />

      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={false}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-spacing"
      >
        {programacao.map((dia, index) => (
          <div className="dia-card" key={index}>
            <h2 className="dia-titulo">{dia.dia}</h2>
            <h3 className="dia-do-mes-titulo">{dia.diaMes}</h3>
            <LongLine />
            {dia.turnos.map((turno, turnoIndex) => (

              <div key={turnoIndex} className="turno">
                <h3 className="turno-titulo">{turno.turno}</h3>
                <ul className="horarios-lista">
                  {turno.horarios.map((horario, horarioIndex) => (
                    horario.type?
                    <CardAtividade tipo={horario.type} horario={horario.hora}/>:

                    <CardEvento
                                            horario={horario.hora}
                                            atividade={horario.evento}
                                            apresentador={horario.apresentador}
                                            onClick={function(){console.log(horario.link)}}
                                        />






                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Programacao;
