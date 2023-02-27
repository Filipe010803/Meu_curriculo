import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div  className='flex justify-center'>
      <div className="w-full md:w-[40vw] h-full flex">
        <Header />
        <div className="w-auto h-auto bg-green-200">
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  )
}