import Link from "next/link";

export type Post = {
  userId: number;
  id: number;
  body: string;
  title: string;
};

async function getData(): Promise<Post[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
}

export default async function Blog() {
  const posts = await getData();
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((item) => (
          <li key={item.id} style={{ marginTop: "20px", marginLeft: "20px" }}>
            <Link href={`/blog/${item.id}`} style={{ fontWeight: "bolder" }}>
              {item.title}
            </Link>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
