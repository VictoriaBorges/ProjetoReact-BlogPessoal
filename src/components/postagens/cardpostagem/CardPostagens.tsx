import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    <img
                        src={postagem.usuario?.foto}
                        className='h-12 rounded-full'
                        alt={postagem.usuario?.nome || "https://images-ext-1.discordapp.net/external/TpvonxS_6I3AX16fuW1Bw1Y8d-q6C2TRVOBlNqndmIg/https/t4.ftcdn.net/jpg/02/17/74/47/360_F_217744742_5viaZjqSNEFyjIXQHqXg22qOIFN0LUQG.jpg?format=webp"} />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
                    <p>{postagem.texto}</p>
                    <p>Tema: {postagem.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>
            <div className="flex">
            <Link to={`/editarpostagem/${postagem.id}`}
	          className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
              flex items-center justify-center py-2'>
            	<button>Editar</button>
             </Link>
             <Link to={`/deletarpostagem/${postagem.id}`} 
	className='text-white bg-red-400 
	hover:bg-red-700 w-full flex items-center justify-center'>
	<button>Deletar</button>
</Link>
            </div>
        </div>
    )
}

export default CardPostagem