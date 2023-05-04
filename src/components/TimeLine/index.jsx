import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function TimeLine() {
    return (
    <VerticalTimeline>
        <VerticalTimelineElement
        contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #232631' }}
        date='2023 - Present'
        iconStyle={{ background: '#1d1836', color: '#fff' }}
        icon={
            <div className='flex justify-center items-center w-full h-full'>
            <img
                src= '../../GA.png'
                alt='experience icon'
                className='w-[80%] h=[60%] object-contain'
            />
            </div>
        }
        >
        <div>
            <h3 className='text-white text-[24px]'>
            Software Engineer
            </h3>
            <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
            General Assembly
            </p>
        </div>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
            <li className='text-white-100 text-[14px]
                pl-1 tracking-wider'
            >
                Developing and maintaining web applications using React.js 
                and other related technologies.
            </li>
            <li className='text-white-100 text-[14px]
                pl-1 tracking-wider'
            >
                Collaborating with teams including scrum masters, instructors, 
                instructional aids, 
                to produce a highly efficient website
            </li>
            <li className='text-white-100 text-[14px]
                pl-1 tracking-wider'
            >
                Implementing responsive design and ensuring 
                cross-browser compatibility.

            </li>
            <li className='text-white-100 text-[14px]
                pl-1 tracking-wider'
            >
                Participating in code reviews and providing constructive feedback to other developers.

            </li>
        </ul>
        </VerticalTimelineElement >
        <VerticalTimelineElement
        contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #232631' }}
        date='Jan 2022 - Nov 2022'
        iconStyle={{ background: '#1d1836', color: '#fff' }}
        icon={
            <div className='flex justify-center items-center w-full h-full'>
            </div>
        }
        >
        <div>
            <h3 className='text-white text-[24px]'>
            Painter
            </h3>
            <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
            KAS Painting
            </p>
        </div>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
            <li className='text-white-100 text-[14px]
                pl-1 tracking-wider'
            >
                Help prepare the exteriors and interiors of houses for painting. 
                This includes masking, taping, scraping, and priming
            </li>
            <li className='text-white-100 text-[14px]
                pl-1 tracking-wider'
            >
                Doing walkarounds with homeowners to answer any questions they have
                 to ensure they get the great paint job they desire
            </li>
            <li className='text-white-100 text-[14px]
                pl-1 tracking-wider'
            >
                Painting interior and exterior of homes

            </li>
        </ul>
        </VerticalTimelineElement >
        <VerticalTimelineElement
        contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #232631' }}
        date='Jan 2022 - Nov 2022'
        iconStyle={{ background: '#1d1836', color: '#fff' }}
        icon={
            <div className='flex justify-center items-center w-full h-full'>
            </div>
        }
        >
        <div>
            <h3 className='text-white text-[24px]'>
            Painter
            </h3>
            <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
            Meadows Painting
            </p>
        </div>
        </VerticalTimelineElement >
    </VerticalTimeline>
    )
}
