import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';

export default function Home({ posts }) {
 return (
  <div>
   <Head>
    <title>Dev Blog</title>
   </Head>

   <h2>Hello</h2>
  </div>
 );
}

export async function getStaticProps() {
 // Get files from the posts dir
 const files = fs.readdirSync(path.join('posts'));

 // Get slug and frontmatter from posts
 const posts = files.map((filename) => {
  // Create slug
  const slug = filename.replace('.md', '');

  // Get frontmatter
  const markdownWithMeta = fs.readFileSync(
   path.join('posts', filename),
   'utf-8'
  );

  const { data: fronmatter } = matter(markdownWithMeta);

  return {
   slug,
   fronmatter,
  };
 });

 console.log(posts);

 return {
  props: {
   posts: 'The Posts',
  },
 };
}
