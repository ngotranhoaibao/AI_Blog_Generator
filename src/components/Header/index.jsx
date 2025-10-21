import React, { useEffect } from "react";
import { Button } from "../ui/button";

const Header = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
  }, [theme]);
  
  return (
    <div>
      <div
        data-rht-toaster=""
        style={{
          position: "fixed",
          zIndex: 9999,
          inset: 16,
          pointerEvents: "none",
        }}
      />
      <div className="border-b border-border ">
        <div className="container mx-auto h-16 px-4 flex items-center justify-between">
          <a
            className="flex items-center space-x-2"
            href="/"
            data-discover="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-pen-tool h-6 w-6 text-primary"
            >
              <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
              <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
              <path d="m2.3 2.3 7.286 7.286" />
              <circle cx="11" cy="11" r="2" />
            </svg>
            <span className="text-2xl font-bold text-primary opacity-0 sm:opacity-100">
              AI Blog Generator
            </span>
          </a>

          <div className="flex items-center gap-2">
            <a
              className="hover:text-primary"
              href="/editor"
              data-discover="true"
            >
              <button
                data-slot="button"
                className="h-8 px-3 rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline transition disabled:pointer-events-none disabled:opacity-50"
              >
                Editor
              </button>
            </a>
            <a
              className="hover:text-primary"
              href="/history"
              data-discover="true"
            >
              <button
                data-slot="button"
                className="h-8 px-3 rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline transition disabled:pointer-events-none disabled:opacity-50"
              >
                History
              </button>
            </a>
            <Button
              onClick={() =>
                setTheme((prev) => (prev === "light" ? "dark" : "light"))
              }
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4"
              //   className="h-9 w-9 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center transition disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
