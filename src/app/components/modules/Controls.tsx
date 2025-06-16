"use client";

import { ArrowLeft, ArrowRight, Home } from "lucide-react";

export default function Controls({
  scrollNext,
  scrollPrev,
  scrollHome,
}: {
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollHome: () => void;
}) {
  return (
    <div className="absolute bottom-4 flex">
      <div className="inline-flex items-center gap-1 rounded-2xl bg-neutral-800 p-1 border border-neutral-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_3px_6px_rgba(0,0,0,0.4)]">
        <ControlButton icon={<ArrowLeft size={18} />} onClick={scrollPrev} />
        <ControlButton icon={<ArrowRight size={18} />} onClick={scrollNext} />
        <ControlButton icon={<Home size={18} />} active onClick={scrollHome} />
      </div>
    </div>
  );
}

function ControlButton({
  icon,
  onClick,
  active = false,
}: {
  icon: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex h-14 w-14 items-center justify-center rounded-xl border transition-all cursor-pointer duration-100 ease-out
        ${
          active
            ? "bg-[#012169] border-[#E4002B] shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.25),inset_2px_2px_4px_rgba(255,255,255,0.15)] text-white"
            : "bg-neutral-100 border-neutral-300 hover:bg-neutral-200 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)] active:translate-y-[1px] text-black"
        }
      `}
    >
      {icon}
      <span
        className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-white/25 to-transparent opacity-50 mix-blend-soft-light"
        aria-hidden="true"
      />
    </button>
  );
}
