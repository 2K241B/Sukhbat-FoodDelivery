import AdminSideBar from '@/components/AdminSideBar';
import CreateFood from '@/components/CreateFood';

const page = () => {
  return (
    <div>
      <div className="flex flex-row">
        <AdminSideBar />
        <CreateFood />
      </div>
    </div>
  );
};

export default page;
