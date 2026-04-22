import { useState } from 'react';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');

  const generate = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let res = '';
    for (let i = 0; i < 16; i++) {
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(res);
  };

  return (
    <div className="space-y-4">
      <button onClick={generate} className="px-4 py-2 bg-black text-white font-bold">Generate Password</button>
      <div className="p-4 bg-yellow-100 border-2 border-black font-mono font-bold text-center">
        {password || 'Click to generate'}
      </div>
    </div>
  );
}
