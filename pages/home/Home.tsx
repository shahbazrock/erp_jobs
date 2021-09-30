import React from 'react'
import Category from './category/Category'
import Featured from './featured/Featured'
import JobSteps from './jobSteps/JobSteps'
import News from './news/News'
import TopSection from './topSection/TopSection'

const Home = () => {
    return (
        <div>
            <TopSection />
            <Featured />
            <Category />
            <JobSteps />
            <News />
        </div>
    )
}

export default Home
