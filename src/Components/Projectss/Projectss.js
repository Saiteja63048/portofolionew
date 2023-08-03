import React from 'react'

export const Projectss = () => {
    return (
        <div className='bg-slate-950'>
                  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-20 " id='Project' >
        <h1 className='text-5xl font-bold mb-8 text-white'><span className='text-pink-600'>Pro</span>jects</h1>
        {/* <hr className='mx-[500px] mb-8 border-2 border-pink-600' ></hr> */}
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-blue-400 rounded-t-full shadow-sm">
            <img
              src="https://as2.ftcdn.net/v2/jpg/01/22/30/57/1000_F_122305723_LHeYt0cxuskc9w4SnjKeUXAcBx6eVAMg.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 ">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  {/* traveling */}
                </a>
                {/* <span className="text-gray-600">— 28 Dec 2020</span> */}
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors text-white duration-200 hover:text-deep-purple-accent-700"
              >
                Internship Provider
              </a>
              <p className="mb-2 text-white">
              The Internship Provider Project has been developed using a combination of HTML, CSS, JavaScript, React,firebase and Tailwind CSS to create an interactive and user-friendly web application.              </p>
              <br/>
              <a
                href="https://64c3fb8ca5096d1f3ff67b92--cheerful-arithmetic-bd7ae0.netlify.app/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-white hover:text-deep-purple-800 bg-purple-900 py-3 px-10 rounded"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-pink-600 text-white rounded-t-full shadow-sm">
            <img
              src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?w=740&t=st=1690566421~exp=1690567021~hmac=4d9d2ca7ee160a4d924767210363dea50809a8da69bf19eeefcf8677a6ce4ead"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 ">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
            </a>
                {/* <span className="text-gray-600">— 28 Dec 2020</span> */}
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Simple is better"
                className="inline-block mb-3 text-2xl font-bold leading-5 text-white  transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Ecommerce
              </a>
              <p className="mb-2 text-white">
              The E-commerce website has been developed using HTML, CSS, JavaScript, React, Tailwind CSS, Redux, and Firebase . This powerful tech stack allows for the creation of a robust and scalable e-commerce platform with a seamless user experience.              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-white hover:text-deep-purple-800 bg-purple-900 py-3 px-10 rounded"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300  rounded-t-full shadow-sm">
            {/* <img
              src="https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?w=740&t=st=1690567721~exp=1690568321~hmac=a7ce2ef5bb74d58db2fd8af5b07c33dd1f7c84736b762b17ba41e3de9d814822"
              className="object-cover w-full h-64"
              alt=""
            /> */}
            <div className="p-5 ">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  {/* traveling */}
                </a>
                {/* <span className="text-gray-600">— 28 Dec 2020</span> */}
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Film It!"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors text-white duration-200 hover:text-deep-purple-accent-700"
              >
                {/* Coming soon */}
              </a>
              <p className="mb-2 text-white">
                {/* Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque. */}
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                {/* Learn more */}
              </a>
            </div>
          </div>
        </div>
      </div>
        </div>

    );
  };