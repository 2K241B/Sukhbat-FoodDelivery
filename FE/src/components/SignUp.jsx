import { EyeIcon } from './icons';
import { styles } from './Login';
import { Button } from './ui/button';
import { Input } from './ui/input';

const style = {
  container:
    'p-8 flex flex-col gap-12 rounded-[16px] max-w-[448px] h-fit bg-white',
  form: 'flex flex-col gap-3',
  bottomContainer: 'flex flex-col gap-8',
  checkbox: 'flex gap-2 px-4 py-2 text-sm',
};

export const SignUp = () => {
  return (
    <div className={style.container}>
      <h2 className={styles.header}>Бүртгүүлэх</h2>
      <form className={style.form}>
        <div className={styles.inputContainer}>
          <h3>Нэр</h3>
          <Input placeholder="Нэрээ оруулна уу" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <h3>И-мэйл</h3>
          <Input
            placeholder="И-мэйл хаягаа оруулна уу"
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <h3>Хаяг</h3>
          <Input placeholder="Та хаягаа оруулна уу" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <h3>Нууц үг</h3>
          <div className={styles.input}>
            <Input
              type="password"
              placeholder="Нууц үгээ оруулна уу"
              className={styles.borderOff}
            ></Input>
            <EyeIcon />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <h3>Нууц үг давтах</h3>
          <div className={styles.input}>
            <Input
              type="password"
              placeholder="Нууц үгээ оруулна уу"
              className={styles.borderOff}
            ></Input>
            <EyeIcon />
          </div>
        </div>
      </form>
      <div className={style.bottomContainer}>
        <div className={style.checkbox}>
          <input type="checkbox" />
          <p>Үйлчилгээний нөхцөл зөвшөөрөх</p>
        </div>
        <Button className={styles.ButtonStyle1}>Бүртгүүлэх</Button>
      </div>
    </div>
  );
};

export default SignUp;
