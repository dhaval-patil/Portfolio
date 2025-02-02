import React from 'react'

const Experience = () => {
  return (
    <>
    <section class="text-white max-w-screen-xl mx-auto pb-12">
      <h2
        class="text-3xl sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#47ae17] sm:border-2 border-[#47ae17] rounded-md"
      >
        Experience
      </h2>
      <div class="swiper mySwiper !py-14">
        <div class="swiper-wrapper items-center">
          <div class="swiper-slide px-4">
            <div
              class="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9  cursor-grab"
            >
              <img
                class="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                src="/image/logo.svg"
                alt="testimonial 3"
              />
              <div
                class="testimonial-text ml-6 text-left pt-6 md:pt-16 relative"
              >
                <p class="text-sm md:text-base mb-2">
                • Designed and implemented user-friendly web applications using JavaScript and ReactJS.<br/>
• Implement projects like responsive landing pages, weather apps, and interactive games like Tic-Tac-Toe.<br/>
• Optimized performance, reducing load times by 20% through code refactoring.<br/>
• Ensured the web applications were compatible across all major browsers.<br/>
                </p>
                <h2
                  class="text-right text-[#459bd5] font-bold text-2xl md:text-4xl"
                >
                  Prodigy Infotech
                </h2>
                <h5 class="text-right text-[#459bd5] text-base md:text-lg">
                  Web Developer Intern, Mumbai
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Experience