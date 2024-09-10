import Card from './Card';
import ArrowIcon from './icons/ArrowIcon';
import TermOfServiceIcon from './icons/TermOfServiceIcon';

const styles = {
  container: ' w-[1200px] mx-auto flex flex-col gap-6',
  subContainer: 'flex items-center justify-between  py-4',
  headerContainer: 'flex items-center justify-center gap-1',
  header: 'w-[1039px] text-[22px] font-bold text-[#272727]',
  showAll: 'flex items-center justify-center gap-2 text-[#18BA51] text-sm',
  cardContainer: 'flex items-center gap-6',
};

export const CategoryFeature = ({ categoryName = 'categoryName' }) => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.headerContainer}>
          <TermOfServiceIcon />
          <h2 className={styles.header}>{categoryName}</h2>
        </div>
        <div className={styles.showAll}>
          <p>Бүгдийг харах</p>
          <ArrowIcon />
        </div>
      </div>
      <div className={styles.cardContainer}>
        <Card title="" price="" salePrice="" />
      </div>
    </div>
  );
};

export default CategoryFeature;