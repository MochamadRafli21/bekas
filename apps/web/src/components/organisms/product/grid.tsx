import { trpc } from "@/lib/trpc";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import BasePaginations from "@/components/molecules/base-paginations";
import LoadingScreen from "@/components/molecules/loading-screen";

export default function ProductGrid() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const page = useMemo(
    () => parseInt(searchParams.get("page") || "1", 10),
    [searchParams],
  );
  const { data: products, isLoading } = trpc.product.list.useQuery({
    q,
    page,
  });

  if (isLoading) return <LoadingScreen value={80} />;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products?.items?.map((p) => (
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
      <BasePaginations totalPages={products?.totalPages || 0} />
    </>
  );
}
