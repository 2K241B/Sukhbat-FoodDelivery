'use client';
import { styles } from '@/app/login/page';
import { Button } from './ui/button';
import { useState } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './ui/input-otp';

export const ForgotPassOTP = () => {
  const [value, setValue] = useState('');
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Нууц үг сэргээх</h2>
      <div className="flex flex-col gap-8">
        <p className="text-[#695C08] font-medium leading-[22.4px]">
          Таны <span className="text-[#18BA51]">example@pinecone.mn</span> хаяг
          руу сэргээх код илгээх болно.
        </p>
        <div className={`${styles.inputContainer} gap-4`}>
          <h3>Нууц үг сэргээх код</h3>
          <div className="flex items-center justify-center">
            <InputOTP
              maxLength={4}
              value={value}
              onChange={(value) => setValue(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
      </div>
      <Button
        disabled={value.length === 4 ? false : true}
        className={styles.ButtonStyle1}
      >
        Үргэлжлүүлэх
      </Button>
    </div>
  );
};

export default ForgotPassOTP;
