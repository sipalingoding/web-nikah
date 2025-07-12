import { notFound } from "next/navigation";
import { createClient } from "../../lib/supabase";
import Home from "../page";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;
  console.log("Slug from params:", slug);

  const supabase = await createClient();
  console.log("Supabase client created");

  const { data: guest, error } = await supabase
    .from("tamu")
    .select("nama, slug")
    .eq("slug", slug)
    .single();

  console.log("Guest data:", guest);
  console.log("Error:", error);

  if (!guest || error) {
    return notFound();
  }

  return <Home guest={guest} />;
}
