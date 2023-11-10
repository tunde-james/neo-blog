import type { Post } from "@prisma/client";
import Link from "next/link";

type Props = {
  post: Post;
  className?: string;
};

function PostCard({ post, className }: Props) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className={`${className} line-clamp-5 rounded border-2 p-4 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]`}
    >
      <h3 className="mb-3 text-2xl sm:text-3xl">{post.title}</h3>
      <p className="">{post.content}</p>
    </Link>
  );
}

export default PostCard;
