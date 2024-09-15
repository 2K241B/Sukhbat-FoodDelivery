'use client';
import DottedIcon from '@/components/icons/DottedIcon';
import { Button } from './ui/button';
import CreateCategory from './CreateCategory';
import { useContext } from 'react';
import { DataContext } from '@/app/food&category/page';

export const styles = {
  container:
    'min-w-[402px] h-screen pl-[120px] py-[26px] pr-6 flex flex-col gap-10 bg-white',
  header: 'text-[22px] font-bold',
  category:
    ' w-full h-10 border-[#D6D8DB] border bg-white rounded-[8px] flex items-center justify-between py-2 px-4 text-black text-[18px] font-[500]',
  selectedCategory:
    ' w-full h-10 border-[#D6D8DB] border bg-[#18BA51] rounded-[8px] flex items-center justify-between py-2 px-4 text-black text-[18px] text-white font-[500]',
  categoryAdd:
    ' w-full h-10 border-[#D6D8DB] border bg-white rounded-[8px] flex items-center py-2 px-4 gap-2 text-[#5E6166] justify-start',
  categoryContainer: 'flex flex-col gap-[26px]',
};
export const AdminSideBar = () => {
  const { categories, setSelectedCategory, selectedCategory } =
    useContext(DataContext);
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Food menu</h2>
      <div className={styles.categoryContainer}>
        {categories &&
          categories.map((category) => (
            <Button
              className={
                selectedCategory === category.name
                  ? styles.selectedCategory
                  : styles.category
              }
              onClick={() => setSelectedCategory(category.name)}
            >
              <h4>{category.name}</h4>
              <DottedIcon
                color={
                  selectedCategory === category.name ? '#ffffff' : '#1C1B1F'
                }
              />
            </Button>
          ))}
        <CreateCategory />
      </div>
    </div>
  );
};

export default AdminSideBar;
