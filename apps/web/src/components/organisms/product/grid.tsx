import { trpc } from "@/lib/trpc";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import BasePaginations from "@/components/molecules/base-paginations";
import Filter from "@/components/molecules/filter";
import LoadingScreen from "@/components/molecules/loading-screen";

export default function ProductGrid() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const page = useMemo(
    () => parseInt(searchParams.get("page") || "1", 10),
    [searchParams],
  );
  const minPrice = useMemo(() => {
    const params = searchParams.get("minPrice");

    return params ? parseInt(params) : undefined;
  }, [searchParams]);

  const maxPrice = useMemo(() => {
    const params = searchParams.get("maxPrice");

    return params ? parseInt(params) : undefined;
  }, [searchParams]);

  const { data: products, isLoading } = trpc.product.list.useQuery({
    q,
    page,
    minPrice,
    maxPrice,
  });

  if (isLoading) return <LoadingScreen value={80} />;

  return (
    <>
      <div className="flex gap-4">
        <div className="hidden md:block">
          <Filter />
        </div>
        <div className="w-full md:px-2">
          <div className="grid grid-cols-2 md:grid-cols-5 p-4 gap-4">
            {products?.items?.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`}>
                <div key={p.id} className="border rounded shadow">
                  <img
                    src={p?.imageUrl || ""}
                    alt={p.name}
                    className="w-full h-40 object-contain"
                  />
                  <div className="p-2">
                    <h2 className="font-bold">{p.name}</h2>
                    <p>${parseFloat(p.price).toFixed(2)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <BasePaginations totalPages={products?.totalPages || 0} />
        </div>
      </div>
    </>
  );
}
