import Image from "next/image";
import { cn } from "@/lib/utils";

interface DeviceMockupProps {
  src: string;
  alt: string;
  className?: string;
}

export function DeviceMockup({ src, alt, className }: DeviceMockupProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Laptop Frame */}
      <div className="relative rounded-t-xl bg-slate-800 p-2 shadow-2xl">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-3 py-2 bg-slate-700 rounded-t-lg">
          {/* Traffic Lights */}
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          {/* URL Bar */}
          <div className="flex-1 mx-4">
            <div className="h-6 rounded-md bg-slate-600 px-3 flex items-center">
              <span className="text-xs text-slate-400 truncate">orchidsw.com</span>
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="relative aspect-[16/10] overflow-hidden bg-white">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Laptop Base */}
      <div className="relative">
        <div className="h-3 rounded-b-xl bg-slate-700 shadow-lg" />
        <div className="mx-auto h-1 w-1/3 rounded-b-lg bg-slate-600" />
      </div>

      {/* Subtle Shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/20 blur-xl rounded-full" />
    </div>
  );
}
