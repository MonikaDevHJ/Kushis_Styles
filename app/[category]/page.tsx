// app/[category]/page.tsx
import React from "react";
import { useSearchParams } from "next/navigation";

interface Props {
  params: {
    category: string;
  };
}

const CategoryPage = ({ params }: Props) => {
  const { category } = params;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold capitalize">{category} Page</h1>
      <p>Show products or content for: {category}</p>
    </div>
  );
};

export default CategoryPage;
