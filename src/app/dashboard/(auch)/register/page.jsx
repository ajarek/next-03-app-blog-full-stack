'use client'
import { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [error, setError] = useState(null);
  const handleSubmit=(e)=>{
    e.preventDefault() 
    console.log(e);
  }
  return (
    <div className={'min-h-screen p-10 flex flex-col justify-center items-center '}>
    <h1 className={'text-2xl'}>Utwórz konto</h1>
    <h2 className={'my-4'}>Zarejestruj się, aby zobaczyć panel kontrolny.</h2>
    <form onSubmit={handleSubmit} className={'w-80 flex flex-col '}>
      <input
        type="text"
        placeholder="Username"
        required
        className={'input'}
      />
      <input
        type="text"
        placeholder="Email"
        required
        className={'input'}
      />
      <input
        type="password"
        placeholder="Password"
        required
        className={'input'}
      />
      <button className={'w-80 h-12 bg-green-500'}>Zarejestruj</button>
      {error && "Something went wrong!"}
    </form>
    <span className={'py-4'}>- LUB -</span>
    <Link className={'text-xl'} href="/dashboard/login">
    Zaloguj się na istniejące konto
    </Link>
  </div>
  )
}

export default Register