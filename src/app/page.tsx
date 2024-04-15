import Image from "next/image";
import profilePic from "/public/hello.jpg";

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB!
      <br />
      <Image src={profilePic} alt="" />
    </>
  );
}
