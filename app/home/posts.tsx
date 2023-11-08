import { prisma } from "@/lib/prisma";
import PostCard from "./post-card";

async function Posts() {
  const posts = await prisma.post.findMany();

  const bgClasses = ["bg-pink-500", "bg-blue-500", "bg-yellow-500"];

  return (
    <div>
      <h2 className="mt-6 text-center text-4xl">Trending</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} className={bgClasses[index]} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
