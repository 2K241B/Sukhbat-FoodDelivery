import Feature from '@/components/Feature';
import Footer from '@/components/Footer';
import ForgetPass from '@/components/ForgetPass';
import Login from '@/components/Login';
import NotFoundPage from '@/components/NotFoundPage';
import SignUp from '@/components/SignUp';
import UserPage from '@/components/UserPage';

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-[111px] pb-[75px]">
      <Login />
    </main>
  );
}
