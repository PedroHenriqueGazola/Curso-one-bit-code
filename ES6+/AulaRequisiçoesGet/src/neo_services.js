export async function getNeo() {
    const response = await fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY') // o metodo fecth retorna uma promisse, onde o resolve é um objeto com os dados da requisição
    const data = await response.json() // pega o retorn da promise e transforma em json
    return data.near_earth_objects  // retorna o objeto com os dados dos objetos que passaram perto da terra
}