import React, { useState, useEffect } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "motion/react"

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = projectsData.length - cardsToShow;
            return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
    }

    const prevProject = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = projectsData.length - cardsToShow;
            return prevIndex === 0 ? maxIndex : prevIndex - 1;
        });
    }

    useEffect(() =>{
        const updateCardsToShow = () => {
            if(window.innerWidth >= 1024){
                setCardsToShow(4); // Show 3 cards on desktop
            } else if(window.innerWidth >= 768){
                setCardsToShow(2); // Show 2 cards on tablet
            } else {
                setCardsToShow(1); // Show 1 card on mobile
            }
        }
        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, [])
    
  return (
    <motion.div 
    initial={{ opacity: 0, x: -200 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className='flex flex-col items-center justify-center container mx-auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Crafting Spaces, Building Legacies—Explore Our Portfolio</p>

        {/* slider buttons */}
        <div className='mb-8 flex justify-end items-center w-full'>
            <button onClick={prevProject}
             className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
                <img src={assets.left_arrow} alt="Previous" />
            </button>
            <button onClick={nextProject}
             className='p-3 bg-gray-200 rounded' aria-label='Next Project'>
                <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>

        {/* Project Cards */}
        <div className='overflow-hidden w-full'>
            <div 
                className='flex gap-8 transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
            >
                {projectsData.map((project, index) =>(
                    <div 
                        key={index} 
                        className='relative flex-shrink-0'
                        style={{ width: `calc(${100 / cardsToShow}% - ${(8 * (cardsToShow - 1)) / cardsToShow}px)` }}
                    >
                        <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                            <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                <h2 className='text-xl font-semibold text-gray-800'>
                                    {project.title}
                                </h2>
                                <p className='text-gray-500 text-sm'>
                                    {project.price} <span className='px-1'>|</span> {project.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
  )
}

export default Projects