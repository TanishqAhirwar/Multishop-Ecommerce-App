import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import axiosClient from '../webservices/getway'
import { apiUrls } from '../webservices/apiurls'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {
    const { register, reset, formState: { errors }, handleSubmit } = useForm()
    const { isLoggedIn } = useSelector(store => store.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userLogin = useCallback(async (data) => {
        try {
            let res = await axiosClient.post(apiUrls.LOGIN, data);
            if (res.data?.accessToken) {
                dispatch({ type: "user/loginUserdata", payload: res.data })
                localStorage.setItem("userTokenId", res.data?.id)
                localStorage.setItem("userToken", res.data?.accessToken)
                toast.success("Login Success")
                navigate(-1)
                reset()
            }
        } catch (error) {
            toast.error(error?.response.data.message)
        }
    }, [navigate, reset, dispatch])

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/")
        }
    }, [isLoggedIn, navigate])

    return (
        <>
            <div className="container-fluid">
                <h2 className="section-title text-center position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="bg-secondary pr-3">Login</span>
                </h2>
                <div className="row px-xl-5 justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-5 p-3">
                        <div className="contact-form bg-light p-3 px-5 pt-4 rounded shadow">
                            <form className='py-3' onSubmit={handleSubmit(userLogin)}>
                                <div className="control-group">
                                    <label htmlFor="name">Username</label>
                                    <input
                                        type="text"
                                        className={`${errors.username?.message ? "border-danger form-control" : "form-control"}`}
                                        id="name"
                                        placeholder="Username"
                                        {...register("username", { required: "User name is Required !" })}
                                    />
                                    <p className="help-block fa text-danger" >{errors.username?.message}</p>
                                </div>
                                <div className="control-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className={`${errors.password?.message ? "border-danger form-control" : "form-control"}`}
                                        id="password"
                                        placeholder="Password"
                                        {...register("password", { required: "Password is Required !" })}
                                    />
                                    <p className="help-block fa text-danger" >{errors.password?.message}</p>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <Link to="">Forgot Password ?</Link>
                                </div>
                                <div className='mt-4 d-flex justify-content-center'>
                                    <button
                                        className="btn btn-primary py-2 px-5"
                                        type="submit"
                                    >
                                        Login
                                    </button>
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <p>Dont Have an Account ? <Link to="/sign-up" className='text-info'>Sign up</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
