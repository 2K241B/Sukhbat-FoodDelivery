import AdminPlusIcon from '@/components/icons/AdminPlusIcon';
import OrderDetailDialog from '@/components/OrderDetailDialog';
import { Button } from '@/components/ui/button';
import food from '@/components/assets/cardFood.png';

const styles = {
  container:
    'bg-[#F7F7F8] h-screen w-full pl-8 py-6 pr-[112px] flex flex-col gap-8',
  headerContainer: 'flex justify-between py-4',
  header: 'text-[22px] text-[#272727] font-bold',
  button: 'w-[130px] h-[35px] bg-[#18BA51]',
  cardContainer: 'flex flex-wrap gap-6 gap-y-[60px] w-full',
  contentEmptyConatiner:
    'flex flex-col gap-[30px] items-center justify-center text-[#808080]',
};

const cardData = false;

export const CreateFood = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Breakfast</h1>
        <Button className={styles.button}>Add new food</Button>
      </div>
      {cardData ? (
        <div className={styles.cardContainer}>
          <OrderDetailDialog
            name="Өглөөний хоол"
            imageSrc={food}
            price={4800}
            recipe="Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  "
          />
          <OrderDetailDialog
            name="Өглөөний хоол"
            imageSrc={food}
            price={4800}
            recipe="Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  "
          />
          <OrderDetailDialog
            name="Өглөөний хоол"
            imageSrc={food}
            price={4800}
            recipe="Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  "
          />
          <OrderDetailDialog
            name="Өглөөний хоол"
            imageSrc={food}
            price={4800}
            recipe="Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  "
          />
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

export default CreateFood;
