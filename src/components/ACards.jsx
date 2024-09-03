import { brandIcon,customIcon,detailedIcon } from "../assets/images"

const ACards = () => {
  return (
    <div className="grid grid-cols-3 max-xl:grid-cols-1 self-center items-start mt-10 gap-8">
          <div className="bg-white rounded-md p-8 pt-16 max-w-[360px] relative">
            <div className="rounded-full bg-Very-Dark-Blue p-3 w-20 h-20 flex justify-center items-center absolute -top-10 max-lg:left-[40%] ">
              <img src={brandIcon} alt="statistics" />
            </div>
            <h3 className="font-bold text-3xl mb-3">Brand Recognition</h3>
            <p className="text-Gray">Boost your brand recognition with each click.
               Generic links don’t mean a thing. Branded links help 
               instil confidence in your content.
            </p>
          </div>
          <div className="bg-white rounded-md p-8 pt-16 max-w-[360px] relative mt-12 max-lg:mt-8">
            <div className="rounded-full bg-Very-Dark-Blue p-3 w-20 h-20 flex justify-center items-center absolute -top-10 max-lg:left-[40%] ">
              <img src={detailedIcon} alt="statistics" />
            </div>
            <h3 className="font-bold text-3xl mb-3">Detailed Records</h3>
            <p className="text-Gray">Gain insights into who is clicking your links. Knowing when
               and where people engage with your content 
               helps inform better decisions.
            </p>
          </div>
          <div className="bg-white rounded-md p-8 pt-16 max-w-[360px] relative mt-24 max-lg:mt-8">
            <div className="rounded-full bg-Very-Dark-Blue p-3 w-20 h-20 flex justify-center items-center absolute -top-10 max-lg:left-[40%] ">
              <img src={customIcon} alt="statistics" />
            </div>
            <h3 className="font-bold text-3xl mb-3">Brand Recognition</h3>
            <p className="text-Gray">Boost your brand recognition with each click.
               Generic links don’t mean a thing. Branded links help 
               instil confidence in your content.
            </p>
          </div>
        </div>
  )
}

export default ACards
