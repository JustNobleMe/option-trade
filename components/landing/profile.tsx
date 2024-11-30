import React from "react";
import Image from "next/image";

const Profile = () => {
    return(
        <section>
            <section className="py-16" id="profile">
                <div className="flex flex-row justify-center space-x-32">
                    <Image src="/src/profile2.jpg" alt="John Doe" width={300} height={130} className="rounded-2xl" />
                    <div className="flex flex-col">
                        <div className="flex flex-row py-6">
                            <i className='fa-solid fa-star text-1xl text-yellow-400'></i>
                            <i className='fa-solid fa-star text-1xl text-yellow-400'></i>
                            <i className='fa-solid fa-star text-1xl text-yellow-400'></i>
                            <i className='fa-solid fa-star text-1xl text-yellow-400'></i>
                            <i className='fa-solid fa-star text-1xl text-yellow-400'></i>
                        </div>
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <p className="max-w-md mb-4">TradePro has revolutionized the way I manage my investments. It's intuitive and user-friendly.</p>
                            </div>
                            <div>
                                <p className="font-bold">Isaac Odey<br /><span className="text-gray-400">Software Engineer, Nigeria</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 text-center" id="trade">
                <h2 className="text-3xl font-bold mb-4 text-purple-900">Let's Give Away a Trade!</h2>
                <p className="mb-8">Join TradePro today and unlock exclusive trading opportunities. Sign up now to start trading smarter.</p>
                <a href='/signup' className="bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-700">Get Started</a>
            </section>
      </section>
    );
};

export default  Profile;