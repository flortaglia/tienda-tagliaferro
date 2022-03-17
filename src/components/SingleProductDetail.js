export default function SingleProductDetail() {
    return new Promise((resolve,reject)=>{
      
          setTimeout(()=>{
            let products = 
              {id:1, title: "Muzzarella", description:"salsa de tomate y muzza",price:600, pictureUrl:"/img/muzzarella.webp"};
            
            if (products.length!=0){
              resolve(products)
            }else{reject("No se encontraron productos")}
          },2000)
      
      })
  }