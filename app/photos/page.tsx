import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo1.jpg",
            alt: "Roman columns",
            href: "https://www.instagram.com/_moon.xd/",
          },
          {
            src: "/photos/photo2.jpg",
            alt: "Big Ben",
            href: "https://www.instagram.com/_moon.xd/",
          },
          {
            src: "/photos/photo3.jpg",
            alt: "Sacré-Cœur Basilica",
            href: "https://www.instagram.com/_moon.xd/",
          },
          {
            src: "/photos/photo4.jpg",
            alt: "Eiffel Tower",
            href: "https://www.instagram.com/_moon.xd/",
          },
          {
            src: "/photos/photo5.jpg",
            alt: "Taj Mahal",
            href: "https://www.instagram.com/_moon.xd/",
          },
          {
            src: "/photos/photo6.jpg",
            alt: "Colosseum",
            href: "https://www.instagram.com/_moon.xd/",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns", href: "https://www.instagram.com/_moon.xd/" },
          { src: "/photos/photo2.jpg", alt: "Big Ben", href: "https://www.instagram.com/_moon.xd/" },
          { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica", href: "https://www.instagram.com/_moon.xd/" },
          { src: "/photos/photo4.jpg", alt: "Eiffel Tower", href: "https://www.instagram.com/_moon.xd/" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns", href: "https://www.instagram.com/_moon.xd/" },
          { src: "/photos/photo2.jpg", alt: "Big Ben", href: "https://www.instagram.com/_moon.xd/" },
          { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica", href: "https://www.instagram.com/_moon.xd/" },
          { src: "/photos/photo4.jpg", alt: "Eiffel Tower", href: "https://www.instagram.com/_moon.xd/" },
          { src: "/photos/photo5.jpg", alt: "Taj Mahal", href: "https://www.instagram.com/_moon.xd/" },
          { src: "/photos/photo6.jpg", alt: "Colosseum", href: "https://www.instagram.com/_moon.xd/" },
        ]}
      />
    </section>
  );
}
