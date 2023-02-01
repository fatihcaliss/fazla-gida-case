import React from 'react'

const Card = ({ title, name, playcount, listeners, artistName, image }) => {
    return (
        <article className="flex flex-col md:flex-row items-center  group relative p-8  bg-gray-100 dark:bg-slate-800 rounded-2xl after:absolute after:w-[2px] after:h-10 after:bg-blue-600 after:top-[50%] after:left-0 after:-translate-y-[50%] my-4">
            <figure className="w-full space-y-4">
                <span className="text-base text-zinc-400 block mt-2- ">{title}:</span>
                <h2 className="text-lg font-bold tracking-tight  sm:text-2xl">
                    <a href="#" className="hover:underline">{name}</a>
                </h2>
                <div>
                    <span className="text-base text-zinc-400 block mt-1 ">Artist: {artistName}</span>
                    <span className="text-base text-zinc-400 block mt-1 ">Playcount: {playcount}</span>
                    {listeners && <span className="text-base text-zinc-400 block mt-1 ">Listeners: {listeners}</span>}
                </div>
            </figure>
            <figcaption className="w-full md:w-1/3 order-first md:order-last">
                <img src={Object.values(image[2])[0]} alt="" />
            </figcaption>
        </article>
    )
}

export default Card