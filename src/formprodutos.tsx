import { ChangeEvent, FormEvent, useState } from "react";
import { formProps, produto } from "./types";


const FormProdutos = ({adicionarProduto}:formProps) => {
  const [novoProduto, setNovoProduto] = useState<produto>({
    id:0,
    nome:'',
    quantidade:0,
    preco:0  
  })

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setNovoProduto(prev => ({
      ...prev,
      [name]: name === 'quantidade' || name === 'preco' ? parseFloat(value) : value
    }))
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    adicionarProduto({...novoProduto, id:Math.random()})
    console.log(novoProduto)
    setNovoProduto({
      id:0,
      nome: '',
      quantidade: 0,
      preco: 0    
    })
  }

  return (
    <div className="p-2">
      <h1 className="text-xl font-light">Adicionar produto</h1>
      <form className="flex flex-col gap-2 p-2 items-start" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <label className="font-light">Nome:</label>
          <input className="border rounded border-slate-500" type="text" name="nome" value={novoProduto.nome} onChange={handleChange} />
        </div>
        <div className="flex gap-2">
          <label className="font-light">Quantidade:</label>
          <input className="border rounded border-slate-500 " type="number" name="quantidade" value={novoProduto.quantidade} onChange={handleChange} />
        </div>
        <div className="flex gap-2">
          <label className="font-light" >Preço:</label>
          <input className="border rounded border-slate-500 " type="number" name="preco" value={novoProduto.preco} onChange={handleChange} step="0.01" />
        </div>
        <button className="px-4 py-2 border rounded-lg border-cyan-500 bg-cyan-500 hover:bg-cyan-600 text-white " type="submit">Adicionar Item</button>
      </form>
    </div>
  );
};


export default FormProdutos