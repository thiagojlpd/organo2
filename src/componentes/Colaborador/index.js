import './colaborador.css'
import { FaWindowClose } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";



const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {

    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (<div className="colaborador">
        <FaWindowClose 
            size={25} 
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {colaborador.favorito 
                    ? <FaThumbsUp {...propsFavorito} color={corDeFundo}/> 
                    : <FaRegThumbsUp {...propsFavorito} />
                }
            </div>
        </div>
    </div>)
}

export default Colaborador