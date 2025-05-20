import { trpc } from "@/lib/trpc";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { slug } = useParams();
  if (!slug) return <p>Invalid slug</p>;
  const { data: product, isLoading } = trpc.product.get.useQuery(slug);

  if (isLoading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="flex flex-col md:flex-row">
      <img
        src={product.imageUrl || ""}
        alt={product.name}
        className="w-full h-80 md:p-2 object-contain rounded"
      />
      <div className="p-4">
        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-lg font-semibold mt-4">
          ${parseFloat(product.price).toFixed(2)}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Stock: {product.stockQuantity}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Min Order: {product.minimumOrderQuantity}
        </p>
      </div>
    </div>
  );
}
