import Card from "@/components/card/page";


export default async function Home() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="font-bold mb-5 text-center">Produtos</h1>

      <div className="container">
        <div className="row g-3">
         
       
        {data.products.map((product) => (
         

          <Card
            key={product.id}
            name={product.title}
            description={product.description}
            price={product.price}
            image={product.thumbnail}
          />
      
        ))}
    
      </div>
      </div>
    </main>
  );
}
