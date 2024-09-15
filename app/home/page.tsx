"use client"
import {  signOutWithGoogle } from '@/src/libs/firebase/auth';
import {  removeSession } from '@/actions/auth-actions';

const HomePage:React.FC  = () =>{
    const handleSignOut = async () => {
        await signOutWithGoogle();
        await removeSession();
      };
    return(
        <main>
            <h1>hii</h1>
            <button type="button" onClick={handleSignOut} className="w-24 rounded-lg font-semibold text-sm px-5 py-2.5 text-center me-2  bg-red-700 border border-red-700 hover:bg-[#1E1E1E] hover:border-red-700">Log Out</button>
        </main>
    )
}
export default HomePage;