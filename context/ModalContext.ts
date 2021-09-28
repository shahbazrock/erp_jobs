import { initialCareerEditState } from "@components/userAuth/singup/stepper/stepperContent/step2/career/initialStates";
import { CareerQueryProps } from "@components/userAuth/singup/stepper/stepperContent/step2/career/types";
import { initialEducationEditState } from "@components/userAuth/singup/stepper/stepperContent/step2/education/initialStates";
import { EducationQueryProps } from "@components/userAuth/singup/stepper/stepperContent/step2/education/types";
import { createContext } from "react";

export const CareerModalContext = createContext({
    editData: initialCareerEditState,
    open: false,
    handleClose: () => { },
    handleEdit: (data: CareerQueryProps) => { }
})

export const EducationModalContext = createContext({
    editData: initialEducationEditState,
    open: false,
    handleClose: () => { },
    handleEdit: (data: EducationQueryProps) => { }
})