import React from "react";

interface Props {
    category: string;
}

const CategoryFilters = ({ category }: Props) => {
    if (category === "womens") {
        return (
            <>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Select Item</label>
                    <select className="w-full border rounded p-2">
                        <option value="">All Items</option>
                        <option value="s">Jeans</option>
                        <option value="m">Kurta</option>
                        <option value="l">Saree</option>
                        <option value="xl">Tops</option>
                    </select>
                </div>
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
                    <label className="block text-sm font-medium mb-1">Color</label>
                    <select className="w-full border rounded p-2">
                        <option value="">All Colors</option>
                        <option value="blue">Blue</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
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
