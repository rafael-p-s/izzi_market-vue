import api from '../axios'

/* export async function Produtos() {
  try {
    const res = await api.get('/produto/read')
    return res.data
  } catch (error) {
    throw error
  }
} */

export default {
  listar: () => {
    return api.get('/produto/read')
  },
}
