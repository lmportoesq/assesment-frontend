const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function getAllProducts () {
  try {
    const resp = await fetch(`${BASE_URL}/products`)
    const products = await resp.json()
    return products
  } catch (error) {
  }
}

export async function getProduct(id) {
  try {
    const resp = await fetch(`${BASE_URL}/products/${id}`)
    const product = await resp.json()
    return product
  } catch (error) {
  }
}
