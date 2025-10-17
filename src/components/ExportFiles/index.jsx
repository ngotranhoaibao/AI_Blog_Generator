import React from "react";

const index = () => {
  return (
    <div className="w-full text-card-foreground gap-6 justify-between rounded-xl bg-card border-border border  shadow-sm p-6">
      <div className="flex flex-col gap-2 md:flex-row justify-between items-start mb-8 border-b border-border pb-6">
        <div className="text-2xl mb-0 font-bold flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          Xem trước &amp; Xuất
        </div>

        <div className="flex gap-2 justify-start md:justify-end">
          <button
            type="button"
            data-slot="button"
            className="inline-flex items-center justify-center text-sm font-medium transition disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 border-border border bg-background hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3"
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
          </button>

          <button
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
          </button>
        </div>
      </div>

      <div className="grid gap-8 min-h-[7rem]">
        <p className="text-center text-muted-foreground">
          Chưa có nội dung để hiển thị.
        </p>
      </div>
    </div>
  );
};

export default index;
