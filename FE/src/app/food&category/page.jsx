'use client';
import AdminSideBar from '@/components/AdminSideBar';
import Foods from '@/components/Foods';
import { axiosInstance } from '@/lib/axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState, createContext } from 'react';

export const DataContext = createContext();

const page = () => {
  const [foodAndCategories, setFoodAndCategories] = useState();

  const router = useRouter();

  const getCategoriesAndFoods = async () => {
    const { data } = await axiosInstance.get('/category/foods');
    setFoodAndCategories(data);
    router.push(`/food&category?category=${0}`);
  };

  useEffect(() => {
    getCategoriesAndFoods();
  }, []);

  return (
    <DataContext.Provider value={{ foodAndCategories }}>
      <div className="flex flex-row ">
        <AdminSideBar />
        <Foods />
      </div>
    </DataContext.Provider>
  );
};

export default page;
