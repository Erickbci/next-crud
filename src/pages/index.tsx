import Botao from "../components/Botao";
import { Formulario } from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Erick', 18, '2'),
    new Cliente('Bianca', 19, '3'),
    new Cliente('Julio', 29, '4'),
  ]

  function clienteSelecionado(cliente:Cliente) {
    console.log(cliente.nome); 
  }
  function clienteExcluido(cliente:Cliente) {
    console.log(`Excluir... ${cliente.nome}`); 
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor="green" >Novo Cliente</Botao>
        </div>
        {/* <Tabela 
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}
        clientes={clientes} /> */}
        <Formulario cliente={clientes[0]}></Formulario>
      </Layout>
    </div>
  )
}
