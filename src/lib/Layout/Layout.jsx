import Image from "next/image";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-[20rem]">{children}</main>
      <div className="h-screen w-screen fixed bottom-0 left-0 -z-10 ">
        <Image
          fill
          className="object-cover"
          src={
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
        />
      </div>
      <Footer />
    </>
  );
}
