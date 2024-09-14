import Cart from '@/components/Cart';
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
          imageSrc={
            'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg'
          }
          price={6000}
          // discount={20}
          recipe="Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  "
        />
      </div>
    </main>
  );
}
