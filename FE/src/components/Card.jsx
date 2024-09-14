import Image from 'next/image';

const styles = {
  container: 'flex flex-col gap-[14px] items-start',
  imgContainer: 'relative w-[282px] min-h-[186px] rounded-2xl',
  discount:
    ' absolute rounded-2xl py-1 px-4 text-lg font-semibold text-white bg-[#18BA51] border-white border-[1px] flex justify-center items-center top-4 right-4',
  title: 'text-[20px] font-[590]',
  price: 'text-[#18BA51] font-semibold text-lg',
  salePrice: 'text-lg line-through',
};

export const Card = ({ imageSrc, title, price, discount }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={imageSrc} fill objectFit="cover" className="rounded-2xl " />
        {discount && <div className={styles.discount}>{discount}%</div>}
      </div>

      <div>
        <h2 className={styles.title}>{title}</h2>
        <div className="flex gap-4">
          {discount ? (
            <p className={styles.price}>{price - (price / 100) * discount}₮</p>
          ) : (
            <p className={styles.price}>{price}₮</p>
          )}
          {discount && <p className={styles.salePrice}>{price}₮</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
