import { signIn, getProviders } from 'next-auth/react';
import Image from 'next/image';
import SigninComponent from './SigninComponent';

async function SignInPage() {
  const providers = await getProviders();
  return (
    <div className="grid justify-center">
      <div>
        <Image
          src="https://links.papareact.com/161"
          width={400}
          height={400}
          alt="Facebok Icon"
          className="rounded-full mx-2 object-cover"
        />
      </div>
      <SigninComponent providers={providers} />
    </div>
  );
}

export default SignInPage;
