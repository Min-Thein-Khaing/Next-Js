import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}
interface Props{
  searchParams:{
    sortOrder:string
  }
}

const UsersPage = async ({searchParams:{sortOrder}}:Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link className="btn btn-primary" href="/users/new">Create</Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
