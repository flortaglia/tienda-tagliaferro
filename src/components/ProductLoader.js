export default function ProductLoader() {
  return new Promise((resolve,reject)=>{
    
        setTimeout(()=>{
          let products = [
            {id:1, title: "Muzzarella", description:"salsa de tomate y muzza",price:600, pictureUrl:"/img/muzzarella.webp", category:"pizzas",stock: 20},
            {id:2, title: "Jamón y morrones", description:"salsa de tomate, muzza, jamón y morrones",price:800, pictureUrl:"/img/muzzarella.webp", category:"pizzas",stock: 20},
            {id:3, title: "Fugazzeta", description:"cebolla y muzza",price:600, pictureUrl:"/img/fugazzetta.webp", category:"pizzas",stock: 20},
            {id:4, title: "Pepperoni", description:"salsa de tomate, muzza y salame",price:700, pictureUrl:"/img/peperoni.webp", category:"pizzas",stock: 20},
            {id:5, title: "Carne", description:"carne suave",price:150, pictureUrl:"/img/carne-empa.webp", category:"empanadas",stock: 20},
            {id:6, title: "Santiagueña", description:"carne cortada a cuchillo",price:150, pictureUrl:"/img/santiague-empa.webp", category:"empanadas",stock: 20},
            {id:7, title: "Jamon y Provolone", description:"jamon, muzza y provolone",price:150, pictureUrl:"/img/provo-canast.webp", category:"canastitas",stock: 20},
          ];
          if (products.length!=0){
            resolve(products)
          }else{reject("No se encontraron productos")}
        },2000)
    
    })
}
    

