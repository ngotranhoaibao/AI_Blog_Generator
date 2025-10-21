import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const infor = [
    {
      id: 1,
      title: "AI-Powered",
      description:
        "Generate blog outlines and content suggestions using advanced AI",
    },
    {
      id: 2,
      title: "Rich Editor",
      description:
        "Full-featured text editor with formatting tools and live preview",
    },
    {
      id: 3,
      title: "Export Ready",
      description: "Export your finished articles in multiple formats",
    },
  ];
  return (
    <div>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            AI Blog Generator
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your ideas into compelling blog posts with AI assistance.
            Generate outlines, write content, and export beautiful articles.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {infor.map((info) => (
            <div
              key={info.id}
              className="bg-card text-card-foreground flex flex-col gap-2 px-6 rounded-xl border border-[#e5e5e5] py-6 shadow-sm"
            >
              <h3 className="text-[18px] font-bold text-foreground">
                {info.title}
              </h3>
              <p className="text-muted-foreground text-[14px]">
                {info.description}
              </p>
            </div>
          ))}
        </div>
        <div className="pt-8">
          <Link to="/editor" data-discover="true">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3"
            >
              Start Writing
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
