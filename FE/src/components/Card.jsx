import Image from 'next/image';

const styles = {
  container: 'flex flex-col gap-[14px]',
  imgContainer: 'relative w-[282px] h-[186px] rounded-2xl',
  discount:
    ' absolute rounded-2xl py-1 px-4 text-lg font-semibold text-white bg-[#18BA51] border-white border-[1px] flex justify-center items-center top-4 right-4',
  title: 'text-[20px] font-[590]',
  price: 'text-[#18BA51] font-semibold text-lg',
  salePrice: 'text-lg line-through',
};

export const Card = ({ imageSrc, title, price, salePrice }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={imageSrc} className="rounded-2xl " />
        {salePrice && (
          <div className={styles.discount}>
            {Math.floor(((salePrice - price) / salePrice) * 100)}%
          </div>
        )}
      </div>

      <div>
        <h2 className={styles.title}>{title}</h2>
        <div className="flex gap-4">
          <p className={styles.price}>{price}₮</p>
          {salePrice && <p className={styles.salePrice}>{salePrice}₮</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
