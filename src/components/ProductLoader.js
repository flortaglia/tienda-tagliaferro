export default function ProductLoader() {
  return new Promise((resolve,reject)=>{
    
        setTimeout(()=>{
          let products = [
            {id:1, title: "Muzzarella", description:"salsa de tomate y muzza",price:600, pictureUrl:"/img/muzzarella.webp"},
            {id:2, title: "Jamón y morrones", description:"salsa de tomate, muzza, jamón y morrones",price:800, pictureUrl:"/img/muzzarella.webp"},
            {id:3, title: "Fugazzeta", description:"cebolla y muzza",price:600, pictureUrl:"/img/fugazzetta.webp"},
            {id:1, title: "Pepperoni", description:"salsa de tomate, muzza y salame",price:700, pictureUrl:"/img/peperoni.webp"}
          ];
          if (products.length!=0){
            resolve(products)
          }else{reject("No se encontraron productos")}
        },2000)
    
    })
}
    

