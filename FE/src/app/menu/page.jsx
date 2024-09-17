'use client';

import OrderDetailDialog from '@/components/OrderDetailDialog';
import { axiosInstance } from '@/lib/axios';
import { useEffect, useState } from 'react';
import groupBy from 'lodash/groupBy';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
const styles = {
  category:
    ' w-full h-[43px] border-[#D6D8DB] border bg-white rounded-[8px] flex justify-center py-2 px-4 text-black text-[18px] font-[500]',
  selectedCategory:
    ' w-full h-[43px] border-[#D6D8DB] border bg-[#18BA51] rounded-[8px] flex justify-center py-2 px-4 text-black text-[18px] text-white font-[500]',
  contentEmptyConatiner:
    'flex flex-col gap-[30px] items-center justify-center text-[#808080] text-[18px]',
  container: 'w-[1200px] mx-auto flex flex-col gap-[54px]',
  categoryContainer:
    'grid grid-cols-4 gap-x-[26px] gap-y-4 items-center justify-center py-8 ',
  foodsContainer: 'flex flex-wrap gap-y-[60px] gap-x-6 pb-[60px]',
};

const page = () => {
  const [categories, setCategories] = useState();
  const [foods, setFoods] = useState();

  const router = useRouter();

  const searchParams = useSearchParams();

  const category = searchParams.get('category');

  const getCategories = async () => {
    const { data } = await axiosInstance.get('/category/getCategories');
    setCategories(data);
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
    <div className={styles.container}>
      <div className={styles.categoryContainer}>
        {categories &&
          categories.map((el) => (
            <Link
              href={`/menu?category=${el.name}`}
              className={
                category === el.name ? styles.selectedCategory : styles.category
              }
            >
              {el.name}
            </Link>
          ))}
      </div>
      {foods && category && foods[category] ? (
        <div className={styles.foodsContainer}>
          {foods[category].map((food) => (
            <OrderDetailDialog
              name={food.name}
              imageSrc={food.image}
              price={food.price}
              discount={food.discount <= 0 ? null : food.discount}
              recipe={food.ingeredient}
              alt={food.name}
            />
          ))}
        </div>
      ) : (
        <div className={styles.contentEmptyConatiner}>
          <p>Уучлаарай, Меню хоосон байна.</p>
        </div>
      )}
    </div>
  );
};

export default page;
