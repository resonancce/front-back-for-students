import React, { useState } from 'react';
import { X } from 'lucide-react';
import { axiosInstance } from '../../../../api/axiosInstance'
import { editUserFiled } from '../../../../store/actions/userActions'

interface AdminCarModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export function AdminCarModal({ onClose, onSuccess }: AdminCarModalProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    brand: '',
    price: '',
    image: '',
    type: '',
    seats: '',
    transmission: 'Автоматическая',
    fuel_type: 'Бензин',
    available: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

      axiosInstance('/car', {
        method: 'post',
        data: JSON.stringify({
          ...form,
          price: parseFloat(form.price),
          seats: parseInt(form.seats, 10),
          available: true
        }),
      }).then(() => {
        setTimeout(onSuccess, 500)
        onClose();
      }).catch((error) => {
        alert('Ошибка при добавлении автомобиля');
        console.error('Error:', error);
      })
        .finally(() => setLoading(false))

  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Добавить новый автомобиль</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Название
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="BMW 4 серия"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Бренд
                </label>
                <input
                  type="text"
                  required
                  value={form.brand}
                  onChange={(e) => setForm({ ...form, brand: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="BMW"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Цена (₽/день)
                </label>
                <input
                  type="number"
                  required
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="2500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL изображения
                </label>
                <input
                  type="url"
                  required
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Тип
                </label>
                <input
                  type="text"
                  required
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Купе"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Количество мест
                </label>
                <input
                  type="number"
                  required
                  value={form.seats}
                  onChange={(e) => setForm({ ...form, seats: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="4"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Трансмиссия
                </label>
                <select
                  value={form.transmission}
                  onChange={(e) => setForm({ ...form, transmission: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Автоматическая">Автоматическая</option>
                  <option value="Механическая">Механическая</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Тип топлива
                </label>
                <select
                  value={form.fuel_type}
                  onChange={(e) => setForm({ ...form, fuel_type: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Бензин">Бензин</option>
                  <option value="Дизель">Дизель</option>
                  <option value="Электро">Электро</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? 'Добавление...' : 'Добавить автомобиль'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}