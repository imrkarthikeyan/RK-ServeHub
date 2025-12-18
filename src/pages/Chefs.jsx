import chef1 from '../img/chef1.jpg';
import chef2 from '../img/chef2.jpg';
import chef3 from '../img/chef3.jpg';
import chef4 from '../img/chef4.jpg';
import chef5 from '../img/chef5.jpg';

export default function Chefs(){

    const chefs = [
    { id: 1, img: chef1, name: 'Amrita Raichand', designation: 'Sous Chef', about:"Crafts culinary experiences with passion, precision, and creativity." },
    { id: 2, img: chef2, name: 'Rangaraj', designation: 'Executive Chef', about:" Over 10 years of experience crafting diverse global cuisines."},
    { id: 3, img: chef3, name: 'Garima Arora', designation: 'Chef de Partie', about:"Transforms fresh ingredients into flavorful, memorable meals." },
    { id: 4, img: chef4, name: 'Kowsick', designation: 'Executive Chef', about:"Bringing joy to plates through skillful and soulful cooking." },
    { id: 5, img: chef5, name: 'Venkatesh Bhutt', designation: 'Executive Chef', about:"Expert in menu development, food styling, and kitchen leadership." }
    ];

    return(
        <div className="text-center bg-cover min-h-screen mb-24 mt-10 pt-10">
            <h1 className="text-2xl text-[DodgerBlue] mb-5 relative inline-block font-[500]">
                <span className='mr-1 absolute top-1/2 left-[-60px] block w-[45px] h-[2px] bg-[DodgerBlue] ml-2'></span>
                    Cooking Team
                <span className='absolute top-1/2 right-[-55px] block w-[45px] h-[2px] bg-[DodgerBlue] ml-2'></span>
            </h1>
            <h2 className="font-[600] text-4xl">Our Executive Chefs</h2>
            <div className="mt-10 mx-6 text-center mr-[55px]">
                <ol className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {chefs.map((chef)=>(
                        <li key={chef.id} className="self-start flex flex-col mx-4 pt-4 items-center rounded-lg shadow-2xl shadow-gray-400 group overflow-hidden transition-all duration-500 ease-in-out w-full">
                            <div className="px-3">
                                <img src={chef.img} alt={chef.name} className="rounded-full inline-block mb-6 w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[220px] md:h-[220px] object-cover transform duration-500 ease-in-out group-hover:scale-110" />
                            </div>
                            <div className="relative mb-6">
                                <h2 className="font-bold text-2xl p-2">{chef.name}</h2>
                                <p className="text-lg text-center p-2 font-light">{chef.designation}</p>
                                <div className="duration-500 max-h-0 ease-in-out max-h-0 group-hover:max-h-32 overflow-hidden transition-all else-in-out">
                                    <p className="text-[DodgerBlue] font-bold px-4 text-sm">{chef.about}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}