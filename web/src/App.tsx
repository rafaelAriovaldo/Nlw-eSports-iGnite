import './styles/main.css';
import logoIMg from './assets/Logo.svg';
import { GameBanner } from './components/GameBanner';
import { AdBanner } from './components/CreateAdBanner';
function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoIMg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">Duo</span>  Está Aqui.</h1>
      <div className="grid grid-cols-6 gap-6 mt-16">

        <GameBanner bannerUrl="/Game-1.png" title='League of legends' adsCount={5} />
        <GameBanner bannerUrl="/Game-2.png" title='Dota 2' adsCount={7} />
        <GameBanner bannerUrl="/Game-3.png" title='CS GO' adsCount={9} />
        <GameBanner bannerUrl="/Game-4.png" title='Apex Legends' adsCount={4}/>
        <GameBanner bannerUrl="/Game-5.png" title='Fortnite' adsCount={15}/>
        <GameBanner bannerUrl="Game-6.png" title='WoW' adsCount={7}/>
      </div>
      <AdBanner/>
    </div>
  )

}
export default App
