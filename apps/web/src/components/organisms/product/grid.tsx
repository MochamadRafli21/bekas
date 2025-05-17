import { trpc } from "@/lib/trpc";
import { Link } from "react-router-dom";

export default function ProductGrid() {
  const { data: products, isLoading } = trpc.product.list.useQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products?.map((p) => (
        <Link
          key={p.id}
          to={`/product/${p.slug}`}
          className="border rounded p-4 hover:shadow"
        >
          <div key={p.id} className="border rounded p-2 shadow">
            <img
              src={p?.imageUrl || ""}
              alt={p.name}
              className="w-full h-40 object-cover"
            />
            <h2 className="font-bold">{p.name}</h2>
            <p>${parseFloat(p.price).toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
