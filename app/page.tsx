'use client'
import Link from "next/link";
import ProductCart from "./components/ProductCart";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import { Metadata } from "next";
import { useState } from "react";
import dynamic from "next/dynamic";
import _ from "lodash"

// const HeavyComponent = dynamic(() => import('./components/HeavyComponent'),{
//   ssr:false,
//   loading: () => <p>Loading...</p> 
// })

//when i using no3 i close is async
export default  function Home() {
  // const session = await getServerSession(authOption)


  //this is for no3
  const [isVisible,setVisible] = useState(false)

  return (
    //1
    // <main className="p-5">
    //   <h1>Hello {session?.user?.name} </h1>
    //   <Link href="/users">User</Link>
    //   <ProductCart />
    // </main>

    //2
    // <main className="h-screen relative">
    //   <Image
    //     src="https://bit.ly/react-cover"
    //     fill
    //     className="object-cover"
    //     sizes="(max-width:480px) 100vw ,(max-width:768px) 50vw ,33vw"
    //     quality={100}
    //     priority
    //     alt="coffee"
    //   />
    // </main>

    //3
    <main className="p-5">
      <h1>Hello World</h1>
      <button onClick={async() => {
        const _=(await import('lodash')).default;
        const users= [{name:'c'},{name:"b"},{name:"a"}]
      const sorted = _.orderBy(users,['name'])
      console.log(sorted)
      } }>Show</button>
    </main>


  );
}
// for metadata for sharing link
// export async function generateMetadata(): Promise<Metadata>{
//   const products = await fetch('')
// return {
//   title:"product.title",
//   description:"..."
// }

// }
