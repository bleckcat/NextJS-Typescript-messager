import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoutButton from './LogoutButton';
import { unstable_getServerSession } from 'next-auth';

async function Header() {
  const session = await unstable_getServerSession();

  if (session) {
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 object-contain shadow-sm"
            src={session.user?.image!}
            alt="Profile Picture"
            width={50}
            height={50}
          />
          <div>
            <p className="text-orange-400">Logged in as:</p>
            <p className="font-bold text-lg">{session.user?.name}</p>
          </div>
        </div>
        <LogoutButton />
      </header>
    );
  }
  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://lh3.googleusercontent.com/FQHkHGS7mMWZF_DWjXPWXRI9AkoBOiey9_iE3hM6EKMj5FGVtncDKkNHKmMOAUoq3BA=w2400"
            alt="Logo"
            width={50}
            height={10}
          />
          <p className="text-orange-400">Welcome to Aubay Messenger</p>
        </div>
        <Link
          href="/auth/signin"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
