import Link from "next/link";
import { PropsWithChildren } from "react";

export default function ThoughtLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-y-2">
      <span>
        <Link href="/" className="underline underline-offset-3">
          Home
        </Link>
      </span>
      {children}
    </div>
  );
}
