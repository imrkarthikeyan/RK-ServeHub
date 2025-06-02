import i1 from '../img/vkholi.jpg';
import i2 from '../img/kishor.jpg';
import i3 from '../img/bhavana.jpg';
import i4 from '../img/abishek.jpg';
import i5 from '../img/chefdamu.jpg';
import i6 from '../img/patel.jpg';
import i7 from '../img/kk.jpg';
import i8 from '../img/srin.jpg';


export default function Reviews(){

    const reviews = [
        { id: 1, img: i1, name: '@imVkholi', designation: 'visited june 2023', about:"The ambiance was calm and inviting, making the meal even more enjoyable.Staff were friendly and the flavors were simply outstanding." },
        { id: 2, img: i2, name: '@Kishorkumar', designation: 'visited january 2025', about:"The food was bursting with flavor and beautifully presented.A must-visit place for food lovers seeking a memorable dining experience."},
        { id: 3, img: i3, name: '@BhavanaBalakrishnan', designation: 'visited march 2024', about:"We enjoyed a diverse menu with rich, authentic flavors.Clean, cozy, and perfect for family dinners or dates. Truly an unforgettable and relaxing evening." },
        { id: 4, img: i4, name: '@Muthukumar', designation: 'visited january 2025', about:"Clean, well-decorated interiors and a refreshing vibe made us feel at home.Service was top-notch and the menu had delightful variety." },
        { id: 5, img: i5, name: '@chefDamu', designation: 'visited may 2024', about:"The serene environment and tasteful décor made it perfect for a family dinner.The staff was courteous, and every dish was cooked to perfection." },
        { id: 6, img: i7, name: '@karthicksaravanan', designation: 'visited may 2025', about:"Amazing place with friendly staff. Every dish was deliclouse and well made. Really happy with the food and service Loved the atmoshpere and service too!" },
        { id: 7, img: i6, name: '@parthivpatel', designation: 'visited may 2024', about:"Wow, such a great experience! Clean, quick service and yummy food. One of the best place to eat and stay. Highly recommend this restaurant to everyone." },
        { id: 8, img: i8, name: '@SrinidhiShetty', designation: 'visited Aprail 2025', about:"Best restaurant I ever seen! The food was super tasty and fresh. Such a great Experience. My review for this restaurant is 5 out 5." }
        ];

    return(
        <div className="p-4 bg-[#cccc] bg-cover min-h-screen">
           <h2 className="pt-5 text-[30px] px-5 text-[DodgerBlue] font-bold text-center">Customer Reviews</h2>
           <h1 className='text-center py-4 text-2xl font-bold'>Top Reviews</h1>
           <div className="p-2 md:p-[50px]">
                <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mb-3 gap-4">
                    {reviews.map((review)=>(
                        <div className="hover:bg-[#ccc] bg-[white] pt-3 border border-black rounded" key={review.id}>
                            <div className="p-4 py-5 px-5">
                                <p>{review.about}</p>
                                <div className='flex mt-7'>
                                    <div>
                                        <img src={review.img} alt="" className='w-[50px] rounded-full'/>
                                    </div>
                                    <div className='px-5'>
                                        <p className='font-bold'>{review.name}</p>
                                        <p className='text-[Gray]'>{review.designation}</p>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
        </div>
    )
}