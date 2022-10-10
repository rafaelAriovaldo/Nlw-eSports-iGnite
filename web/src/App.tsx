import './styles/main.css';
import logoIMg from './assets/Logo.svg';
import { MagnifyingGlassPlus } from 'phosphor-react';
import { GameBanner } from './components/GameBanner';
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
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidde">
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-2'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )

}
export default App
