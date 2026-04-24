import { useState } from 'react';
import LoginPage from '@/components/LoginPage';
import UserInfoPage from '@/components/UserInfoPage';
import AssistantPage from '@/components/AssistantPage';
import { UserInfo } from '@/types';

type Step = 'login' | 'userInfo' | 'assistant';

const Index = () => {
  const [step, setStep] = useState<Step>('login');
  const [username, setUsername] = useState('');

  const handleLogin = (user: string) => {
    setUsername(user);
    setStep('userInfo');
  };

  const handleUserInfo = (_info: UserInfo) => {
    setStep('assistant');
  };

  const handleLogout = () => {
    setStep('login');
    setUsername('');
  };

  return (
    <>
      {step === 'login' && <LoginPage onLogin={handleLogin} />}
      {step === 'userInfo' && <UserInfoPage onSubmit={handleUserInfo} />}
      {step === 'assistant' && <AssistantPage username={username} onLogout={handleLogout} />}
    </>
  );
};

export default Index;
