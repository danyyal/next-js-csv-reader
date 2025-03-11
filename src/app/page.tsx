// app/page.tsx (or Home.tsx)
import FileDataClient from "@/components/DisplayData";
import { getDataFromFile } from "../api/getData";

export default async function Home() {
  const { data = [], success, message } = await getDataFromFile();
  if (!success) return <span>{message}</span>;

  return <FileDataClient data={data} />;
}
