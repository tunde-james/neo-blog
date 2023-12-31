import { prisma } from "@/lib/prisma";
import Image from "next/image";

async function page({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      author: true,
    },
  });

  return (
    <div className="container-sm mt-6">
      {post && (
        <>
          <h1 className="mb-5 text-5xl">{post.title}</h1>
          <div className="flex items-center">
            <p className="text-sm text-gray-500">By</p>
            <div
              className="ml-3 mr-2 h-5 w-5 rounded-full bg-contain"
              style={{ backgroundImage: `url(${post.author.image})` }}
            ></div>
            <p className="text-sm text-gray-500">{post.author.name}</p>
          </div>
          <p className="mt-4 text-sm text-gray-500">{post.content}</p>
        </>
      )}
    </div>
  );
}

export default page;
