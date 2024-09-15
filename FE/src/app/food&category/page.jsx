'use client';
import AdminSideBar from '@/components/AdminSideBar';
import Foods from '@/components/Foods';
import { axiosInstance } from '@/lib/axios';
import groupBy from 'lodash/groupBy';
import { useEffect, useState, createContext } from 'react';

export const DataContext = createContext();

const page = () => {
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [foods, setFoods] = useState();

  const getCategories = async () => {
    const { data } = await axiosInstance.get('/category/getCategories');
    setCategories(data);
    setSelectedCategory(data[0].name);
  };

  const getFoods = async () => {
    const { data } = await axiosInstance.get('/food/getFoods');
    const groupData = groupBy(data, 'categoryId.name');
    setFoods(groupData);
  };

  useEffect(() => {
    getCategories();
    getFoods();
  }, []);

  return (
    <DataContext.Provider
      value={{ categories, foods, setSelectedCategory, selectedCategory }}
    >
      <div className="flex flex-row ">
        <AdminSideBar />
        <Foods />
      </div>
    </DataContext.Provider>
  );
};

export default page;
