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
import CartCard from './CartCard';
import CartIcon from './icons/CartIcon';
import { useContext, useEffect, useMemo, useState } from 'react';
import { axiosInstance } from '@/lib/axios';

const styles = {
  container: 'flex flex-col p-6 pb-0 h-full overflow-auto',
  p: 'text-[#5E6166] text-[18px] ',
  totalAmount: 'text-[#121316] text-[18px] font-bold',
  button: 'bg-[#18BA51] font-normal',
  contentContainer:
    'flex items-center gap-2 text-sm font-bold leading-4 spacing-[0,2px] px-4 py-2 hover:cursor-pointer',
};

export const Cart = () => {
  const [cartFoods, setCartFoods] = useState();
  const cartId = localStorage.getItem('cartId');

  useEffect(() => {
    const getCart = async () => {
      const { data } = await axiosInstance.get(`/cart/getCart/${cartId}`);
      data && setCartFoods(data.products);
    };
    getCart();
  }, []);
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
            {cartFoods &&
              cartFoods.map((product) => (
                <CartCard
                  id={product.productId._id}
                  name={product.productId.name}
                  imageSrc={product.productId.image}
                  price={product.productId.price}
                  discount={product.productId.discount}
                  quantity={product.quantity}
                  recipe={product.productId.ingeredient}
                />
              ))}
          </div>
        </div>
        <AlertDialogFooter>
          <div>
            <p className={styles.p}>Нийт төлөх дүн</p>
            <h2 className={styles.totalAmount}>34,800₮</h2>
          </div>
          <Button className={styles.button}>Захиалах</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Cart;
