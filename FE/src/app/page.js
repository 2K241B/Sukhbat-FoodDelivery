'use client';
import CategoryFeature from '@/components/CategoryFeature';
import Feature from '@/components/Feature';
import HomePageMain from '@/components/HomePageMain';
import { axiosInstance } from '@/lib/axios';
import { useEffect, useState } from 'react';
import groupBy from 'lodash/groupBy';
import OrderDetailDialog from '@/components/OrderDetailDialog';

export default function Home() {
  const [foods, setFoods] = useState();

  const getFoods = async () => {
    const { data } = await axiosInstance.get('/food/getFoods');
    const groupData = groupBy(data, 'categoryId.name');
    setFoods(groupData);
  };
  useEffect(() => {
    getFoods();
  }, []);

  return (
    <main>
      <HomePageMain />
      <Feature />
      <div className="flex flex-col gap-20 pb-20">
        {foods &&
          Object.keys(foods).map((category) => (
            <CategoryFeature categoryName={category} data={foods[category]} />
          ))}
      </div>
    </main>
  );
}
