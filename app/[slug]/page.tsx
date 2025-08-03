import { notFound } from "next/navigation";
import { createClient } from "../../lib/supabase";
import Home from "../page";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return {
    title: "Undangan Pernikahan Salman & Karima",
    description: "Merupakan suatu kehormatan bagi kami mengundang Anda.",
    openGraph: {
      title: "Undangan Pernikahan Salman & Karima",
      description: "Merupakan suatu kehormatan bagi kami mengundang Anda.",
      url: `https://salman-karima.com/${slug}`,
      type: "website",
      site_name: "Undangan Pernikahan Salman & Karima",
      images: [
        {
          url: "https://salman-karima.com/images/thumbnail.jpeg",
          width: 1200,
          height: 630,
          alt: "Salman & Karima",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Undangan Pernikahan Salman & Karima",
      description: "Merupakan suatu kehormatan bagi kami mengundang Anda.",
      images: ["https://salman-karima.com/images/thumbnail.jpeg"],
    },
  };
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: guest, error } = await supabase
    .from("tamu")
    .select("nama, slug")
    .eq("slug", slug)
    .single();

  console.log(guest);

  if (!guest || error) {
    return notFound();
  }

  return <Home guest={guest} />;
}
