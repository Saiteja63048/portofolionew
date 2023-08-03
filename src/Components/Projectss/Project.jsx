/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Project = () => {
  return (
    <div id='Project'>
      <section class="bg-slate-950 mb-20">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-black">Projects
        </h1>



        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
            <div className='bg-purple-950 p-12 rounded-xl border-black  border-solid border-4'>
                <img class="object-cover w-full rounded-lg h-52 mb-8 "
                    src="https://as2.ftcdn.net/v2/jpg/01/22/30/57/1000_F_122305723_LHeYt0cxuskc9w4SnjKeUXAcBx6eVAMg.jpg"
                    alt=""/>
                    <h1 className='text-rose-700 text-3xl font-bold mb-8'>Internship Provider</h1>
                    <p className='text-black bg-white p-3 rounded mb-8'>The Internship Provider Project has been developed using a combination of HTML, CSS, JavaScript, React,firebase and Tailwind CSS to create an interactive and user-friendly web application.</p>
                <a href='https://64c3fb8ca5096d1f3ff67b92--cheerful-arithmetic-bd7ae0.netlify.app/' class="mt-10 text-xl font-semibold text-black px-14  py-2 rounded capitalize dark:text-black bg-yellow-400">view project</a>
                {/* <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p> */}
            </div>

            <div className='bg-purple-950 p-12 rounded-xl'>
                <img class="object-cover w-full rounded-lg h-52 mb-8 "
                    src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?w=740&t=st=1690566421~exp=1690567021~hmac=4d9d2ca7ee160a4d924767210363dea50809a8da69bf19eeefcf8677a6ce4ead"
                    alt=""/>
                     <h1 className='text-rose-700 text-3xl font-bold mb-8'>Ecommerce</h1>
                    <p className='text-white mb-8'>The E-commerce website has been developed using HTML, CSS, JavaScript, React, Tailwind CSS, Redux, and Firebase. This powerful tech stack allows for the creation of a robust and scalable e-commerce platform with a seamless user experience.</p>

                <a href='https://64c3fb8ca5096d1f3ff67b92--cheerful-arithmetic-bd7ae0.netlify.app/' class="mt-10 text-xl font-semibold text-black px-14  py-2 rounded-full capitalize dark:text-black bg-slate-200">view project</a>
            </div>

            <div className='bg-purple-950 p-6 rounded-xl'>
                <img class="object-cover w-full rounded-lg h-96 mb-8 "
                    src="https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?w=740&t=st=1690567721~exp=1690568321~hmac=a7ce2ef5bb74d58db2fd8af5b07c33dd1f7c84736b762b17ba41e3de9d814822"
                    alt=""/>
                <a href='https://64c3fb8ca5096d1f3ff67b92--cheerful-arithmetic-bd7ae0.netlify.app/' class="mt-10 text-xl font-semibold text-black px-14  py-2 rounded-full capitalize dark:text-black bg-slate-200">coming-soon</a>
                {/* <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p> */}
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Project
