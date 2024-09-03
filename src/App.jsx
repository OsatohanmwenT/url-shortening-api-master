import { useState } from "react"
import Nav from "./components/Nav"
import Hero from "./Sections/Hero"
import Statistics from "./Sections/Statistics"
import Links from "./Sections/Links"
import Footer from "./Sections/Footer"

export default function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState([]);

  function handleChange(e) {
    setUrl(e.target.value)
  }

  const handleShorten = async (event) => {
    event.preventDefault();
      try {
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", 
          },
          body: `url=${encodeURIComponent(url)}`,
        });
  
        const data = await response.json();
        console.log(data)
        setShortUrl((prevShortUrls) => [...prevShortUrls, data.result_url]);
      } catch (error) {
        console.error("Error shortening URL:", error); 
      }
    }

  return (
    <main>
      <Nav />
      <section className="sm:px-6 xl:px-40 max-md:pt-1">
        <Hero />
      </section>
      <section className="bg-Gray/40">
        <Statistics url={url} shortUrl={shortUrl} handleChange={handleChange} handleShorten={handleShorten} />
      </section>
      <section className="bg-Very-Dark-Blue bg-boost-desktop max-sm:bg-boost-mobile px-4 py-32">
        <Links />
      </section>
      <footer className="bg-Very-Dark-Violet px-10 py-20">
        <Footer />
      </footer>
    </main>
  )
}