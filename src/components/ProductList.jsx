import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 20,
      padding: 20
    }}>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
//fix