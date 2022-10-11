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
              <Link href={`/books/${post.id}`}>
                  <li key={post.id} className={styles.book}>
                    <a>
                      <Image 
                        className={styles.bookImg}
                        src={post.cover.external.url}
                        alt="bookImg" 
                        width={180} 
                        height={225} 
                      />
                      <h3 className={styles.bookTitle}>
                        <Text text={post.properties.Title.title} />
                      </h3>
                    </a>
                  </li>
              </Link>
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