import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, X, Package, DollarSign, FileText, Tag, Building2, Hash } from 'lucide-react';

interface ProductForm {
  name: string;
  description: string;
  price: string;
  category: string;
  brand: string;
  quantity: string;
  prescription: boolean;
  images: File[];
}

const CreateProductPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState<ProductForm>({
    name: '',
    description: '',
    price: '',
    category: 'medicamentos',
    brand: '',
    quantity: '0',
    prescription: false,
    images: []
  });

  const categories = [
    { id: 'medicamentos', name: 'Medicamentos' },
    { id: 'cosmeticos', name: 'Cosméticos' },
    { id: 'vitaminas', name: 'Vitaminas' },
    { id: 'higiene', name: 'Higiene' },
    { id: 'equipamentos', name: 'Equipamentos' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    // Validar tipo de arquivo
    const validFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (validFiles.length !== files.length) {
      setError('Apenas arquivos de imagem são permitidos');
      return;
    }

    // Limitar a 5 imagens
    if (formData.images.length + validFiles.length > 5) {
      setError('Máximo de 5 imagens permitidas');
      return;
    }

    setFormData(prev => ({ 
      ...prev, 
      images: [...prev.images, ...validFiles] 
    }));
    setError('');
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Validar campos obrigatórios
      if (!formData.name.trim()) {
        throw new Error('Nome do produto é obrigatório');
      }
      if (!formData.description.trim()) {
        throw new Error('Descrição é obrigatória');
      }
      if (!formData.price || parseFloat(formData.price) <= 0) {
        throw new Error('Preço deve ser maior que zero');
      }
      if (!formData.brand.trim()) {
        throw new Error('Marca é obrigatória');
      }

      // Criar FormData para envio
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('price', formData.price);
      data.append('category', formData.category);
      data.append('brand', formData.brand);
      data.append('quantity', formData.quantity);
      data.append('prescription', formData.prescription.toString());

      // Adicionar imagens
      formData.images.forEach(image => {
        data.append('images', image);
      });

      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: data
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao cadastrar produto');
      }

      await response.json();
      setSuccess('Produto cadastrado com sucesso!');
      
      // Limpar formulário
      setFormData({
        name: '',
        description: '',
        price: '',
        category: 'medicamentos',
        brand: '',
        quantity: '0',
        prescription: false,
        images: []
      });

      // Redirecionar após sucesso
      setTimeout(() => {
        navigate('/seller-dashboard');
      }, 2000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao cadastrar produto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-green-600 text-white p-6">
            <h1 className="text-2xl font-bold flex items-center">
              <Package className="w-6 h-6 mr-3" />
              Cadastrar Novo Produto
            </h1>
            <p className="mt-2 text-green-100">
              Preencha as informações do produto que deseja cadastrar
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Messages */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                {success}
              </div>
            )}

            {/* Upload de Imagens */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Upload className="w-4 h-4 inline mr-2" />
                Imagens do Produto (máximo 5)
              </label>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="w-12 h-12 text-gray-400 mb-4" />
                  <span className="text-sm text-gray-600">
                    Clique para selecionar imagens ou arraste aqui
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    PNG, JPG, JPEG até 5MB cada
                  </span>
                </label>
              </div>

              {/* Preview das imagens */}
              {formData.images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Nome do Produto *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Ex: Paracetamol 500mg"
                />
              </div>

              {/* Preço */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 inline mr-2" />
                  Preço (R$) *
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  step="0.01"
                  min="0"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="0.00"
                />
              </div>

              {/* Categoria */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Tag className="w-4 h-4 inline mr-2" />
                  Categoria *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Marca */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Building2 className="w-4 h-4 inline mr-2" />
                  Marca *
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Ex: Genérico, Bayer, etc."
                />
              </div>

              {/* Quantidade em Estoque */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Hash className="w-4 h-4 inline mr-2" />
                  Quantidade em Estoque
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>

              {/* Prescrição */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="prescription"
                  id="prescription"
                  checked={formData.prescription}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="prescription" className="ml-2 block text-sm text-gray-700">
                  Requer prescrição médica
                </label>
              </div>
            </div>

            {/* Descrição */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição do Produto *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Descreva detalhadamente o produto, suas indicações, composição, etc."
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Cadastrando...' : 'Cadastrar Produto'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProductPage;