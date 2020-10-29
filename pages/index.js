import Head from 'next/head'
import "../styles/main.css";

const Logo = () => (
  <>
    <img src="/logo2.png" alt="Logo" width={160} className="p-2 hidden md:inline-block"/>
    <img src="vector.png" width={100} className="p-2 md:hidden"/>
  </>
)

const Menu = () => (
  <div className="p-2 flex items-center">
    <a href="https://github.com/limaantonio" target="_blank">
      github
    </a>
    <a href="https://www.instagram.com/antonio_c.dev/?hl=pt-br" target="_blank">
      Instagram
    </a>
    <a href="https://api.whatsapp.com/message/TR5VNKOMUBYSK1" target="_blank">
      Whatsapp
    </a>
  </div>
)

const Banner = () => (
  <div className="container max-w-5xl m-auto p-6  flex-1 flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
    <span className="text-gray">Seja bem-vindo, ajudamos você a</span>
    <div className="uppercase text-4xl font-extrabold leading-snug">
      Desenvolver <span className="text-green">Software</span> de verdade
    </div>
    <span className="text-gray">e construir suas soluções digitais</span>
  </div>
)

const Header = () => (
  <div className="p-2 container max-w-5xl m-auto flex justify-between items-center">
    <Logo/>
    <Menu/>
  </div>
)

const Home =() => (
    <div 
      className="flex flex-col flex-1"
      style={{background: 'url(/Img_1.png) no-repeat center/cover'}}
      >
      <Head>
        <title>Next e Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
    </div>
)

export default Home