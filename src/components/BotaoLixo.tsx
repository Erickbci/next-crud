
export default function BotaoLixo(props) {
    return(
        <button onClick={() => props.clienteExcluido?.(props.cliente)} className={`
        flex justify-center items-center
        text-red-500 rounded-full p-2 m-1
        hover:bg-purple-50
        `}>
            {props.children}
        </button>
    )
}