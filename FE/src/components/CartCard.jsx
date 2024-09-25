'use client';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MinusIcon from './icons/MinusIcon';
import PlusIcon from './icons/PlusIcon';
import { useEffect, useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { axiosInstance } from '@/lib/axios';
import { useRouter } from 'next/navigation';

const styles = {
  container: 'py-6 px-4 border-b grid grid-cols-2 gap-4',
  imageContainer: 'relative h-[156px] w-[245px]',
  subContainer: 'flex flex-col items-start justify-between gap-2',
  headerContainer: 'flex justify-between items-start w-full',
  header: 'text-[18px] font-semibold',
  price: 'text-[#18BA51] text-[16px] font-semibold',
  salePrice: 'text-[16px] line-through',
  button: 'w-[45px] h-10 bg-[#18BA51]',
  buttonContainer: 'flex justify-between items-center gap-2',
  recipe: 'text-[#767676] text-[16px]',
};

export const CartCard = ({
  imageSrc,
  name,
  price,
  recipe,
  discount,
  alt,
  quantity,
  id,
}) => {
  const cartId = localStorage.getItem('cartId');
  const handlerDelete = async () => {
    await axiosInstance.post(`/cart/deleteCartItem`, {
      id: cartId,
      productId: id,
    });
  };
  useEffect(() => {
    console.log(quantity);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <CldImage
          src={imageSrc}
          className=" rounded-2xl relative"
          width="282"
          height="186"
          alt={alt}
          crop={{
            type: 'auto',
            source: true,
          }}
        />
      </div>
      <div className={styles.subContainer}>
        <div className={styles.headerContainer}>
          <div>
            <h2 className={styles.header}>{name}</h2>
            <div className="flex items-center gap-3">
              {discount ? (
                <p className={styles.price}>
                  {price - (price / 100) * discount}₮
                </p>
              ) : (
                <p className={styles.price}>{price}₮</p>
              )}
              {discount && <p className={styles.salePrice}>{price}₮</p>}
            </div>
          </div>
          <div onClick={handlerDelete}>
            <X size={20} />
          </div>
        </div>

        <p className={styles.recipe}>{recipe}</p>
        <div className={styles.buttonContainer}>
          <Button className={styles.button}>
            <MinusIcon />
          </Button>
          <p className="text-center px-[30px]">{quantity}</p>
          <Button className={styles.button}>
            <PlusIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
