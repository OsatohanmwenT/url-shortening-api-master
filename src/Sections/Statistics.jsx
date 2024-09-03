import Input from "../components/Input"
import ACards from "../components/ACards"

const Statistics = ({ url, handleChange, error, handleShorten, shortUrl }) => {
  return (
    <main className="max-container px-40 pb-20 max-md:px-6 relative flex flex-col gap-6 justify-center">
        <Input url={url} handleChange={handleChange} error={error} handleShorten={handleShorten} />
        <div className="flex flex-col items-center justify-center gap-2 my-2">
        {shortUrl.length > 0 && (
          shortUrl.map((urlItem, index) => 
          <div key={index} className=" w-fit p-5 rounded-lg bg-white text-xl">{urlItem}</div>)
        )}
        </div>
        <div className="max-w-[420px] text-center self-center">
            <h2 className="font-bold text-2xl">Advanced Statistics</h2>
            <p className="text-Gray">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <ACards />
    </main>
  )
}

export default Statistics
