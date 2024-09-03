import Button from "../components/Button"
import { illustrationIcon } from "../assets/images"

const Hero = () => {
  return (
    <main className="max-container overflow-hidden flex max-lg:flex-col-reverse items-center justify-center gap-24 max-md:gap-8 mb-20  min-h-screen">
        <div className="max-lg:text-center">
            <h1 className="font-bold text-7xl tracking-tighter max-xl:text-6xl max-lg:text-5xl">More than just
                <br />
             shorter links</h1>
            <p className="mb-8 max-w-96 text-Gray max-xl:text-sm">Build your brand's recognition and get detailed insights on how your links are performing</p>
            <Button text="Get Started" />
        </div>
        <div className="max-md:translate-x-16">
            <img className="max-md:w-96 max-sm:max-w-none" src={illustrationIcon} alt="illustration" width={560} height={369} />
        </div>
        
    </main>
  )
}

export default Hero
