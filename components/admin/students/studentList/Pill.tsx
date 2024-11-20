"use client";

const Pill = ({ text }: { text: string }) => (
  <div className="px-3 py-1 text-primary text-sm bg-green-500/10 rounded-xl w-fit">
    {text}
  </div>
);

export default Pill;
