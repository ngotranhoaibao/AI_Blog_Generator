import React from "react";

const CreateBlog = () => {
  return (
    <div className=" border-border border bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
      <div className="px-6 grid">
        <div className="text-2xl font-bold mb-6">Chủ đề Blog</div>

        <div className="w-full flex gap-2">
          <div className="w-full flex items-center justify-center gap-2">
            <input
              data-slot="input"
              className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground h-9 min-w-0 bg-transparent text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:ring-[3px] focus-visible:ring-ring/50 w-full px-4 py-2 border border-border rounded-md"
              placeholder="Nhập chủ đề blog của bạn (ví dụ: Lợi ích của thiền định)"
              type="text"
            />
          </div>

          <button
            data-slot="button"
            className=" whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2"
          >
            Tạo Nội Dung
          </button>
        </div>

        <label className="mt-4 text-sm text-muted-foreground">
          AI sẽ tạo ra nội dung blog dựa trên chủ đề bạn nhập
        </label>
      </div>
    </div>
  );
};

export default CreateBlog;
