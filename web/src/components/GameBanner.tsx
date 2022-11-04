interface GameBannerProps{
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function GameBanner(props: GameBannerProps){
    return(
        <a  href="" className='relative rounded-lg overflow-hidden'>
          <img src={props.bannerUrl} alt="" />

          <div className="w-full pt-16 pb-4 px-3 bg-game-gradient absolute bottom-0 left- right-0">
            <strong className='font-bold text-white '>{props.title}</strong>
            <strong className='text-zinc-300 text-sm block'>{props.adsCount} anúncios.</strong>

          </div>
        </a>
        
    )
}
