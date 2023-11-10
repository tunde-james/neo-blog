"use client";

import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { createPost } from "@/app/actions/publish-post";
import { UploadButton } from "@/app/utils/uploadthing";
import "@uploadthing/react/styles.css";

function NewBlogForm() {
  const { data: session, status } = useSession();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  if (!session && status !== "loading")
    return <p>You must be signed in to post</p>;

  async function handleSubmitBlogPost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user = session?.user as any;
    const userId = user?.id;

    if (!userId) return;

    try {
      const post = await createPost({
        title,
        content,
        authorId: userId,
        imgUrl: thumbnail,
      });
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  }

  if (submitted) return <p>Post submitted!</p>;

  return (
    <div className="container mt-12 flex min-h-[calc(100vh-130px)] flex-col py-2">
      <form
        onSubmit={handleSubmitBlogPost}
        className="flex h-full flex-1 flex-col items-stretch justify-center text-left"
      >
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="text-6xl focus-visible:outline-none"
          placeholder="Title"
        />
        <textarea
          name="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          className="mt-2 flex-1 text-4xl focus-visible:outline-none"
        />
        <div className="self-start">
          <label htmlFor="" className="mb-3 capitalize text-slate-600">
            add thubnail image(optional)
          </label>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              if (!res) return;
              setThumbnail(res[0].url);
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
        <button className="mt-6 rounded border-2 bg-indigo-400 px-4 py-2 text-white shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] sm:px-6 sm:py-4">
          create
        </button>
      </form>
    </div>
  );
}

export default NewBlogForm;
