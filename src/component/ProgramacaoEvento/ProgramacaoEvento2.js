
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ProgramacaoEvento.css';
import SymplaBtn from '../component/Btn/SymplaBtn.js';

const ProgramacaoEvento = () => {
  const [selectedDay, setSelectedDay] = useState('sexta');

  const renderTableContent = (day) => {
    switch (day) {
      case 'sexta':
        return (
          <>
            <tr>
              <td rowSpan="3">Manhã</td>
              <td rowSpan="3">08h30 – 12:00</td>
              <td rowSpan="2">ABERTURA DO EVENTO Duo Clave do Mar (Robson Velasques e Francisco Maciel)</td>
            </tr>
            <tr></tr>
            <tr>
              <td>RODA DE CONVERSA: Música e Mercado - (Marcelo Vaz, Douglas Vallejos, Gabriel Medeiros, Dionísio Souza, Bruno Pires e Sulimar Rass)</td>
            </tr>
            <tr>
              <td></td>
              <td>12h – 14h</td>
              <td>Intervalo</td>
            </tr>
            <tr>
              <td rowSpan="4">TARDE</td>
              <td>14h – 16h</td>
              <td>OFICINA: Produção Musical - (Michel Corrêa - Studio Vitrola)</td>
            </tr>
            <tr>
              <td>16h – 16h30</td>
              <td>Coffee Break</td>
            </tr>
            <tr>
              <td>16h30 – 17h</td>
              <td>Pocket Show</td>
            </tr>
            <tr>
              <td>17h – 18h30</td>
              <td>OFICINA: A caminhada na música - (João Lovato)</td>
            </tr>
            <tr>
              <td rowSpan="3">NOITE</td>
              <td>18h30 – 20h</td>
              <td>OFICINA: Os desafios da voz cantada - (Luana Medina)</td>
            </tr>
            <tr>
              <td>20h</td>
              <td>Pausa</td>
            </tr>
            <tr>
              <td>21h</td>
              <td>APRESENTAÇÃO MUSICAL - Marésom <SymplaBtn link="" /></td>
            </tr>
          </>
        );
      case 'sabado':
        return (
          <>
            <tr>
              <td>08h30 – 09h30</td>
              <td>MOSTRA DE EXPERIÊNCIAS: (Benjamin Martins Milão e Alexandre Salum)</td>
            </tr>
            <tr>
              <td>09h30 – 11h</td>
              <td>OFICINA: Introdução ao Arranjo - (Marcelo Vaz)</td>
            </tr>
            <tr>
              <td>11h – 12h</td>
              <td>OFICINA: Percussão: Som, corpo e terra - (Rodrigo Terra)</td>
            </tr>
            <tr>
              <td> </td>
              <td>12h – 14h</td>
              <td>Intervalo</td>
            </tr>
            <tr>
              <td rowSpan="4">TARDE</td>
              <td>14h – 16h</td>
              <td>PALESTRA: Expressões artísticas de povos originários - (Karyne Dias Coutinho)</td>
            </tr>
            <tr>
              <td>16h – 16h30</td>
              <td>Coffee Break</td>
            </tr>
            <tr>
              <td>17h – 18h30</td>
              <td>PALESTRA: Formação de professores de música - (Lélia Negrini Diniz)</td>
            </tr>
            <tr>
              <td rowSpan="3">NOITE</td>
              <td>18h30 – 20h</td>
              <td>OFICINA: Prática de Choro - (Alexandre Salum)</td>
            </tr>
            <tr>
              <td>20h</td>
              <td>Pausa</td>
            </tr>
            <tr>
              <td>21h</td>
              <td>APRESENTAÇÃO MUSICAL - Teresa Coutinho in Concert <SymplaBtn link="" /></td>
            </tr>
          </>
        );
      case 'domingo':
        return (
          <>
            <tr>
              <td rowSpan="3">Manhã</td>
              <td rowSpan="2">08h30 – 10h</td>
              <td rowSpan="2">RODA DE CONVERSA: Música e meditação - (Francisco Maciel e William Tavares)</td>
            </tr>
            <tr></tr>
            <tr>
              <td>10h30 – 12h</td>
              <td>PALESTRA: Música de concerto - (Thiago Perdigão)</td>
            </tr>
            <tr>
              <td> </td>
              <td>12h – 14h</td>
              <td>Intervalo</td>
            </tr>
            <tr>
              <td rowSpan="4">TARDE</td>
              <td>14h – 16h</td>
              <td>PALESTRA: Música e Tecnologia - (Gustavo Silveira)</td>
            </tr>
            <tr>
              <td>16h – 16h30</td>
              <td>Coffee Break</td>
            </tr>
            <tr>
              <td>16h30 – 17h</td>
              <td>Pocket Show</td>
            </tr>
            <tr>
              <td>17h – 18h30</td>
              <td>RODA DE CONVERSA: Desafios da Regência Coral - (Silvia Zanatta)</td>
            </tr>
            <tr>
              <td rowSpan="3">NOITE</td>
              <td>19h – 20h</td>
              <td>POCKET SHOW: Coral SESC e EMMV</td>
            </tr>
            <tr>
              <td>21h</td>
              <td>APRESENTAÇÃO MUSICAL - Gafieira do Mar e DougTrio <SymplaBtn link="" /></td>
            </tr>
          </>
        );
      case 'all':
              return (
                <>
                  <tr>
                    <td rowSpan="3">Manhã</td>
                    <td rowSpan="3">08h30 – 12:00</td>
                    <td rowSpan="2">ABERTURA DO EVENTO Duo Clave do Mar (Robson Velasques e Francisco Maciel)</td>
                    <td>08h30 – 09h30</td>
                    <td>MOSTRA DE EXPERIÊNCIAS: (Benjamin Martins Milão e Alexandre Salum)</td>
                    <td rowSpan="2">08h30 – 10h</td>
                    <td rowSpan="2">RODA DE CONVERSA: Música e meditação - (Francisco Maciel e William Tavares)</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td>RODA DE CONVERSA: Música e Mercado - (Marcelo Vaz, Douglas Vallejos, Gabriel Medeiros, Dionísio Souza, Bruno Pires e Sulimar Rass)</td>
                    <td>09h30 – 11h</td>
                    <td>OFICINA: Introdução ao Arranjo - (Marcelo Vaz)</td>
                    <td>10h30 – 12h</td>
                    <td>PALESTRA: Música de concerto - (Thiago Perdigão)</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>12h – 14h</td>
                    <td>Intervalo</td>
                    <td>12h – 14h</td>
                    <td>Intervalo</td>
                    <td>12h – 14h</td>
                    <td>Intervalo</td>
                  </tr>
                  <tr>
                    <td rowSpan="4">TARDE</td>
                    <td>14h – 16h</td>
                    <td>OFICINA: Produção Musical - (Michel Corrêa - Studio Vitrola)</td>
                    <td>14h – 16h</td>
                    <td>PALESTRA: Expressões artísticas de povos originários - (Karyne Dias Coutinho)</td>
                    <td>14h – 16h</td>
                    <td>PALESTRA: Música e Tecnologia - (Gustavo Silveira)</td>
                  </tr>
                  <tr>
                    <td>16h – 16h30</td>
                    <td>Coffee Break</td>
                    <td>16h – 16h30</td>
                    <td>Coffee Break</td>
                    <td>16h – 16h30</td>
                    <td>Coffee Break</td>
                  </tr>
                  <tr>
                    <td>16h30 – 17h</td>
                    <td>Pocket Show</td>
                    <td>16h30 – 17h</td>
                    <td>Pocket Show</td>
                    <td>16h30 – 17h</td>
                    <td>Pocket Show</td>
                  </tr>
                  <tr>
                    <td>17h – 18h30</td>
                    <td>OFICINA: A caminhada na música - (João Lovato)</td>
                    <td>17h – 18h30</td>
                    <td>PALESTRA: Formação de professores de música - (Lélia Negrini Diniz)</td>
                    <td>17h – 18h30</td>
                    <td>RODA DE CONVERSA: Desafios da Regência Coral - (Silvia Zanatta)</td>
                  </tr>
                  <tr>
                    <td rowSpan="3">NOITE</td>
                    <td>18h30 – 20h</td>
                    <td>OFICINA: Os desafios da voz cantada - (Luana Medina)</td>
                    <td>18h30 – 20h</td>
                    <td>OFICINA: Prática de Choro - (Alexandre Salum)</td>
                    <td>19h – 20h</td>
                    <td>POCKET SHOW: Coral SESC e EMMV</td>
                  </tr>
                  <tr>
                    <td>20h</td>
                    <td>Pausa</td>
                    <td>20h</td>
                    <td>Pausa</td>
                    <td>20h</td>
                    <td>Pausa</td>
                  </tr>
                  <tr>
                    <td>21h</td>
                    <td>APRESENTAÇÃO MUSICAL - Marésom <SymplaBtn link="" /></td>
                    <td>21h</td>
                    <td>APRESENTAÇÃO MUSICAL - Teresa Coutinho in Concert <SymplaBtn link="" /></td>
                    <td>21h</td>
                    <td>APRESENTAÇÃO MUSICAL - Gafieira do Mar e DougTrio <SymplaBtn link="" /></td>
                  </tr>
                </>
              );
      default:
        return null;
    }
  };

  getMobileTable = (day) => {
    return (<div className="programacao-container programacao-container-mobile">
                 <div className="tabs">
                   <button onClick={() => setSelectedDay('sexta')} className={selectedDay === 'sexta' ? 'active' : ''}>Sexta-feira</button>
                   <button onClick={() => setSelectedDay('sabado')} className={selectedDay === 'sabado' ? 'active' : ''}>Sábado</button>
                   <button onClick={() => setSelectedDay('domingo')} className={selectedDay === 'domingo' ? 'active' : ''}>Domingo</button>
                 </div>

                 <table className="programacao-tabela">
                   <thead>
                     <tr>
                       <th>TURNO</th>
                       <th colSpan="2">{selectedDay ==='sexta'? 'SEXTA-FEIRA (08/11/2024)' : 'SABADO (09/11/2024)'}</th>
                     </tr>
                     <tr>
                       <th></th>
                       <th>Horário</th>
                       <th>Atividade</th>
                     </tr>
                   </thead>
                   <tbody>
                     {renderTableContent(day)}
                   </tbody>
                 </table>
               </div>);
  }

  return (
    <>
    <div className="programacao-container programacao-container-mobile">
      <div className="tabs">
        <button onClick={() => setSelectedDay('sexta')} className={selectedDay === 'sexta' ? 'active' : ''}>Sexta-feira</button>
        <button onClick={() => setSelectedDay('sabado')} className={selectedDay === 'sabado' ? 'active' : ''}>Sábado</button>
        <button onClick={() => setSelectedDay('domingo')} className={selectedDay === 'domingo' ? 'active' : ''}>Domingo</button>
      </div>

      <table className="programacao-tabela">
        <thead>
          <tr>
            <th>TURNO</th>
            <th colSpan="2">{selectedDay ==='sexta'? 'SEXTA-FEIRA (08/11/2024)' : 'SABADO (09/11/2024)'}</th>
          </tr>
          <tr>
            <th></th>
            <th>Horário</th>
            <th>Atividade</th>
          </tr>
        </thead>
        <tbody>
          {renderTableContent(selectedDay)}
        </tbody>
      </table>
    </div>
    <div className="programacao-container programacao-container-mobile">

      <table className="programacao-tabela">
        <thead>
          <tr>
            <th>TURNO</th>
            <th colSpan="2">SEXTA-FEIRA (08/11/2024)</th>
            <th colSpan="2">SÁBADO (09/11/2024)</th>
            <th colSpan="2">DOMINGO (10/11/2024)</th>
          </tr>
          <tr>
            <th></th>
            <th>Horário</th>
            <th>Atividade</th>
            <th>Horário</th>
            <th>Atividade</th>
            <th>Horário</th>
            <th>Atividade</th>
          </tr>
        </thead>
        <tbody>
          {renderTableContent('all')}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ProgramacaoEvento;
