import { ResolvingMetadata } from "next";
import Link from "next/link";
import { PropsWithChildren } from "react";

type Props = {
  slug: string;
};

export async function generateMetaData(
  { slug }: Props,
  _parent: ResolvingMetadata
) {
  return {
    title: slug,
  };
}

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
