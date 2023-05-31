// "use client";

import Nav from "@/components/Nav";
import Cred from "@components/Cred";
import { getProviders } from "next-auth/react";
// import React from "react";
import Image from "next/image";
// import { useEffect, useState } from "react";
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";

// import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@app/api/auth/[...nextauth]/route";

export const metadata = {
  title: "Login",
  description: "Generated by Pemuja GKM",
};

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }
  // const { data: session } = useSession();

  // const [providers, setProviders] = useState(null);
  // const [toggleDropdown, setToggleDropdown] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const res = await getProviders();
  //     setProviders(res);
  //   })();
  // }, []);
  return (
    <div>
      <Nav />
      <Cred />
    </div>
  );
};

export default page;
