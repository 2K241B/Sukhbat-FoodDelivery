import CartCard from '@/components/CartCard';
import WaitingIcon from '@/components/icons/WaitingIcon';
import food from '@/components/assets/cardFood.png';
import { Button } from '@/components/ui/button';

const styles = {
  orderContainer:
    'p-6 w-[432px] h-[624px] flex flex-col justify-between gap-10 rounded-2xl shadow-lg',
  bottomContainer: 'grid grid-cols-2 text-[18px] items-center',
  button:
    'disabled:bg-[#EEEFF2] disabled:text-[#1C20243D] text-white bg-[#18BA51]',
};
export const OrderDetailStep2 = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="p-6 flex items-center gap-4">
        <WaitingIcon />
        <div>
          <p>Алхам 2</p>
          <h3>Захиалга баталгаажуулах</h3>
          <p>Хүлээгдэж байна</p>
        </div>
      </div>
      <div className={styles.orderContainer}>
        <div></div>
        <div className={styles.bottomContainer}>
          <div>
            <p className=" text-[#5E6166]">Нийт төлөх дүн</p>
            <h3 className="text-[#121316] font-bold">34,800₮</h3>
          </div>
          <Button className={styles.button} disabled>
            Захиалах
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailStep2;
