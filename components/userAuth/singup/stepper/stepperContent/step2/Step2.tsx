import React, { useState } from 'react'
import BasicInformation from './BasicInformation'
import CareerWrapper from './careerWrapper/CareerWrapper'
import Education from './education/Education'
import Skills from './skills/Skills'

const Step2 = () => {
    const [active, setActive] = useState('basic')

    const showItems = () => {
        switch (active) {
            case 'basic':
                return <BasicInformation setActive={setActive} />
            case 'career':
                return <CareerWrapper setActive={setActive} />
            case 'education':
                return <Education setActive={setActive} />
            case 'skills':
                return <Skills setActive={setActive} />
        }
    }
    return (
        <div>
            {showItems()}
        </div>
    )
}

export default Step2
