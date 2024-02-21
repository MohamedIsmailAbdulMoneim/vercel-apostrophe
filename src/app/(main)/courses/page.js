

import Image from "next/image";
import { getServerSession } from "next-auth/next";

import { options } from "@/app/(login)/api/auth/[...nextauth]/options";
import { getUserData } from "@/lib/userCourses";
import Course from "@/components/course/course";


export default async function Home() {

  const session = await getServerSession(options)
  const {user : {name}} = session
  const items = await getUserData(name)

  return (

    <main style={{display: "flex", justifyContent: "space-around", margin: "2rem 1rem"}}>
      <Course items={items} />
    </main>
    
  );
}
