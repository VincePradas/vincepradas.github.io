"use client";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";
export default function VisitCount() {
  const [views, setViews] = useState<number | undefined>(undefined);

  useEffect(() => {
    fetch("/api/views")
      .then((res) => res.json())
      .then((data) => setViews(data.views))
      .catch(() => setViews(0));
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="px-2 py-[4px] rounded-full bg-black/30 dark:bg-white/10 border border-cyan-400/40 text-cyan-400 backdrop-blur-md font-semibold text-xs select-none">
        {views ?? "…"} visits
      </div>
    </div>
  );
}

