'use client';

import { signOut } from 'next-auth/react';

function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
    >
      Sign Out
    </button>
  );
}

export default LogoutButton;
