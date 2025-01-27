import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProductPage: React.FC = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: '',
    price: '',
    originalPrice: '',
    description: '',
    image: '',
    category: '',
    subCategory: '',
    brand: '',
    specifications: {},
    features: ['']
  });

  const [specKey, setSpecKey] = useState('');
  const [specValue, setSpecValue] = useState('');

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...product.features];
    newFeatures[index] = value;
    setProduct({ ...product, features: newFeatures });
  };

  const addFeature = () => {
    setProduct({ ...product, features: [...product.features, ''] });
  };

  const addSpecification = () => {
    if (specKey && specValue) {
      setProduct({
        ...product,
        specifications: {
          ...product.specifications,
          [specKey]: specValue
        }
      });
      setSpecKey('');
      setSpecValue('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to save the product
    console.log('Product to save:', product);
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Add New Product</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={product.title}
                onChange={(e) => setProduct({ ...product, title: e.target.value })}
                className="mt-1 w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Brand</label>
              <input
                type="text"
                value={product.brand}
                onChange={(e) => setProduct({ ...product, brand: e.target.value })}
                className="mt-1 w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                value={product.price}
                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                className="mt-1 w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Original Price</label>
              <input
                type="number"
                value={product.originalPrice}
                onChange={(e) => setProduct({ ...product, originalPrice: e.target.value })}
                className="mt-1 w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={product.description}
              onChange={(e) => setProduct({ ...product, description: e.target.value })}
              className="mt-1 w-full p-2 border rounded"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url"
              value={product.image}
              onChange={(e) => setProduct({ ...product, image: e.target.value })}
              className="mt-1 w-full p-2 border rounded"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <input
                type="text"
                value={product.category}
                onChange={(e) => setProduct({ ...product, category: e.target.value })}
                className="mt-1 w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Sub Category</label>
              <input
                type="text"
                value={product.subCategory}
                onChange={(e) => setProduct({ ...product, subCategory: e.target.value })}
                className="mt-1 w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Specifications</label>
            <div className="flex gap-4 mb-2">
              <input
                type="text"
                value={specKey}
                onChange={(e) => setSpecKey(e.target.value)}
                placeholder="Key"
                className="flex-1 p-2 border rounded"
              />
              <input
                type="text"
                value={specValue}
                onChange={(e) => setSpecValue(e.target.value)}
                placeholder="Value"
                className="flex-1 p-2 border rounded"
              />
              <button
                type="button"
                onClick={addSpecification}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Add
              </button>
            </div>
            <div className="space-y-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between bg-gray-50 p-2 rounded">
                  <span>{key}: {value}</span>
                  <button
                    type="button"
                    onClick={() => {
                      const newSpecs = { ...product.specifications };
                      delete newSpecs[key];
                      setProduct({ ...product, specifications: newSpecs });
                    }}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
            {product.features.map((feature, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  className="flex-1 p-2 border rounded"
                  placeholder={`Feature ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => {
                    const newFeatures = product.features.filter((_, i) => i !== index);
                    setProduct({ ...product, features: newFeatures });
                  }}
                  className="px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addFeature}
              className="mt-2 text-blue-600 hover:underline"
            >
              + Add Feature
            </button>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-6 py-2 border rounded hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;