import { getPages } from "@/utils/notion";
import {
  PageObjectResponse,
  RichTextItemResponse,
  RichTextPropertyItemObjectResponse,
  TitlePropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";

export default async function SignInPage() {
  const thoughts = await getPages();

  return (
    <div className="flex flex-col items-center gap-y-8 sm:gap-y-16 ">
      <span className="flex flex-col gap-y-2 w-full pt-4">
        <h1 className="text-2xl font-bold text-slate-200">Thoughts</h1>
        <h1 className="italic text-sm text-slate-400">
          Here I jot down random thoughts which are not necessarily related to
          programming.
        </h1>
      </span>
      <span className="flex flex-col gap-y-2 w-full">
        <ul className="list-disc list-inside sm:list-outside">
          {thoughts.results.map((result) => {
            const {
              properties: { Title, Slug },
            } = result as PageObjectResponse;

            const { title, id } =
              Title as unknown as TitlePropertyItemObjectResponse;
            const { rich_text } =
              Slug as unknown as RichTextPropertyItemObjectResponse;
            const { plain_text: slug } = rich_text[0] as RichTextItemResponse;
            const { plain_text } = title[0] as RichTextItemResponse;

            return (
              <li key={id}>
                <Link
                  href={`/blog/${slug}`}
                  className="hover:underline hover:underline-offset-3 text-ellipsis sm:line-clamp-1"
                >
                  {plain_text}
                </Link>
              </li>
            );
          })}
        </ul>
      </span>
    </div>
  );
}
