/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import Grid8span6 from '@components/common/grids/Grid8span6'
import CareerAdviceCard from './CareerAdviceCard'
import LatestToolCard from './LatestToolCard'

const CareerAdvice = () => {
    return (
        <div>
            <Grid8span6>
                <div className="py-28 text-center">
                    <div className="md:text-5xl text-4xl  font-bold">
                        Career Advice
                    </div>
                    <div className="text-xl mt-7 opacity-70 lg:w-[900px]  m-auto">
                        Whether you're looking to change careers or simply want to know what interview questions to prepare for, this is the place for career advice and tips.
                    </div>
                </div>
            </Grid8span6>
            <Image src="/assets/images/career.png" width={100}
                height={45}
                layout="responsive"
                alt="career" />

            <Grid8span6>
                <div className="py-28 text-center">
                    <div className="md:text-5xl text-4xl font-bold">
                        Why you should take career adivce?
                    </div>
                    <div className="text-xl mt-7 lg:w-[700px] m-auto opacity-70">
                        Finding jobseeking tips you can actually use. That's how it feels to love Mondays.
                    </div>
                    <div className="mt-24">
                        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 lg:gap-28">
                            <CareerAdviceCard title="Planning a Job Search" content="To help you work out what your qualifications really mean and where to go next...." />
                            <CareerAdviceCard title="Salary & Benefits" content="Learn about average salaries, employee benefits and how to negotiate with The Boss." />
                            <CareerAdviceCard title="CV Writing Tips" content="Writing a CV can be a stressful task, especially if you’re starting from scratch…" />
                            <CareerAdviceCard title="Job Interview" content="TWhether you think your interview went well or not, the worst thing you can do is nothing at...." />
                            <CareerAdviceCard title="Work Life" content="Grab life by the fur. Make sure your next job offers the right kind of work/life balance." />
                            <CareerAdviceCard title="Career Developemnt" content="Help and advice on all aspects of career development and..." />
                        </div>
                    </div>
                </div>

            </Grid8span6>
            <div className="bg-[#F4F7FA] py-28 text-center">
                <Grid8span6>
                    <div className="md:text-5xl text-4xl font-bold">
                        Latest Tool & Tips
                    </div>
                    <div className="mt-20 text-left space-y-4">
                        <LatestToolCard title="CV Templates" subtitle="Find CV templates according to your choice" />
                        <LatestToolCard title="Personal Statements" subtitle="Personal statement examples and many writing techniques" />
                        <LatestToolCard title="Interview Techniques" subtitle="Many interview questions" />
                        <LatestToolCard title="Books for your career" subtitle="Best books to improve your carrer" />
                        <LatestToolCard title="Useful Tools" subtitle="Salary checker and Tax calculator" />
                    </div>
                </Grid8span6>
            </div>
        </div>
    )
}

export default CareerAdvice
