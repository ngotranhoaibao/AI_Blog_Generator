import React from "react";
import CreateBlog from "@/components/CreateBlog";
import ExportFiles from "@/components/ExportFiles";
const EditPage = () => {
  return (
    <div className="grid gap-6">
      <div className="grid gap-6">
        <h1 className="text-[32px] font-bold">Blog Editor</h1>
        <CreateBlog />
        <ExportFiles />
      </div>
    </div>
  );
};

export default EditPage;
