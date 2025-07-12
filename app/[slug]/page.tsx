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
