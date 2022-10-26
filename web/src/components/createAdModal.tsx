import { Check, GameController, Option } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

import * as Checkbox from '@radix-ui/react-checkbox';
export default () => (

  <Checkbox.Root>

    <Checkbox.Indicator />

  </Checkbox.Root>

);
import { Input } from './Form/input';
import { useEffect, useState } from 'react';
interface Game {
    id: string;
    title: string;
  }
export function CreateAdModal(){
    const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then(res => res.json())
      .then(data => {
        setGames(data)
      })
  }, [])
 return(
    <Dialog.Portal>
          <Dialog.Overlay className='bg-black/80 inset-0 fixed' />

          <Dialog.Content className='fixed bg-[#2a2634] py-8 px-10
         text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          rounded-lg w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl text-white font-black'>
              Publique um anúncio
            </Dialog.Title>

            <form className='mt-8 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='game' className='font-semibold'>Qual o Game?</label>
                <select id='game' placeholder='' 
                className="bg-zinc-900 py-2 px-3 rounded text-sm placeholder:text-zinc-500 appearance-none" 
                >
                    <option value="">Selecione o game que deseja jogar</option>
                    {
                        games.map(game => {
                           return <option key={game.id}> {game.title}</option>
                        })
                    }
                </select>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Seu nome (ou nickname)</label>
                <Input id="name" placeholder='Como te chamam dentro do jogo?' />
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                  <Input id='yearsPlaying' type="number" placeholder='Tudo bem ser zero' />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="discord">Qual seu discord?</label>
                  <Input id='discord' type="text" placeholder='User#0000' />
                </div>
              </div>
              <div className='flex gap-6 '>
                <div className='flex flex-col gap-2 '>
                  <label htmlFor="weekdays">Quando costuma jogar?</label>
                  <div className='grid grid-cols-4 gap-2'>
                    <button title='Domingo' className='w-8 h-8 rounded bg-zinc-900' >D</button>
                    <button title='Segunda' className='w-8 h-8 rounded bg-zinc-900' >S</button>
                    <button title='Terça' className='w-8 h-8 rounded bg-zinc-900'>T</button>
                    <button title='Quarta' className='w-8 h-8 rounded bg-zinc-900'>Q</button>
                    <button title='Quinta' className='w-8 h-8 rounded bg-zinc-900'>Q</button>
                    <button title='Sexta' className='w-8 h-8 rounded bg-zinc-900'>S</button>
                    <button title='Sábado' className='w-8 h-8 rounded bg-zinc-900'>S</button>

                  </div>
                </div>

                <div className='flex flex-col gap-2   flex-1'>
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className='grid grid-cols-2  gap-2 w-15 h-8' >
                    <Input id='hourstart' type="time" placeholder='De' />
                    <Input id='hourEnd' type="time" placeholder='Até' />
                  </div>
                </div>
              </div>

              <div className='mt-2 flex items-center gap-2 text-sm'>
                <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900">
                    <Checkbox.Indicator />
                    <Check className="w-4 h-4 text-emerald-400"/>
                </Checkbox.Root>
                Costumo me conectar com o chat de voz
              </div>
              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close type='button' className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
                <button className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                 type='submit'>
                  <GameController size={24}/>
                  Encontrar duo
                </button>
              </footer>
            </form>

          </Dialog.Content>
        </Dialog.Portal>
 )   
}