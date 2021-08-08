import fs from 'fs';
import path from 'path';
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

 return {
  props: {
   posts: 'The Posts',
  },
 };
}
