import './styles/main.css';
import { useState, useEffect } from 'react';
import logoIMg from './assets/Logo.svg';
import { GameBanner } from './components/GameBanner';
import { AdBanner } from './components/CreateAdBanner';
import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
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
      <Dialog.Root>
        <AdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/80 inset-0 fixed' />

          <Dialog.Content className='fixed bg-[#2a2634] py-8 px-10
         text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          rounded-lg w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl text-white font-black'>
              Publique um anúncio
            </Dialog.Title>
            <Dialog.Content>
              <form>
                <div>
                  <label htmlFor='game'>Qual o Game?</label>
                  <input id="game" placeholder='Selecione o gmae que deseja jogar' />
                </div>
                <div>
                  <label htmlFor='name'>Seu nome (ou nickname)</label>
                  <input id="name" placeholder='Como te chamam dentro do jogo?' />
                </div>
                <div>
                  <div>
                    <label htmlFor="yearsPlaying">Joga a quanto tempo?</label>
                    <input id='yearsPlaying' type="number" placeholder='Tudo bem ser zero' />
                  </div>
                  <div>
                    <label htmlFor="discord">Qual seu discord?</label>
                    <input id='discord' type="text" placeholder='User#0000' />
                  </div>
                  <div>
                    <div>
                      <label htmlFor="weekdays">Quando costuma jogar?</label>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="hourStart">Qual horário do dia?</label>
                        <div>
                          <input id='hourstart' type="time" placeholder='De' />
                          <input id='hourEnd' type="time" placeholder='Até' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <input type="checkbox" />
                  Costumo me conectar com o chat de voz
                </div>
                <footer>
                  <button>Cancelar</button>
                  <button type='submit'>
                    <GameController />
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>



      </Dialog.Root>

    </div>
  )

}
export default App
