import './styles/main.css';
import { useState, useEffect } from 'react';
import logoIMg from './assets/Logo.svg';
import { GameBanner } from './components/GameBanner';
import { AdBanner } from './components/CreateAdBanner';
interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ad: number;
  }
}
function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then(res => res.json())
      .then(data => {
        setGames(data)
      })
  }, [])
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoIMg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">Duo</span>  Está Aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
            key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ad}
               />
          )
        })}

      </div>
      <AdBanner />
    </div>
  )

}
export default App
