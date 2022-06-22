import Link from "next/link";
import { getDatabase } from "../../lib/notion";
import { Text } from "./[id].js";
import styles from "../../styles/blog.module.css";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function blog({ posts }) {
  return (
    <div>
      <main className={styles.container}>

        <h2 className={styles.heading}>All Posts</h2>
        <ol className={styles.posts}>
          {posts.map((post) => {
            const date = new Date(post.created_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/blog/${post.id}`}>
                    <a>
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>

                <p className={styles.postDescription}>{date}</p>
                <Link href={`/blog/${post.id}`}>
                  <a> Read post →</a>
                </Link>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
