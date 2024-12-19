import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aofavoritar }) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.corSecundaria, '0.2') }}>
            <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
            <input value={time.corSecundaria} onChange={evento => mudarCor(evento.target.value,time.id)} type='color' className='input-color'/>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    
                    return (
                        <Colaborador 
                            aoFavoritar={aofavoritar} 
                            key={indice} 
                            colaborador={colaborador} 
                            corDeFundo={time.corSecundaria} 
                            aoDeletar={aoDeletar}
                        />
                    )
                })}
            </div>
        </section>

    )
}

export default Time