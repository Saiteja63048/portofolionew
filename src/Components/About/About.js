import React from 'react'

const About = () => {
  return (
    <div id='About'>
      <section class="text-gray-600 body-font -mb-40 bg-slate-950">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-6 md:mb-0">
      <img class="object-cover object-center rounded-full" alt="hero" src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?w=740&t=st=1690475011~exp=1690475611~hmac=1270a2e8d2128d4928ddbd9d8bec90b48f9b56ade43ef1e2339121a87bb50178"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-xl text-lg mb-4 font-bold text-white font-sans"><span className='text-pink-600'>About</span> me
      </h1>
      <h1 class="title-font sm:text-4xl text-2xl mb-4 font-bold text-yellow-400 font-sans">A dedicated front-end devoloper based in Hyderabad.
      </h1>

      <p class="mb-8 leading-relaxed text-white">A Front-end Developer with a deep passion for web development, I possess a strong skill set in HTML, CSS, JavaScript, React, Tailwind CSS, and Material UI. I take pride in creating clean and semantic HTML code, designing visually appealing and responsive layouts using CSS, and implementing dynamic functionalities with JavaScript.  Overall, I am a versatile and dedicated Front-end Developer with a user-centric approach, striving to deliver high-quality, performant, and visually appealing web applications.</p>
      <div class="flex justify-center">
        {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About
