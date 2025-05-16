import React, { Dispatch, SetStateAction } from "react";

interface Props {
  category: string;
  setSelectedName: Dispatch<SetStateAction<string>>;
  setSelectedColor: Dispatch<SetStateAction<string>>
}

const CategoryFilters = ({ category, setSelectedName , setSelectedColor}: Props) => {
  if (category === "womens") {
    return (
      <>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Select Item</label>
          <select className="w-full border rounded p-2" onChange={(e) => setSelectedName(e.target.value)}>

            <option value="">All Items</option>
            <option value="Jeans">Jeans</option>
            <option value="kurta">Kurta</option>
            <option value="Sarre">Saree</option>
            <option value="Tops">Tops</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1"> Select Color</label>
          <select className="w-full border rounded p-2" onChange={(e) => setSelectedColor(e.target.value)}>
            <option value="">All Colors</option>
            <option value="Blue">Blue</option>
            <option value="Black">Red</option>
            <option value="White">White</option>
            <option value="Red">White</option>

          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1"> Select Size</label>
          <select className="w-full border rounded p-2" onChange={(e) => setSelectedName(e.target.value)}>
            <option value="">All Sizes</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>

      </>
    );
  }

  if (category === "mens") {
    return (
      <>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Size</label>
          <select className="w-full border rounded p-2">
            <option value="">All Sizes</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Material</label>
          <select className="w-full border rounded p-2">
            <option value="">All Materials</option>
            <option value="cotton">Cotton</option>
            <option value="silk">Silk</option>
            <option value="wool">Wool</option>
          </select>
        </div>
      </>
    );
  }

  if (category === "grocery") {
    return (
      <>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Size</label>
          <select className="w-full border rounded p-2">
            <option value="">All Sizes</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Material</label>
          <select className="w-full border rounded p-2">
            <option value="">All Materials</option>
            <option value="cotton">Cotton</option>
            <option value="silk">Silk</option>
            <option value="wool">Wool</option>
          </select>
        </div>
      </>
    );
  }
  if (category === "makeup") {
    return (
      <>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Size</label>
          <select className="w-full border rounded p-2">
            <option value="">All Sizes</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Material</label>
          <select className="w-full border rounded p-2">
            <option value="">All Materials</option>
            <option value="cotton">Cotton</option>
            <option value="silk">Silk</option>
            <option value="wool">Wool</option>
          </select>
        </div>
      </>
    );
  }

  if (category === "women") {
    return (
      <>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Size</label>
          <select className="w-full border rounded p-2">
            <option value="">All Sizes</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Material</label>
          <select className="w-full border rounded p-2">
            <option value="">All Materials</option>
            <option value="cotton">Cotton</option>
            <option value="silk">Silk</option>
            <option value="wool">Wool</option>
          </select>
        </div>
      </>
    );
  }

  return null;
};

export default CategoryFilters;
