

export default function BotaoEditar(props) {
    
    return(
        <button onClick={() => props.clienteSelecionado?.(props.cliente)} className={`
        flex justify-center items-center
        text-green-600 rounded-full p-2 m-1
        hover:bg-purple-50
        `}>
            {props.children}
        </button>
    )
}