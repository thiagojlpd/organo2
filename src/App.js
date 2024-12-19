import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      corSecundaria: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      corSecundaria: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      corSecundaria: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      corSecundaria: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      corSecundaria: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      corSecundaria: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      corSecundaria: '#FF8A29'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR  ',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: './imagens/foto.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Engenheiro de Software',
      imagem: './imagens/foto.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: '	./imagens/foto.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADORA',
      cargo: 'CEO',
      imagem: './imagens/foto.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: './imagens/foto.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Engenheiro de Software',
      imagem: './imagens/foto.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: '	./imagens/foto.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'CEO',
      imagem: './imagens/foto.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: './imagens/foto.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Engenheiro de Software  ',
      imagem: './imagens/foto.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: './imagens/foto.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'CEO',
      imagem: './imagens/foto.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: './imagens/foto.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Engenheiro de Software',
      imagem: './imagens/foto.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: './imagens/foto.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'CEO',
      imagem: './imagens/foto.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: './imagens/foto.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Engenheiro de Software',
      imagem: './imagens/foto.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: './imagens/foto.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'CEO',
      imagem: './imagens/foto.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: './imagens/foto.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Engenheiro de Software',
      imagem: './imagens/foto.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: './imagens/foto.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NOME DO COLABORADOR',
      cargo: 'CEO',
      imagem: './imagens/foto.png',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    console.log('Deletando colaborador', id);
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorTime(novaCorSecundaria, idTime) {
    setTimes(times.map(time => {
      if (time.id === idTime) {
        time.corSecundaria = novaCorSecundaria;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime){
    setTimes([...times, 
      { 
        ...novoTime, id: uuidv4()
      }
    ]);
    console.log(times)
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id){
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador;
      }
    ))
  }

  return (
    <div>
      <Banner />
      <Formulario 
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
        cadastrarTime={cadastrarTime}
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) =>
          <Time
            mudarCor={mudarCorTime}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
            aofavoritar={resolverFavorito}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
