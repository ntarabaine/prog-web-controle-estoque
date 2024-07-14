import { useEffect, useState } from "react";
import { produto } from "./types";
import estoque from './estoque.json'
import FormProdutos from "./formprodutos";
import ListaItens from "./listaprodutos";

const App = () => {
  const [produtos, setProdutos] = useState<produto[]>([]);
  
  useEffect(()=>{
    setProdutos(estoque.itens)
  },[])
  
  const adicionarProduto = (produto: produto) => {
    setProdutos(prev => [produto, ...prev]);
  } 

  const deletarProduto = (id:number) => {
    setProdutos((prev: produto[]) => [...prev.filter((item:produto) => item.id !== id)])
  }

  return (
    <div className="p-4 m-2">
      <h1 className="font-bold text-4xl">Controle de estoque</h1>
      <FormProdutos
        adicionarProduto={adicionarProduto}
      />
      <ListaItens
        produtos={produtos}
        handleDelItem={deletarProduto}
      />
    </div>
  );
};

export default App;