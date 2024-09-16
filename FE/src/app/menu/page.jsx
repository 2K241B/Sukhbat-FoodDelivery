'use client';

import OrderDetailDialog from '@/components/OrderDetailDialog';
import { Button } from '@/components/ui/button';
import { axiosInstance } from '@/lib/axios';
import { useEffect, useState } from 'react';
import groupBy from 'lodash/groupBy';
const styles = {
  button:
    'max-h-[43px] bg-white text-black border border-[#D6D8DB] rounded-[8px] text-[18px] font-medium leading-[27px] tracking-[-0.396px]',
  activeButton:
    'max-h-[43px] bg-[#18BA51] text-white border border-[#D6D8DB] rounded-[8px] text-[18px] font-medium leading-[27px] tracking-[-0.396px]',
  contentEmptyConatiner:
    'flex flex-col gap-[30px] items-center justify-center text-[#808080] text-[18px]',
  container: 'w-[1200px] mx-auto flex flex-col gap-[54px]',
  categoryContainer:
    'grid grid-cols-4 gap-x-[26px] gap-y-4 items-center justify-center py-8 ',
  foodsContainer: 'flex flex-wrap gap-y-[60px] gap-x-6 pb-[60px]',
};

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
    <div className={styles.container}>
      <div className={styles.categoryContainer}>
        {categories &&
          categories.map((category) => (
            <Button
              className={
                selectedCategory === category.name
                  ? styles.activeButton
                  : styles.button
              }
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </Button>
          ))}
      </div>
      {foods && selectedCategory && foods[selectedCategory] ? (
        <div className={styles.foodsContainer}>
          {foods[selectedCategory].map((food) => (
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
