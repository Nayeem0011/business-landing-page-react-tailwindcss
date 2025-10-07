import scheduleImage from "../assets/stats.webp"

const ScheduleSection = () => {
  return (
    <div>
      <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
            {/* Left */}
            <div className="md:w-1/2 w-full">
                <img className="w-full h-auto" src={scheduleImage} alt="schedule image" />
            </div>

            {/* Right */}
            <div>
                
            </div>
        </div>
      </section>
    </div>
  )
}

export default ScheduleSection
