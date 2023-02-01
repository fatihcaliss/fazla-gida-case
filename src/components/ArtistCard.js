import React from 'react'
import { useNavigate } from 'react-router-dom';


const ArtistCard = ({props, isHeader=false}) => {
    // console.log(Object.values(props.image[2])[0])
    const navigate = useNavigate();
    return (
        <article className={`flex flex-col md:flex-row items-center  group relative p-8  bg-gray-100 dark:bg-slate-800 rounded-2xl after:absolute after:w-[2px] after:h-10 after:bg-blue-600 after:top-[50%] after:left-0 after:-translate-y-[50%] ${!isHeader && "my-4"}`}>
            <figure className="w-full space-y-4">
                <span className="text-base text-zinc-400 block mt-2 ">Artist</span>
                <h2 className="text-lg font-bold tracking-tight  sm:text-2xl">
                    <a href="#" className="hover:underline">{props.name}</a>
                </h2>
                <div>
                <span className="text-base text-zinc-400 block mt-2 ">Listeners: {props.listeners}</span>
                <span className="text-base text-zinc-400 block mt-2 ">Playcount: {props.playcount}</span>
                </div>
                <button 
                className="px-5 py-1 border-2 hover:border-blue-600 transition border-gray-200 rounded-full"
                onClick={() => navigate(`/detail/${props.mbid}`,{state:props})}
                >Read More</button>
            </figure>
            <figcaption className="w-full md:w-1/3 order-first md:order-last">
                {/* <img src="https://picsum.photos/200/300" alt="blog" className="w-full h-48 object-cover object-center rounded-md"> */}
                <img src={Object.values(props.image[2])[0]} alt="" className='m-auto'/>
            </figcaption>
        </article>
    )
}

export default ArtistCard