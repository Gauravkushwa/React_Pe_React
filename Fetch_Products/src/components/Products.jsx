import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // NEW STATES
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // FILTER + SORT LOGIC
  const filteredAndSortedData = useMemo(() => {
    let updatedData = [...data];

    // 🔍 Search filter
    if (searchTerm) {
      updatedData = updatedData.filter((product) =>
        product.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    // 🔃 Sorting
    if (sortOption === "priceLow") {
      updatedData.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHigh") {
      updatedData.sort((a, b) => b.price - a.price);
    } else if (sortOption === "nameAZ") {
      updatedData.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (sortOption === "nameZA") {
      updatedData.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    }

    return updatedData;
  }, [data, searchTerm, sortOption]);

  if (isLoading) return <Loader />;

  return (
    <div className="bg-gray-500 min-h-screen p-6">

      {/* 🔎 Search + Sort Controls */}
      <div className="flex flex-wrap justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-lg border w-full md:w-1/3"
        />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 rounded-lg border w-full md:w-1/4"
        >
          <option value="">Sort By</option>
          <option value="priceLow">Price: Low → High</option>
          <option value="priceHigh">Price: High → Low</option>
          <option value="nameAZ">Name: A → Z</option>
          <option value="nameZA">Name: Z → A</option>
        </select>
      </div>

      {/* 🛒 Products Grid */}
      <div className="grid grid-cols-5 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[300px]:grid-cols-1 gap-4">
        {filteredAndSortedData.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${item.id}`)}
      className="bg-gray-700 cursor-pointer group rounded-[10px] py-4 px-3 hover:shadow-xl transition"
    >
      <img
        src={item.image}
        alt={item.title}
        className="aspect-square object-contain p-3 group-hover:scale-90 transition-all duration-300"
      />

      <div className="p-5">
        <h1 className="text-lg text-white line-clamp-2 group-hover:text-blue-400">
          {item.title}
        </h1>

        <div className="flex gap-3 my-3 items-center">
          <p className="bg-green-600 py-1 px-3 rounded-lg text-xs flex items-center gap-1">
            ⭐ {item.rating.rate}
          </p>
          <p className="text-white/40 text-sm">
            ({item.rating.count})
          </p>
        </div>

        <p className="text-xl font-medium text-white">
          ₹ {item.price}
        </p>
      </div>
    </div>
  );
};

export default Products;