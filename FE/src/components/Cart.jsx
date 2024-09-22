'use client';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import ArrowLeftIcon from './icons/arrowLeftIcon';
import food from '@/components/assets/cardFood.png';
import CartCard from './CartCard';
import CartIcon from './icons/CartIcon';
import { useContext, useMemo } from 'react';
import { LayoutContext } from './Provider';
import { useGetFoods } from '@/hooks/useGetFoods';
import _ from 'lodash';

const styles = {
  container: 'flex flex-col p-6 pb-0 h-full overflow-auto',
  p: 'text-[#5E6166] text-[18px] ',
  totalAmount: 'text-[#121316] text-[18px] font-bold',
  button: 'bg-[#18BA51] font-normal',
  contentContainer:
    'flex items-center gap-2 text-sm font-bold leading-4 spacing-[0,2px] px-4 py-2 hover:cursor-pointer',
};

export const Cart = () => {
  const { cartItem } = useContext(LayoutContext);
  const { response, loading, error } = useGetFoods();

  const filteredFoods = useMemo(
    () =>
      response &&
      response.filter((food, i) => {
        return (food._id = cartItem[i]);
      }),
    [cartItem]
  );
  console.log(filteredFoods);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className={styles.contentContainer}>
          <CartIcon />
          <p>Сагс</p>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className={styles.container}>
          <AlertDialogHeader>
            <AlertDialogCancel>
              <ArrowLeftIcon />
            </AlertDialogCancel>
            <AlertDialogTitle>Таны сагс</AlertDialogTitle>
          </AlertDialogHeader>
          <div className="flex flex-col h-full ">
            {filteredFoods &&
              filteredFoods.map((food) => (
                <CartCard
                  name={food.name}
                  alt={food.name}
                  imageSrc={food.image}
                  price={food.price}
                  recipe={food.ingeredient}
                />
              ))}
          </div>
        </div>
        <AlertDialogFooter>
          <div>
            <p className={styles.p}>Нийт төлөх дүн</p>
            <h2 className={styles.totalAmount}>
              {_.sumBy(filteredFoods, 'price')}
            </h2>
          </div>
          <Button className={styles.button}>Захиалах</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Cart;
