'use client'


const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full h-32 bg-center bg-cover md:h-[38rem] rounded-md'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      
    </div>
  )
}

export default Slide
