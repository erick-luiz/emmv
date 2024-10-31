import React from 'react';
import './Programacao.css';

const programacao = {
  sexta: [
    { horario: '08h – 09h', atividade: 'Abertura do evento' },
    { horario: '09h – 12h', atividade: 'Roda de Conversa: Música e Mercado (Marcelo Vaz, Douglas Vallejos, Gabriel Medeiros e Dionísio Souza)' },
    { horario: '11h – 12h', atividade: 'Oficina de Percussão (Rodrigo Terra)' },
    { horario: '12h – 14h', atividade: 'Almoço' },
    { horario: '14h – 16h', atividade: 'Produção musical - Michel Corrêa Studio Vitrola' },
    { horario: '16h – 16h30', atividade: 'Coffee break' },
    { horario: '16h30 – 17h', atividade: 'Pocket Show' },
    { horario: '17h – 18h30', atividade: 'Palestra João Lovato' },
    { horario: '18h30 – 20h', atividade: 'Oficina de Canto – Luana Medina' },
    { horario: '20h', atividade: 'Pausa' },
    { horario: '21h', atividade: 'Apresentação Musical – Maré Som' },
  ],
  sabado: [
    { horario: '08h – 09h', atividade: 'Palestra 4' },
    { horario: '09h – 11h', atividade: 'Mostra de Experiências' },
    { horario: '11h – 12h', atividade: 'Oficina de Arranjo – Marcelo Vaz' },
    { horario: '12h – 14h', atividade: 'Almoço' },
    { horario: '14h – 16h', atividade: 'Palestra Filha Teresa' },
    { horario: '16h – 16h30', atividade: 'Coffee break' },
    { horario: '16h30 – 17h', atividade: 'Pocket Show' },
    { horario: '17h – 18h30', atividade: 'Palestra: Educação Musical (Lelia Diniz)' },
    { horario: '18h30 – 20h', atividade: 'Palestra Xande' },
    { horario: '20h', atividade: 'Pausa' },
    { horario: '21h', atividade: 'Apresentação Musical – Teresa in Concert' },
  ],
  domingo: [
    { horario: '08h – 09h', atividade: 'Palestra 7' },
    { horario: '09h – 11h', atividade: 'Willian Tavares – flauta nativa, música e cura' },
    { horario: '11h – 12h', atividade: '' },
    { horario: '12h – 14h', atividade: 'Almoço' },
    { horario: '14h – 16h', atividade: 'Palestra Gustavo Silveira Música e Tecnologia' },
    { horario: '16h – 16h30', atividade: 'Coffee break' },
    { horario: '16h30 – 17h', atividade: 'Pocket Show' },
    { horario: '17h – 18h', atividade: 'Roda de conversa Bruno Soares' },
    { horario: '18h30 – 20h', atividade: 'Palestra Silvia Zanatta' },
    { horario: '20h', atividade: 'Encerramento' },
    { horario: '21h', atividade: 'Apresentação Musical – Gafieira do Mar e DougTrio' },
  ],
};

const Programacao = () => {
  return (
    <div className="tabela-container">
      <h1 className="titulo-programacao">
        <span className="highlight">Programação</span> do Evento
      </h1>
      <hr className="linha-programacao" />

      <table className="tabela-programacao">
        <thead>
          <tr>
            <th>TURNO</th>
            <th colSpan="2">SEXTA-FEIRA (08/11/2024)</th>
            <th colSpan="2">SÁBADO (09/11/2024)</th>
            <th colSpan="2">DOMINGO (10/11/2024)</th>
          </tr>
          <tr>
            <th>Horário</th>
            <th>Atividade</th>
            <th>Horário</th>
            <th>Atividade</th>
            <th>Horário</th>
            <th>Atividade</th>
          </tr>
        </thead>
        <tbody>
          {programacao.sexta.map((evento, index) => (
            <tr key={index}>
              <td>{evento.horario}</td>
              <td>{evento.atividade}</td>
              <td>{programacao.sabado[index] ? programacao.sabado[index].horario : ''}</td>
              <td>{programacao.sabado[index] ? programacao.sabado[index].atividade : ''}</td>
              <td>{programacao.domingo[index] ? programacao.domingo[index].horario : ''}</td>
              <td>{programacao.domingo[index] ? programacao.domingo[index].atividade : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Programacao;
