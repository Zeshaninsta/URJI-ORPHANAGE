import React from 'react';
import Keyruu from '../assets/Images/Keyruu.jpg'; // Ensure the path is correct
import SSVG from '../assets/Images/oooscillate.svg';

const About = () => {
  return (
    <div className='relative min-h-screen py-20 bg-gray-900 text-white'>
      {/* Decorative Background */}
      <div className='absolute inset-0 z-0'>
        <img 
          src={SSVG} 
          alt="Decorative Background" 
          className='object-cover w-full h-full opacity-20'
        />
      </div>

      {/* Main Content */}
      <div className='relative z-10'>
        {/* Header Section */}
        <section className='text-center mb-20'>
          <h1 className='text-4xl lg:text-5xl font-bold mb-6 font-inter'>
            About Our Organization
          </h1>
          <p className='text-lg lg:text-xl font-inter font-light'>
            Discover our mission and meet the visionary behind our efforts.
          </p>
        </section>

        {/* Director’s Section */}
        <section className='max-w-4xl mx-auto'>
          {/* Profile Card */}
          <div className='bg-gray-800 rounded-lg shadow-lg overflow-hidden'>
            {/* Profile Header */}
            <div className='flex items-center p-6 bg-gray-700'>
              <div className='relative w-20 h-20'>
                <img
                  src={Keyruu}
                  alt='Keyraddin Mohammed'
                  className='object-cover w-full h-full rounded-full border-2 border-gray-600 shadow-md'
                />
              </div>
              <div className='ml-4'>
                <h3 className='text-xl font-semibold font-inter'>
                  Keyraddin Mohammed 
                </h3>
                <p className='text-sm font-inter font-light'>Founder & Director</p>
              </div>
            </div>

            {/* Post Content */}
            <div className='p-6'>
              <div className='space-y-4'>
                <p className='text-base leading-relaxed font-inter'>
                  The Urji Orphanage Organization was established in 2012 EC (Ethiopian Calendar) and has been working on various activities according to its mission and plans.
                </p>
                <p className='text-base leading-relaxed font-inter font-light'>
                  We currently support 25 children, including 12 boys and 13 girls, who were previously in difficult situations. We have significantly improved their living conditions.
                </p>
                <p className='text-base leading-relaxed font-inter font-light'>
                  Our support includes food, clothing, educational materials, and a monthly allowance of 1000 Ethiopian Birr, along with additional assistance.
                </p>
                <p className='text-base leading-relaxed font-inter font-light'>
                  Our goal is to help children and families in the Bale Robe area achieve self-sufficiency and positive development by 2025, providing necessary skills and resources.
                </p>
                <p className='text-base leading-relaxed font-inter font-light'>
                  We aim to address the needs of orphaned children and those in challenging situations by ensuring they receive adequate education and support.
                </p>
                <p className='text-base leading-relaxed font-inter font-light'>
                  Community support, both local and international, is crucial for achieving our goals. Contributions, whether financial or in-kind, are highly valued to continue our mission effectively.
                </p>
                <p className='text-base leading-relaxed font-inter font-light'>
                  Our impact extends beyond Robe, aiming to make a difference nationwide. Support in any form strengthens our efforts and mission.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
