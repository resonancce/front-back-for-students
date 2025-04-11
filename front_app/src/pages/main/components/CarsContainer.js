import React, { useState, useEffect } from 'react';
import { CarCard } from './components/CarCard';
import { RentalForm } from './components/RentalForm';
import { BookingModal } from './components/BookingModal';
import { AdminCarModal } from './components/AdminCarModal';
import { Car as CarIcon, Plus } from 'lucide-react';
import { axiosInstance } from '../../../api/axiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import { editUserFiled } from '../../../store/actions/userActions'
import { clearUserToken } from '../../../utils/userToken'

export const CarsContainer = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [cars, setCars] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    fetchCars();
    setTimeout(() => {
      checkAdminStatus();
    }, 300 )
  }, []);

  const fetchCars = async () => {
    setLoading(true);

    axiosInstance('/car', {
      method: 'get',
    }).then((res) => {
      setCars(res?.data?.cars || [])
    }).catch((err) => console.error('@@---->err', err))
      .finally(() => setLoading(false))
  };

  const checkAdminStatus =  () => {
    axiosInstance('/user', {
      method: 'get',
    }).then((res) => {
      if (res?.data?.user) dispatch(editUserFiled(res?.data.user))
      setIsAdmin(res?.data.user.role === 'admin')
    }).catch(() => {
      clearUserToken()
      dispatch(editUserFiled(null))
    })
      .finally(() => setLoading(false))
  };

  const handleRent = (car) => {
    setSelectedCar(car);
  };

  const handleBookingSubmit = async (booking) => {
    try {
      // const { error } = await supabase.from('bookings').insert([{
      //   car_id: selectedCar?.id,
      //   pickup_date: booking.pickupDate,
      //   return_date: booking.returnDate,
      //   location: booking.location,
      //   comment: booking.comment
      // }]);

      // if (error) throw error;

      alert('Спасибо за бронирование! Мы свяжемся с вами в ближайшее время.');
      setSelectedCar(null);
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Произошла ошибка при бронировании');
    }
  };

  const handleSearch = (form) => {
    console.log('Критерии поиска:', form);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <CarIcon size={40} />
            <h1 className="text-4xl font-bold ml-2">АвтоПрокат</h1>
          </div>
          <h2 className="text-center text-2xl mb-8">Найдите идеальный автомобиль</h2>
          <div className="max-w-4xl mx-auto">
            <RentalForm onSubmit={handleSearch} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Доступные автомобили</h2>
          {isAdmin && (
            <button
              onClick={() => {
                setShowAdminModal(true)
              }}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <Plus size={20} />
              Добавить автомобиль
            </button>
          )}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Загрузка автомобилей...</p>
          </div>
        ) : cars?.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Автомобили не найдены</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <CarCard key={car._id} car={car} onRent={handleRent} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <CarIcon size={24} />
              <span className="ml-2 text-xl font-bold">АвтоПрокат</span>
            </div>
            <div className="text-center md:text-right">
              <p>© 2025 АвтоПрокат. Все права защищены.</p>
              <p className="text-gray-400">Условия использования | Политика конфиденциальности</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedCar && (
        <BookingModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
          onSubmit={handleBookingSubmit}
        />
      )}
      {showAdminModal && (
        <AdminCarModal
          onClose={() => setShowAdminModal(false)}
          onSuccess={() => {
            fetchCars();
            setShowAdminModal(false);
          }}
        />
      )}
    </div>
  );
}