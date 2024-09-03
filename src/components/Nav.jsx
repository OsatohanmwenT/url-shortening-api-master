import Button from "./Button"
import { logoImg, hamburgerMenu } from "../assets/images"

const Nav = () => {
  return (
    <header className="py-6 px-6 xl:px-44 absolute w-full">
      <nav className="flex items-center max-container justify-between mx-auto">
        <div className="flex flex-1 gap-8">
            <a href="/">
                <img src={logoImg} alt="logo" width={121} height={34} />
            </a>
            <ul className="flex gap-6 items-center justify-center max-md:hidden">
                <a href="/">
                    <li className="text-Gray font-semibold hover:text-Very-Dark-Blue ">Features</li>
                </a>
                <a href="/">
                    <li className="text-Gray font-semibold hover:text-Very-Dark-Blue ">Pricing</li>
                </a>
                <a href="/">
                    <li className="text-Gray font-semibold hover:text-Very-Dark-Blue ">Resources</li>
                </a>
            </ul>
        </div>
        <div className="flex items-center justify-center gap-4 max-md:hidden">
            <button className="text-Gray px-6 py-3 font-bold">Login</button>
            <Button text="Sign Up" />
        </div>
        <div className="hidden max-md:block">
            <img src={hamburgerMenu} alt="menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav
