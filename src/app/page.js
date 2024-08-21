import Assest from "@/components/Assest";
import Decentralized from "@/components/Decentralized";
import Elevate from "@/components/Elevate";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Token from "@/components/Token";
import TuluAssest from "@/components/TuluAssest";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      
       <Hero />
       <Assest />
       <TuluAssest />
       <Decentralized />
       <Token />
       <Elevate />
       <footer>
        <Footer />
       </footer>

      
    </main>
  );
}
