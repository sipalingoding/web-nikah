import { notFound } from "next/navigation";
import { createClient } from "../../lib/supabase";
import Home from "../page";
import type { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const supabase = await createClient();
  const { data: guest, error } = await supabase
    .from("tamu")
    .select("nama")
    .eq("slug", params.slug)
    .single();

  if (!guest || error) {
    return {
      title: "Undangan Pernikahan Salman & Karima",
      description: "Merupakan suatu kehormatan bagi kami mengundang Anda.",
    };
  }

  return {
    title: `Undangan Pernikahan Salman & Karima untuk ${guest?.nama}`,
    description: `Merupakan suatu kehormatan bagi kami mengundang ${guest?.nama} untuk hadir dalam pernikahan kami.`,
    openGraph: {
      title: `Undangan Pernikahan Salman & Karima untuk ${guest?.nama}`,
      description: `Merupakan suatu kehormatan bagi kami mengundang ${guest?.nama} untuk hadir.`,
      type: "website",
      url: `https://salman-karima.com/${params?.slug}`,
      images: [
        {
          url: "https://salman-karima.com/images/thumbnail.jpg",
          width: 1200,
          height: 630,
          alt: "Salman & Karima",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Undangan Pernikahan Salman & Karima untuk ${guest?.nama}`,
      description: `Merupakan suatu kehormatan bagi kami mengundang ${guest?.nama} untuk hadir.`,
      images: ["https://salman-karima.com/images/thumbnail.jpg"],
    },
  };
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = params;
  const supabase = await createClient();

  const { data: guest, error } = await supabase
    .from("tamu")
    .select("nama, slug")
    .eq("slug", slug)
    .single();

  if (!guest || error) {
    return notFound();
  }

  return <Home guest={guest} />;
}
