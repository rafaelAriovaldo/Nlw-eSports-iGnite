import './styles/main.css';
import logoIMg from './assets/Logo.svg'
function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoIMg} alt=""/>
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">Duo</span>  está Aqui.</h1>
    </div>
  )

}
export default App
