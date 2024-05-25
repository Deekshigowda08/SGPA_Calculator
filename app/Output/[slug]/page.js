import Navbar from "../../navbar";
import Output from "./Output";
export async function generateStaticParams() {
  const posts =[{slug:'10'}];
  for (let i = 0; i < 10; i++) {
    posts.push({slug:`${i+1}`})
    for (let j = 1; j < 10; j++) {
      posts.push({slug:`${i+1}.${j}`})
      for (let index = 1; index < 10; index++) {
        posts.push({slug:`${i+1}.${j}${index}`})
      }
      
    }
  }
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
export default function Home({params}) {
  return (
    <>
    <Navbar  />
   <Output data={params}/>
    </>
  );
}
