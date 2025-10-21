import React, { useEffect } from "react";
import BlogHistoryCard from "../../components/BlogHistoryCard";
import DialogSubmitDelete from "../../components/DialogSubmitDelete";
import BlogDetailDialog from "../../components/BlogDetailDialog";
import Lottie from "lottie-react";
import NotfoundAnimation from "@/assets/notfound.json";
import toast from "react-hot-toast";
const HistoryPage = () => {
  const [blogHistories, setBlogHistories] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(null);
  useEffect(() => {
    const storedBlogHistories = localStorage.getItem("blogHistories");
    if (storedBlogHistories) {
      setBlogHistories(JSON.parse(storedBlogHistories));
    }
  }, []);
  const handleDeleteHistory = (id) => {
    const next = blogHistories.filter((item) => item.id !== id);
    setBlogHistories(next);
    localStorage.setItem("blogHistories", JSON.stringify(next));
  };
  const handleOpenSubmitDelete = (id) => {
    setSelectedId(id);
    setOpenDelete(true);
  };
  const handleCopy = async () => {
    // Dùng Clipboard API của trình duyệt để ghi text vào bộ nhớ tạm
    await navigator.clipboard.writeText(
      blogHistories.find((item) => item.id === selectedId).result
    );
    toast.success("Copied to clipboard!");
  };
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold">Hi, here is your history</h1>
      <div className="flex flex-col items-center justify-center gap-4 mt-20">
        {blogHistories.length === 0 ? (
          <div>
            <div style={{ width: 300, height: 300 }}>
              <Lottie animationData={NotfoundAnimation} loop={true} />
            </div>
            <h2 className="text-2xl font-bold">No history found</h2>
          </div>
        ) : (
          <BlogHistoryCard
            data={blogHistories}
            setOpen={setOpen}
            setSelectedId={setSelectedId}
            selectedId={selectedId}
            handleOpenSubmitDelete={handleOpenSubmitDelete}
          />
        )}

        <BlogDetailDialog
          open={open}
          onOpenChange={setOpen}
          id={selectedId}
          data={blogHistories}
          handleCopy={handleCopy}
        />
        <DialogSubmitDelete
          open={openDelete}
          onOpenChange={setOpenDelete}
          handleDeleteHistory={handleDeleteHistory}
          id={selectedId}
        />
      </div>
    </div>
  );
};

export default HistoryPage;
