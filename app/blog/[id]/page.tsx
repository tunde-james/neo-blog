import { prisma } from "@/lib/prisma";

async function page({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p className="">{post.content}</p>
        </>
      )}
    </div>
  );
}

export default page;
