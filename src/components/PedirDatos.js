
const apiUrl = "https://62332b348b6a290be4e17b29.mockapi.io/productos"

export default function searchProduct(id){
    return fetch(`${apiUrl}/${id}`,{ 'mode': 'cors',
      'headers': {
        'Access-Control-Allow-Origin': '*',
      }
    })
  
}  
console.log(searchProduct(8))

