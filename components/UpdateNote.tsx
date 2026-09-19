import { ReactNode } from "react";

export default function UpdateNote({ children }: { children: ReactNode }) {
  return (
    <div className="my-8 rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4 text-base text-gray-700">
      {children}
    </div>
  );
}
