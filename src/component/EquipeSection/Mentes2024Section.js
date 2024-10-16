import React from 'react';
import './EquipeSection.css';
import ShortLine from '../Line/ShortLine.js'
import ShortLineGray from '../Line/ShortLineGray.js'
import LongLine from '../Line/LongLine.js'
import LerMais from '../LerMais/LerMais.js'

const Mentes2024Section = () => {
  return (
    <div className="equipe-container">
      <h1 className="titulo">
        1º <span className="highlight">Mentes Musicais</span>
      </h1>
      <ShortLine />
      <p className="descricao">
        O <span className="highlight">Mentes musicais</span> é um evento da Escola de Música Marcelo Vaz (<span className="highlight">EMMV</span>) que celebra a disseminação de saberes. O evento inclui apresentações musicais, oficinas, palestras, mesas redondas, mostras de experiências, minicursos e shows. A EMMV oferece um lugar propício para o estudo musical, criando um ambiente sonoro, artístico próprio para troca de experiências e aperfeiçoamento de saberes.
      </p>

        <h3>Inscrição</h3>
        <ShortLineGray />
        <p className="descricao">A inscrição do evento inclui a participação <span className="highlight">GRATUITA</span> nas palestras, rodas de conversa, oficinas,
        mostra de experiências e pocket shows.</p>

        <h3>Apresentações musicais</h3>
        <ShortLineGray />
        <p className="descricao"> As apresentações musicais que ocorrerão às 21h no decorrer dos dias 8, 9 e 10,
        terão ingressos à venda via sympla e na <span className="highlight">EMMV</span>.</p>

        <h3>Certificado</h3>
        <ShortLineGray />
        <p className="descricao"><span className="highlight">Certificado</span> de participação do <span className="highlight">1º Mentes Musicais</span> só mediante lista de presença no local do evento.</p>
      <LerMais>
      <p className="descricao">
      <b>Objetivos</b>: 1º Mentes Musicais tem como objetivo promover a cultura do estudo, o conhecimento e a disseminação de saberes, bem como incentivar o desenvolvimento da pesquisa, do ensino, da formação, cultura e da pedagogia musical.
      </p>

       <p className="descricao">
      <b>O que é o Mentes musicais?</b> Mentes musicais é um modo de ver/pensar/refletir/questionar como a música existe, como ela é formada, estudada e como o Ser humano absorve esse conhecimento. Sempre me perguntei, como o cérebro aprende e entende música? Assim nasceu o Mentes Musicais. O cérebro é fabuloso e cada Ser humano tem um jeito, uma potencialidade de aprendizado que interage diretamente com as emoções, sentidos e principalmente a questão motora do corpo. A palavra Cognição nunca fez tanto sentido no que diz respeito ao estudo musical. Dentre as 9 inteligências múltiplas desenvolvidas pelo psicólogo Howard Gardner, a “Musical” é uma delas na qual afirma que “todos os seres humanos desenvolvem capacidades particulares e são capazes de desenvolver competências em diferentes vertentes da aprendizagem. Cada uma dessas vertentes diz respeito a uma espécie de inteligência que o indivíduo pode desenvolver com o passar do tempo”. A Musical é uma inteligência que até os dias de hoje pesquisadores, físicos, filósofos, neurocientistas entre outras áreas da ciência estudam o cérebro e suas atividades perante essa inteligência. Meu fascínio por Gardner me fez estudar outras áreas de conhecimento e interliga-las com o modo de aprendizagem das pessoas no percurso do estudo musical. Cada ser humano tem um modelo de como adquirir potencialmente o conhecimento, na música o modo de conquistar essa inteligência depende de muitos fatores que não só são apenas musicais, mas que desafiam o cotidiano, as sensações, emoções, as competências de organização, foco, paciência. O Mentes Musicais nasce desse pensar que todos têm um potencial musical ou inteligência musical, mas que está adormecida, inertes a provocações sensoriais musicais.
       </p>

        <p className="descricao">
      <b>Abrangência</b>: O 1º Mentes Musicais destina-se a qualquer pessoa, estudante ou não de música, pesquisadores, pensadores, compositores, músicos (instrumentistas, cantores etc) artistas em geral.
      </p>
      </LerMais>
      <LongLine />
    </div>
  );
};

export default Mentes2024Section;