import './styles/main.css';
import logoIMg from './assets/Logo.svg';
import {MagnifyingGlass} from 'phosphor-react';
function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoIMg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">Duo</span>  Está Aqui.</h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/Games-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white'>League of Legends</strong><br></br>
            <strong className='text-zinc-300 text-sm block'>4 anúncios.</strong>

          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/Game-2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white'>Dota 2</strong><br></br>
            <strong className='text-zinc-300 text-sm block'>3 anúncios.</strong>

          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/Game-3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white'>CS</strong><br></br>
            <strong className='text-zinc-300 text-sm block'>15 anúncios.</strong>

          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/Game-4.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white'>Apex Legends</strong><br></br>
            <strong className='text-zinc-300 text-sm block'>6 anúncios.</strong>

          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/Game-5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white'>Fortnite</strong><br></br>
            <strong className='text-zinc-300 text-sm block'>7 anúncios.</strong>

          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/Game-6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white'>Word Warcraft</strong><br></br>
            <strong className='text-zinc-300 text-sm block'>2 anúncios.</strong>

          </div>
        </a>

      </div>
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidde">
      <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
        <div>
        <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
        <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
        </div>
        <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded'>
          Publicar anúncio
        </button>
      </div>
      </div>
    </div>
  )

}
export default App
