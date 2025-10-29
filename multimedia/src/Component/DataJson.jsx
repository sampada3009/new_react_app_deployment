import DataaJson from "../assets/Data.json";

export function DataJson() {
  return (
    <div>
      <h2>Products List</h2>
      {
        DataaJson.products.map((product, index) => (
          <div key={index}>
            <p>Product Name: {product.name}</p>
            <p>Product Brand: {product.brand}</p>
            <hr />
          </div>
        ))
      }
    </div>
  );
}
