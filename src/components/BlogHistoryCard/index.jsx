import React from "react";
const BlogHistoryCard = ({ data, setOpen, setSelectedId,handleOpenSubmitDelete }) => {
  
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-card w-full text-card-foreground rounded-xl border p-6 shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-4 truncate">{item.title}</h2>

          <p className="text-sm text-muted-foreground line-clamp-3">
            {item.result}
          </p>

          <div className="flex justify-start gap-2 mt-4">
            <button
              className="h-9 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center"
              title="Xem"
              onClick={() => { setOpen(true); 
              setSelectedId(item.id);}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>

            <button
              className="h-9 px-4 rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90 inline-flex items-center justify-center"
              title="Xoá"
              onClick={() => handleOpenSubmitDelete(item.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M10 11v6"></path>
                <path d="M14 11v6"></path>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                <path d="M3 6h18"></path>
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
     
    </div>
  );
};

export default BlogHistoryCard;
