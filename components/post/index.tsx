interface PostProps {
  title: string;
  // bannerImage: string;
  // bannerImageWidth: number;
  // bannerImageHeight: number;
  content: string;
}

export function Post(props: PostProps) {
  const { title, content } = props;

  return (
    <article className="w-full flex flex-col">
      <h1 className="text-2xl font-black text-white mb-8">{title}</h1>
      <div
        className="prose prose-p:text-white prose-headings:text-white prose-p:my-0 prose-hr:my-4"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  );
}
