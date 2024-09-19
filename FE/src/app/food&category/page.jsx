'use client';
import AdminSideBar from '@/components/AdminSideBar';
import Foods from '@/components/Foods';
import Loading from '@/components/Loading';
import { useFoodsAndCategories } from '@/hooks/useFoodsAndCategories';
import { axiosInstance } from '@/lib/axios';
import { useRouter } from 'next/navigation';
import { useEffect, createContext } from 'react';

export const DataContext = createContext();

const page = () => {
  const router = useRouter();

  const { response, loading, error } = useFoodsAndCategories();

  useEffect(() => {
    router.push(`/food&category?category=${0}`);
  }, []);

  const handlerDeleteClick = async (categoryId) => {
    await axiosInstance.delete(`/category/categoryDelete/${categoryId}`);
    router.push(`/food&category?category=${0}`);
  };

  return (
    <DataContext.Provider value={{ response, handlerDeleteClick }}>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-row ">
          <AdminSideBar />
          <Foods />
        </div>
      )}
    </DataContext.Provider>
  );
};

export default page;
