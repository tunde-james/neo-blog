import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import AllPosts from "./all-posts";

async function page() {
  type PostWithCategories = Prisma.PostGetPayload<{
    include: { categories: true };
  }>;

  const posts: PostWithCategories[] = await prisma.post.findMany({
    include: {
      categories: true,
    },
  });

  const categories = await prisma.category.findMany();

  return (
    <div className="container my-24">
      <h2 className="my-6 text-center text-4xl">All Articles</h2>
      <AllPosts categories={categories} posts={posts} />
    </div>
  );
}

export default page;
