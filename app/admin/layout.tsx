import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayoutPage = ({ children }: Props) => {
  return (
    <div className="flex gap-2 min-h-screen">
      <aside className="p-5 text-white  bg-slate-500">AdminSidePage</aside>
      <div className="flex w-full justify-between">
        <div>{children}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayoutPage;
