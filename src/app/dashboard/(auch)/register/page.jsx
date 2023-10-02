'use client'
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);
  const router = useRouter()

  const handleSubmit= async(e)=>{
    e.preventDefault() 
    const name =e.target[0].value
    const email =e.target[1].value
    const password =e.target[2].value
    try{
         const res = await fetch('/api/auth/register',{
          method:"POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
           name,email,password
          })
        
         })
         

         res.status===201 && router.push('/dashboard/login')

    }catch(error){
       setError(true)
    }
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
      {error && "Coś poszło nie tak!"}
    </form>
    
    <span className={'py-4'}>- LUB -</span>
    <Link className={'text-xl'} href="/dashboard/login">
    Zaloguj się na istniejące konto
    </Link>
  </div>
  )
}

export default Register