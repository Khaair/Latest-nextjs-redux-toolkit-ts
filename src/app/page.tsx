import Image from "next/image";
import Bohubrihi from "./bohubrihi/page";
import Post from "./postFetch/post";

export default function Home() {
  return (
    <>
      <Bohubrihi />
      <Post />
    </>
  );
}
