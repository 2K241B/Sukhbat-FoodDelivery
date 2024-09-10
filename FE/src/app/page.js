import Feature from '@/components/Feature';
import HomePageMain from '@/components/HomePageMain';
import OrderDetailDialog from '@/components/OrderDetailDialog';
import food from '@/components/assets/cardFood.png';

export default function Home() {
  return (
    <main>
      <HomePageMain />
      <Feature />
      <div className="p-20">
        <OrderDetailDialog
          name="Өглөөний хоол"
          imageSrc={food}
          price={4800}
          salePrice={6000}
          recipe="Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  "
        />
      </div>
    </main>
  );
}
