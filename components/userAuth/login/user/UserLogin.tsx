import { LoadingButton } from '@mui/lab'
import { TextField } from '@mui/material'
import { useRouter } from 'next/router'
import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { loginUser } from '../../../../api/auth'
import AuthWrapper from '../../../common/authWrapper/AuthWrapper'
import SnakbarAlert from '../../../common/snakbarAlert/SnakbarAlert'
import UserNavbar from '../../../common/userNavbar/UserNavbar'
import validateEmail from '../../../functions/emailValidation'
import EmptyFieldCheck from '../../../functions/emptyFieldCheck'

const UserLogin = () => {
    const router = useRouter()
    const [state, setState] = useState({
        username: '',
        password: '',
    })
    const [loading, setLoading] = useState(false)
    const [inputError, setInputError] = useState(false)
    const [apiError, setApiError] = useState<any[]>([])
    const [apiSuccess, setApiSuccess] = useState<any[]>([])


    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setState({ ...state, [name]: value })
    }

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)
        const { username, password } = state

        if (EmptyFieldCheck({ username, password })) {
            setInputError(true)
            return
        }
        setLoading(true)
        const res = await loginUser({ username, password })
        if (res.error) {
            setApiError(res.data)
            setLoading(false)
        } else {
            setTimeout(() => {
                router.push('/register/user/')
            }, 1000);
            setApiSuccess(['User loggedin successfully'])
            setLoading(false)
        }

    }

    return (
        <div className="bg-[#F2F2F2] ">
            <UserNavbar />
            <div className="flex justiy-center items-center h-[91vh]">
                <div className="grid grid-cols-6 justify-center">
                    <div className="col-start-3 col-span-2">
                        <AuthWrapper>
                            <form noValidate autoComplete="off" onSubmit={onSubmit}>
                                <div className="grid gap-5">
                                    <TextField
                                        error={inputError && !state.username ? true : false}
                                        helperText={inputError && !state.username ? 'Please provide a username' : ''}
                                        required
                                        id="outlined-username"
                                        name="username"
                                        label="Your Username"
                                        variant="outlined"
                                        className="w-full"
                                        onChange={onChangeInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        required
                                        error={inputError && !state.password ? true : false}
                                        helperText={inputError && !state.password ? 'Please provide a password' : ''}
                                        id="outlined-password"
                                        name="password"
                                        type="password"
                                        label="Enter Password"
                                        variant="outlined"
                                        className="w-full"
                                        onChange={onChangeInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <LoadingButton type="submit" variant="contained" color="primary" loading={loading} disableElevation >
                                        Continue
                                    </LoadingButton>
                                </div>
                            </form>
                            <div className="my-6">
                                <div className="divider">
                                    <span>or</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3 social-links">
                                <div className="social-box">
                                    google
                                </div>
                                <div className="social-box">
                                    google
                                </div>
                                <div className="social-box">
                                    google
                                </div>
                            </div>
                        </AuthWrapper>
                    </div>
                </div>
            </div>
            <SnakbarAlert open={apiError.length ? true : false} handleClose={() => setApiError([])} message={apiError} type="error" />
            <SnakbarAlert open={apiSuccess.length ? true : false} handleClose={() => setApiSuccess([])} message={apiSuccess} type="success" />
        </div>
    )
}

export default UserLogin
