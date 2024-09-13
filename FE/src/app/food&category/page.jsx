import AdminSideBar from '@/components/AdminSideBar';
import Foods from '@/components/Foods';

const page = () => {
  return (
    <div>
      <div className="flex flex-row ">
        <AdminSideBar />
        <Foods />
      </div>
    </div>
  );
};

export default page;
