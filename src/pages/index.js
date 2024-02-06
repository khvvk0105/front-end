import { data } from "autoprefixer";
import { useEffect, useState } from "react";

export default function Home() {
  const [article, setArticle] = useState();
  useEffect(() => {
    async function getArtcile() {
      const res = fetch("https://localhost:4000/api/users");
      const data = await res.json(data);
      setArticle(data);
    }
    getArtcile();
  }, []);
  return (
    <main>
      <p>{article?.title}</p>
    </main>
  );
}
