import { getBookDatabase } from "../../lib/notion";
import styles from "../../styles/books.module.css";
import { Text } from "./[id].js";
import Image from "next/image";

export const databasebookId = process.env.NOTION_DATABASE_BOOK_ID;

const booksImage = 'http://books.google.com/books/content?id=GQ5WswEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73gTmAyg9rwnNrKdwLlyEFLf95v1nIE9eFKqRWQt5-z908cCGXKN5XQx_9bUPEWG3szNgcb45NuZAc16L0M3eJbSlD6DxO74itXW_rx4tx4RA7je2zK1J31Q3tTofvj5d971poQ&source=gbs_api';


export default function books({ posts }) {
  return (
    <div>
      <main className={styles.container}>
        <h2 className={styles.heading}>My books</h2>
        <ol className={styles.posts}>
          {posts.map((post) => {
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <p>
                    <Text text={post.properties.Title.title} />
                  </p>
                  <Image 
                    className="bookImage"
                    src={booksImage} 
                    alt="bookImage" 
                    width={200} 
                    height={200} 
                  />
                  <p>
                    <Text text={post.properties.Description.rich_text} />
                  </p>
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