import EyeIcon from './icons/eyeIcon';
import { Button } from './ui/button';
import { Input } from './ui/input';

const styles = {
  container: 'w-[384px] h-[485px] rounded-[16px] flex flex-col gap-[48px]  p-8',
  header: 'text-[#0D1118] text-center text-[28px] font-bold',
  form: 'flex flex-col items-start gap-4 w-full text-sm',
  inputContainer: 'flex flex-col gap-2 w-full text-sm',
  subContainer: 'flex flex-col w-full gap-8 items-center text-sm',
  input:
    'w-full flex items-center justify-between border-[#ECEDF0] border-[0.5px] bg-[#F7F7F8] text-[#8B8E95] rounded-[4px] pr-3',
  ButtonStyle1: 'bg-[#EEEFF2] text-[#1C20243D] font-normal px-4 py-2',
  ButtonStyle2:
    'bg-white border-[#18BA51] border-[1px] text-[#272727] font-normal px-4 py-2',
  borderOff: 'bg-[#F7F7F8] border-0',
};

export const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Нэвтрэх</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <h3>Имэйл </h3>
          <Input
            placeholder="Имэйл хаягаа оруулна уу"
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <h3>Нууц үг</h3>
          <div className={styles.input}>
            <Input placeholder="Нууц үг" className={styles.borderOff}></Input>
            <EyeIcon />
          </div>
          <p className="text-end">Нууц үг сэргээх</p>
        </div>
      </form>
      <div className={styles.subContainer}>
        <Button className={styles.ButtonStyle1}>Нэвтрэх</Button>
        <p>Эсвэл</p>
        <Button className={styles.ButtonStyle2}>Бүртгүүлэх</Button>
      </div>
    </div>
  );
};

export default Login;
