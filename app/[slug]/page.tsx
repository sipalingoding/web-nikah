import { notFound } from "next/navigation";
import { createClient } from "../../lib/supabase";
import Home from "../page";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const metadata = {
  title: "Undangan Pernikahan Salman & Karima",
  description: "Merupakan suatu kehormatan bagi kami mengundang Anda.",
  openGraph: {
    title: "Undangan Pernikahan Salman & Karima",
    description: "Merupakan suatu kehormatan bagi kami mengundang Anda.",
    url: "https://salman-karima.com/Wa-Nani",
    type: "website",
    images: [
      {
        url: "https://salman-karima.com/images/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Salman & Karima",
      },
    ],
  },
};

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
