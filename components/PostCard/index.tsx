import React from "react";
import Image from "next/image";

interface Post {
  slug: string;
  brief: string;
  title: string;
  coverImage: string;
}

const PostCard = ({ brief, coverImage, slug, title }: Post) => {
  return (
    <div className="lg:w-1/3 md:w-1/2 w-full transition-all rounded-3xl p-4 flex gap-4 flex-col items-center overflow-hidden bg-[hsl(230,10%,22%)]">
      <Image
        alt={title}
        src={coverImage}
        width={1200}
        height={840}
        className="rounded-lg w-full h-auto"
      />
      <h3 className="text-white font-bold text-center text-2xl">{title}</h3>
      <p className="text-white text-opacity-75 text-center">{brief}</p>
      <a
        data-test={slug}
        className="px-4 py-2 rounded-lg bg-brand text-white uppercase text-sm text-center font-bold hover:bg-opacity-80"
        href={`https://gergopasztor.hashnode.dev/${slug}`}
      >
        Read more
      </a>
    </div>
  );
};

export default PostCard;
