import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useIsHistoryPage from "@/hooks/useIsHistoryPage";
export function BlogDetailDialog({
  open,
  onOpenChange,
  id,
  data = [],
  handleCopy,
}) {
  const selected = React.useMemo(
    () => data.find((item) => item.id === id),
    [data, id]
  );
  const isHistoryPage = useIsHistoryPage();
  console.log("isHistoryPage", isHistoryPage);

  const handleDownload = () => {
    // 1️⃣ Tạo blob từ nội dung
    const blob = new Blob([selected.result], { type: "text/plain" });

    // 2️⃣ Tạo URL tạm thời cho blob
    const url = URL.createObjectURL(blob);

    // 3️⃣ Tạo thẻ <a> để mô phỏng hành động tải xuống
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selected.title || "blog-post"}.txt`;

    // 4️⃣ Thêm vào DOM và click tự động
    document.body.appendChild(a);
    a.click();

    // 5️⃣ Dọn dẹp
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="
          bg-background
          fixed top-[50%] left-[50%] z-50 grid
          w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%]
          gap-4 rounded-lg border p-6 shadow-lg duration-200
          lg:max-w-3xl max-h-[80vh] overflow-auto
        "
      >
        <div className="flex flex-col gap-2 md:flex-row justify-between items-start mb-8 border-b border-border pb-6">
          <div className="text-2xl mb-0 font-bold flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            Xem trước &amp; Xuất
          </div>

          <div className="flex gap-2 justify-start md:justify-end">
            <Button
              onClick={handleCopy}
              variant="outline"
              type="button"
              data-slot="button"
              // className="inline-flex items-center justify-center text-sm font-medium transition disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 border-border border bg-background hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
              Sao chép
            </Button>

            <Button
              onClick={handleDownload}
              type="button"
              data-slot="button"
              className="inline-flex items-center justify-center text-sm font-medium transition disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Tải xuống
            </Button>
          </div>
        </div>

        <div className="grid gap-8 min-h-[7rem]">
          <div className=" text-muted-foreground">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {selected?.result}
            </ReactMarkdown>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default BlogDetailDialog;
