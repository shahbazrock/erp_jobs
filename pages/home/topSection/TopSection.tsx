import JobSearch from '@components/common/searches/JobSearch'
import UserNavbar from '@components/common/userNavbar/UserNavbar'
import React from 'react'

const TopSection = () => {
    return (
        <div className="bg-[#473BF017] h-screen">
            <UserNavbar />
            <div className="mt-36">
                <div className="grid grid-cols-7 gap-4">
                    <div className="col-start-2 col-span-5">
                        <div className="text-center">
                            <div className="text-6xl font-bold">
                                Find a dream job that changes life.
                            </div>
                            <div className="text-xl md:w-[730px] sm:w-full m-auto mt-10 mb-16 opacity-[0.7]">
                                Millions of people are searching for jobs, salary information, company reviews, and interview questions. See what others are looking for erp-Jobs.
                            </div>

                            <JobSearch />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSection
