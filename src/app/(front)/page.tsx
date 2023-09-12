import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Image
          src="/images/icon.jpg"
          width={50}
          height={50}
          alt="Logo"
          className="hidden md:block"
        />
      </div>
      <Suspense fallback={null}>
        <div className="mt-10">
        <div>
        <h1 className=' text-3xl font-bold text-center mt-9 p-3'>Welcome to the Admin Dashboard</h1>
        <div className='flex flex-col justify-center items-center mt-6 p-6 gap-6'>

        <p className='text-xl font-semibold '>Manage your users according to your ease </p>
        <p className='text-xl font-semibold '>Click on users to see all the user in database</p>

        </div>

        
    </div>
        </div>
      </Suspense>
    </div>
  );
}
