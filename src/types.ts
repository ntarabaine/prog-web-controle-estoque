export interface produto{
  id: number
  nome: string
  quantidade: number
  preco: number
}

export interface Estoque{
  produtos: produto[];
}

export interface listaProdutosProps{
  produtos: produto[];
  handleDelItem: (id: number) => void
}

export interface formProps {
  adicionarProduto: (produto: produto) => void
}