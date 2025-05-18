import { trpc } from "@/lib/trpc";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LoadingScreen from "@/components/molecules/loading-screen";

export default function ProductGrid() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const { data: products, isLoading } = trpc.product.list.useQuery({ q });

  if (isLoading) return <LoadingScreen value={80} />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products?.map((p) => (
        <Link key={p.id} to={`/product/${p.slug}`}>
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
