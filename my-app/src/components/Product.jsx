export default function Product() {
  let products = [
    { id: 789, name: "Laptop", price: "20k" },
    { id: 123, name: "Mobile", price: "26k" },
    { id: 343, name: "VR", price: "2k" },
    { id: 576, name: "Apple", price: "6k" },
    { id: 129, name: "Charger", price: "56k" },
  ];
  return (
    <>
      {products.map(function (product) {
        return (
          <div key={product.id}>
            Name : {product.name} and Price : {product.price}
          </div>
        );
      })}
    </>
  );
}
