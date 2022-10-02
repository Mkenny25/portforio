import { getBookDatabase } from "../../lib/notion";
import styles from "../../styles/books.module.css";
import { Text } from "./[id].js";
import Link from "next/link";
import Image from "next/image";

export const databasebookId = process.env.NOTION_DATABASE_BOOK_ID;

export default function books({ posts }) {
  return (
    <div>
      <main className={styles.container}>
        <h2 className={styles.heading}>My books</h2>
        <ol className={styles.books}>
          {posts.map((post) => {
            return (
              <li key={post.id} className={styles.book}>
                <h3 className={styles.bookTitle}>
                  <Image 
                    className={styles.bookImage}
                    src={post.cover.external.url}
                    alt="bookImage" 
                    width={120} 
                    height={150} 
                  />
                  <Link href={`/books/${post.id}`}>
                    <a>
                      <Text text={post.properties.Title.title} />
                    </a>
                  </Link>
                </h3>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getBookDatabase(databasebookId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};