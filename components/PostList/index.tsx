import { renderTitle } from "@9gustin/react-notion-render";
import Title from "@9gustin/react-notion-render/dist/types/Title";
import Color from "@9gustin/react-notion-render/dist/types/Color";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

interface Props {
  posts: {
    id: string;
    last_edited_time: string;
    properties: { Name: Title, Color: Color };
  }[];
}

function PostList({ posts }: Props) {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id} className={styles.post} style={{borderLeft: `4px solid ${post.properties.Color.rich_text[0].plain_text}`}}>
          <h3 className={styles.postTitle}>
            <Link href={`/${post.id}`}>
              <a>
                {renderTitle(post.properties.Name)}
              </a>
            </Link>
          </h3>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
