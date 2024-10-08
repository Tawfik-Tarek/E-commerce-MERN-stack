import React from "react";
import SectionTag from "./SectionTag";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../rtk/slices/categoryApiSlice";

const API_URL = import.meta.env.VITE_API_URL;


const CategoriesSection = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();
  if (isLoading) {
    return (
      <h1 className="min-h-[600px] text-center text-secondary">loading..</h1>
    );
  }
  if (error) {
    return (
      <h1 className="min-h-[600px] text-center text-secondary">
        Something went wrong!
      </h1>
    );
  }
  return (
    <section className="py-32 border-b-2 border-solid">
      <div className="container mx-auto">
        <SectionTag name={"Categories"} />
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[2.2rem] font-semibold mt-5">
            Browse By Category
          </h2>
        </div>
        <div className="flex justify-center md:justify-start gap-5 items-center flex-wrap">
          {categories?.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id} className="w-fit">
              <div className="rounded-lg text-center transition-all duration-300 ease-in hover:bg-secondary w-[11rem] h-[9rem] p-[1rem] hover:text-white shadow-lg  border-[1px] border-solid border-secondary">
                <img src={`${API_URL}/uploads/categories/${category.imageUrl}`} alt={category.name + "category" || "category image"} className="w-16 h-16 mx-auto mb-4" loading="lazy" />
                <h3 className="text-[1.5rem] font-semibold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
