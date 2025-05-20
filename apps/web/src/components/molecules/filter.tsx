import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Filter() {
  const [searchParams] = useSearchParams();
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const navigate = useNavigate();

  const onSetFilter = () => {
    const params = new URLSearchParams(location.search);
    if (minPrice) {
      params.set("minPrice", minPrice);
    } else {
      params.delete("minPrice");
    }
    if (maxPrice) {
      params.set("maxPrice", maxPrice);
    } else {
      params.delete("maxPrice");
    }
    navigate({ pathname: "/", search: params.toString() }, { replace: true });
  };

  return (
    <div className="md:border md:border-gray-200 md:ml-6 mt-2 px-6 py-4 md:rounded-md ">
      <Label className="text-lg font-semibold mb-2">Filter</Label>
      <Label className="text-sm font-semibold mb-1 mt-2">Lowest Price</Label>
      <Input
        value={minPrice}
        placeholder="200"
        onChange={(e) => {
          setMinPrice(e.target.value);
        }}
      />
      <Label className="text-sm font-semibold mb-1 mt-2">Highest Price</Label>
      <Input
        value={maxPrice}
        placeholder="240"
        onChange={(e) => {
          setMaxPrice(e.target.value);
        }}
      />
      <Button className="w-full mt-4" onClick={onSetFilter}>
        Attach Filter
      </Button>
    </div>
  );
}
