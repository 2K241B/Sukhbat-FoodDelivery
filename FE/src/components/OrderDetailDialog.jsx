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

const styles = {
  dialogContent: 'min-w-[981px] min-h-[564px] flex flex-row gap-[33px]',
  subContainer: 'flex flex-col gap-8 max-w-[384px] my-auto',
  header: 'text-[28px] font-bold',
  subHeader: 'text-[18px] font-semibold',
  button: 'rounded-[10px] bg-[#18BA51] text-white h-10',
  submitButton: ' bg-[#18BA51] text-white rounded-[4px]',
  current: 'min-w-[254px] flex items-center justify-center font-semibold',
  orts: 'text-[#767676] p-3 bg-[#F6F6F6] rounded-[8px] flex items-center justify-center',
  price: 'text-[18px] font-semibold text-[#18BA51]',
  buttonContainer: 'flex justify-between gap-5',
};

export const OrderDetailDialog = ({ name, price, orts, imageSrc }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Order Detail</Button>
      </DialogTrigger>
      <DialogContent className={styles.dialogContent}>
        <Image src={imageSrc} width={500} height={500} />
        <div className={styles.subContainer}>
          <div>
            <h2 className={styles.header}>{name}</h2>
            <p className={styles.price}>{price}₮</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className={styles.subHeader}>Орц</h4>
            <p className={styles.orts}>{orts}</p>
          </div>
          <h4 className={styles.subHeader}>Тоо</h4>
          <div className={styles.buttonContainer}>
            <Button className={styles.button}>
              <MinusIcon />
            </Button>
            <p className={styles.current}>1</p>
            <Button className={styles.button}>
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
