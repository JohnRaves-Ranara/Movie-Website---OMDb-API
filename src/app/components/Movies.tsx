import Image from 'next/image'
import image from '/public/sample_poster.jpg'


export default function Movies() {
    return (
        <div className="min-h-screen bg-gray-950 place-items-center grid grid-cols-4 gap-16 text-white px-24 pt-[22vh] pb-24">
            {/* <p>Search for a movie by typing in the search bar</p> */}
            {Array.from({length: 10}, () => {
                return (
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src={image} alt='' width={200} className='rounded-lg'></Image>
                        <div className='text-center'>
                            <p>Guardians of the Galaxy</p>
                            <p>2015</p>
                            <em className='text-sm text-gray-500'>Action, Sci-fi, Comedy</em>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}