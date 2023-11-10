import { Prisma } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";

type Post = Prisma.PostGetPayload<{
  include: { categories: true };
}>;

export type PostListProps = {
  posts: Post[];
};

export function PostsList({ posts }: PostListProps) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-12 md:grid-cols-3">
      {posts.map((post: Post) => (
        <div
          key={post.id}
          className="h-full w-full bg-white sm:w-40 md:w-60 lg:w-80"
        >
          <Link
            href={`/blog/${post.id}`}
            className="neo-shadow block transform cursor-pointer rounded-md border-2 transition-shadow duration-100 focus:translate-x-1 focus:translate-y-1 focus:shadow-none"
          >
            <article className="h-full w-full">
              <figure className="h-30 w-full border-b-2 md:h-40 lg:h-72 ">
                {post.imgUrl ? (
                  <Image
                    src={post.imgUrl}
                    alt="thumbnail"
                    className="h-full w-full object-cover"
                    width={300}
                    height={250}
                  />
                ) : (
                  <Image
                    src="/article-placeholder.jpg"
                    alt="thumbnail"
                    className="h-full w-full object-cover"
                    width={300}
                    height={250}
                  />
                )}
              </figure>
            </article>
            <div className="h-full px-6 py-5 text-left">
              <p className="mb-4 text-base">
                {post.createdAt?.toLocaleString()}
              </p>
              <h1 className="mb-4 text-xl">{post.title}</h1>
              <p className="mb-4 line-clamp-4 text-xs">{post.content}</p>
              <p className="text-indigo-600">Read More</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
