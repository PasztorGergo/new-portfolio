import Image from "next/image";
import React from "react";

const Avatar = ({
  src,
  className,
  alt,
}: {
  src: string;
  className?: string;
  alt: string;
}) => {
  return (
    <div className={`aspect-square ${className} rounded-full overflow-hidden`}>
      <Image
        src={src === "" ? "/blank-profile.webp" : src}
        alt={alt}
        width={64}
        height={64}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;
