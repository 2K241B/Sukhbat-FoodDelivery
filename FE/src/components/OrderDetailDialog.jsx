'use client';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import Image from 'next/image';
import kk from '@/components/assets/deliveryZone.png';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';
import { useEffect, useState } from 'react';
const style = {
  container: 'flex flex-col gap-[14px] items-start',
  imgContainer: 'relative w-[282px] min-h-[186px] rounded-2xl',
  discount:
    ' absolute rounded-2xl py-1 px-4 text-lg font-semibold text-white bg-[#18BA51] border-white border-[1px] flex justify-center items-center top-4 right-4',
  title: 'text-[20px] font-[590]',
  price: 'text-[#18BA51] font-semibold text-lg',
  salePrice: 'text-lg line-through',
};

const styles = {
  dialogContent: 'min-w-[981px] min-h-[564px] flex flex-row gap-[33px]',
  subContainer: 'flex flex-col gap-8 max-w-[384px] my-auto',
  header: 'text-[28px] font-bold',
  subHeader: 'text-[18px] font-semibold',
  button: 'rounded-[10px] bg-[#18BA51] text-white h-10',
  submitButton: ' bg-[#18BA51] text-white rounded-[4px]',
  current: 'min-w-[254px] flex items-center justify-center font-semibold',
  recipe:
    'text-[#767676] p-3 bg-[#F6F6F6] rounded-[8px] flex items-center justify-center',
  price: 'text-[18px] font-semibold text-[#18BA51]',
  buttonContainer: 'flex justify-between gap-5',
};

export const OrderDetailDialog = ({
  name,
  price,
  recipe,
  imageSrc,
  salePrice,
}) => {
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    if (current < 1) return setCurrent(1);
  }, [current]);
  return (
    <Dialog>
      <DialogTrigger>
        <div className={style.container}>
          <div className={style.imgContainer}>
            <Image src={imageSrc} className="rounded-2xl " />
            {salePrice && (
              <div className={style.discount}>
                {Math.floor(((salePrice - price) / salePrice) * 100)}%
              </div>
            )}
          </div>

          <div>
            <h2 className={style.title}>{name}</h2>
            <div className="flex gap-4">
              {price && <p className={style.price}>{price}₮</p>}
              {salePrice && <p className={style.salePrice}>{salePrice}₮</p>}
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className={styles.dialogContent}>
        <Image
          src={imageSrc}
          width={500}
          height={500}
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.subContainer}>
          <div>
            <h2 className={styles.header}>{name}</h2>
            <p className={styles.price}>{price}₮</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className={styles.subHeader}>Орц</h4>
            <p className={styles.recipe}>{recipe}</p>
          </div>
          <h4 className={styles.subHeader}>Тоо</h4>
          <div className={styles.buttonContainer}>
            <Button
              onClick={() => setCurrent(current - 1)}
              className={styles.button}
            >
              <MinusIcon />
            </Button>
            <p className={styles.current}>{current}</p>
            <Button
              onClick={() => setCurrent(current + 1)}
              className={styles.button}
            >
              <PlusIcon />
            </Button>
          </div>
          <DialogClose>
            <Button className={styles.submitButton} type="submit">
              Сагслах
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailDialog;
