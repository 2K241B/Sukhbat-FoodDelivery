'use client';
import {
  EditIcon,
  HistoryIcon,
  MailIcon,
  PhoneIcon,
  UserPageUserIcon,
} from './icons';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useCookies } from 'next-client-cookies';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ProfileLogout from './ProfileLogout';

const styles = {
  container: 'flex flex-col gap-6 w-[432px] mx-auto pt-[76px]',
  avatarContainer: 'flex flex-col items-center gap-10',
  editIconBg:
    'size-[34px] bg-white rounded-full border-[1px] border-[#D6D8DB] flex items-center justify-center absolute right-[-4px] bottom-[-5px]',
  formContainer: 'pt-4 px-5 flex flex-col items-center gap-4',
  formSubContainer:
    'flex gap-2 px-5 py-2 rounded-[8px] bg-[#F6F6F6] min-w-[392px] items-center',
  formContentHeader: 'text-[#888A99] text-xs',
  buttons:
    'flex gap-2 px-5 py-2 rounded-[8px] min-w-[392px] items-center cursor-pointer',
  textContainer: 'flex flex-col gap-1 w-[264px]',
};

export const UserPage = () => {
  const router = useRouter();
  const cookies = useCookies();

  const encodedToken = cookies.get('token');

  const decoded = encodedToken && jwtDecode(encodedToken);

  const user = decoded && decoded._doc;

  useEffect(() => {
    encodedToken === undefined && router.push('/');
    router.refresh();
  }, [encodedToken]);

  const handlerLogOut = () => {
    cookies.remove('token');
  };

  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <div className="size-[120px] relative">
          <Avatar className="size-[120px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className={styles.editIconBg}>
            <EditIcon />
          </div>
        </div>
        <h2 className="text-[28px] font-bold">{user && user.name}</h2>
      </div>
      <form className={styles.formContainer}>
        <div className={styles.formSubContainer}>
          <UserPageUserIcon />
          <div className={styles.textContainer}>
            <p className={styles.formContentHeader}>Таны нэр</p>
            <h4>{user && user.name}</h4>
          </div>
          <EditIcon />
        </div>
        <div className={styles.formSubContainer}>
          <PhoneIcon />
          <div className={styles.textContainer}>
            <p className={styles.formContentHeader}>Утасны дугаар</p>
            <h4>{user && user.phone}</h4>
          </div>
          <EditIcon />
        </div>
        <div className={styles.formSubContainer}>
          <MailIcon />
          <div className={styles.textContainer}>
            <p className={styles.formContentHeader}>Имэйл хаяг</p>
            <h4>{user && user.email}</h4>
          </div>
          <EditIcon />
        </div>
        <div className={styles.buttons}>
          <HistoryIcon />
          <h4>Захиалгын түүх</h4>
        </div>
        <ProfileLogout handlerLogOut={handlerLogOut} />
      </form>
    </div>
  );
};

export default UserPage;
