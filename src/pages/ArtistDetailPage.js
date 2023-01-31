import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getArtistInfo, getTopAlbums, getTopTracks } from '../features/topArtistSlice';
import AlbumCard from '../components/AlbumCard';
import TrackCard from '../components/TrackCard';

const ArtistDetailPage = () => {

    const { topAlbums, loading, topTracks, artistInfo } = useSelector(state => state.topArtistSlice)
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getTopAlbums({ id: id }))
        dispatch(getTopTracks({ id: id }))
        dispatch(getArtistInfo({ id: id }))
    }, [])

    if (loading) return (<div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
    </div>)
    console.log(artistInfo);
    return (
        // <>
        //     <ul>
        //         {topAlbums.map((item, index) => {
        //             return (
        //                 <li>{item.name}</li>
        //             )
        //         })}
        //     </ul>
        //     <br />
        //     <br />
        //     <ul>
        //         {topTracks.map((item, index) => {
        //             return (
        //                 <li>{item.name}</li>
        //             )
        //         })}
        //     </ul>
        // </>

        <div>
            <div className='p-10'>
                <article className="flex flex-col md:flex-row items-center  group relative p-8  bg-gray-100 dark:bg-slate-800 rounded-2xl after:absolute after:w-[2px] after:h-10 after:bg-blue-600 after:top-[50%] after:left-0 after:-translate-y-[50%] my-4">
                    <figure className="w-full space-y-4">
                        <span className="text-base text-zinc-400 block mt-2 ">Artist</span>
                        <h2 className="text-lg font-bold tracking-tight  sm:text-2xl">
                            <a href="#" className="hover:underline">{artistInfo?.name}</a>
                        </h2>
                        <div>
                            <span className="text-base text-zinc-400 block mt-2 ">Listeners: {artistInfo?.stats?.listeners}</span>
                            <span className="text-base text-zinc-400 block mt-2 ">Playcount: {artistInfo?.stats?.playcount}</span>
                        </div>
                        {/* <button
                            className="px-5 py-1 border-2 hover:border-blue-600 transition border-gray-200 rounded-full"
                            onClick={() => navigate(`/detail/${props.mbid}`)}
                        >Read More</button> */}
                        <p className='text-slate-900 dark:text-slate-100' >
                            {artistInfo?.bio?.summary}
                        </p>
                    </figure>
                    <figcaption className="w-full md:w-1/3 order-first md:order-last">
                        {/* <img src="https://picsum.photos/200/300" alt="blog" className="w-full h-48 object-cover object-center rounded-md"> */}
                        <img src={Object.values(artistInfo?.image[2])[0]} alt="" className='m-auto' />
                    </figcaption>
                </article>
            </div>
            <div className='grid grid-cols-2 p-9'>
                <div className='m-2'>
                    {topAlbums.map((item, index) => {
                        return (
                            // <li>{item.name}</li>
                            <AlbumCard props={item} key={index} />
                        )
                    })}
                </div>
                <div className='m-2'>
                    {topTracks.map((item, index) => {
                        return (
                            // <li>{item.name}</li>
                            <TrackCard props={item} key={index} />
                        )
                    })}
                </div>
            </div>
        </div>


    )
}

export default ArtistDetailPage