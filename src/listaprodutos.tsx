import { listaProdutosProps } from './types';

const ListaItens = ({produtos, handleDelItem}:listaProdutosProps) => {
  return (
  <div className=''>
    <h1 className='font-bold text-3xl '>Lista de produtos do Estoque</h1>
    <ul className='flex flex-col gap-4 p-2'>
      {produtos?.map(item => (
        <li key={item.id}>
          <h2 className='font-medium text-xl text-cyan-700'>{item.nome}</h2>
          <p>Quantidade: {item.quantidade}</p>
          <p>Preço: R${item.preco.toFixed(2)}</p>
          <button className="bg-red-500 px-2  rounded-xl text-white" onClick={()=>handleDelItem(item.id)}>x</button>
        </li>
      ))}
    </ul>
  </div>
  );
};
export default ListaItens;