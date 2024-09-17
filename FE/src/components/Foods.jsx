'use client';
import AdminPlusIcon from '@/components/icons/AdminPlusIcon';
import OrderDetailDialog from '@/components/OrderDetailDialog';
import CreateFood from './CreateFood';
import { useContext } from 'react';
import { DataContext } from '@/app/food&category/page';
import { useSearchParams } from 'next/navigation';

const styles = {
  container:
    'bg-[#F7F7F8] w-full pl-8 py-6 pr-[112px] flex flex-col gap-8 pb-20',
  headerContainer: 'flex justify-between py-4',
  header: 'text-[22px] text-[#272727] font-bold',
  button: 'w-[130px] h-[35px] bg-[#18BA51]',
  cardContainer: 'flex flex-wrap gap-6 gap-y-[60px] w-full',
  contentEmptyConatiner:
    'flex flex-col gap-[30px] items-center justify-center text-[#808080]',
};

export const Foods = () => {
  const { foods } = useContext(DataContext);

  const searchParams = useSearchParams();

  const category = searchParams.get('category');

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>{category}</h1>
        <CreateFood />
      </div>
      {foods && foods[category] ? (
        <div className={styles.cardContainer}>
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
          <AdminPlusIcon />
          <p>Уучлаарай, Таны меню хоосон байна.</p>
        </div>
      )}
    </div>
  );
};

export default Foods;
