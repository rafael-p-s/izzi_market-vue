import api from '../axios'

export async function buscarProdutos() {
  try {
    const res = await api.get('/produto/read')
    return res.data
  } catch (error) {
    throw error
  }
}
