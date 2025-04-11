import { useForm } from 'react-hook-form';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router';
import axiosClient from '../webservices/getway';
import { apiUrls } from '../webservices/apiurls';

export default function Signup() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { isLoggedIn } = useSelector(store => store.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userSignup = useCallback(async (data) => {
        try {
            let res = await axiosClient.post(apiUrls.SIGNUP, data);
            if (res.data?.accessToken) {
                dispatch({ type: "user/loginUserdata", payload: res.data });
                toast.success("Signup Successful!");
                navigate("/login");
                reset();
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Signup failed!");
        }
    }, [navigate, reset, dispatch]);

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/")
        }
    }, [isLoggedIn, navigate])

    return (
        <div className="flex justify-center bg-gray-100">
            <div className="bg-white p-6 shadow-lg rounded-lg w-96">
                <h2 className="text-2xl font-semibold text-center text-gray-700">Sign Up</h2>
                <form className="mt-4" onSubmit={handleSubmit(userSignup)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            className={`mt-1 block w-full p-2 border ${errors.username ? "border-red-500" : "border-gray-300"} rounded-md`}
                            placeholder="Enter username"
                            {...register("username", { required: "Username is required!" })}
                        />
                        <p className="text-red-500 text-xs mt-1">{errors.username?.message}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className={`mt-1 block w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md`}
                            placeholder="Enter email"
                            {...register("email", { required: "Email is required!", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" } })}
                        />
                        <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className={`mt-1 block w-full p-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md`}
                            placeholder="Enter password"
                            {...register("password", { required: "Password is required!", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
                        />
                        <p className="text-red-500 text-xs mt-1">{errors.password?.message}</p>
                    </div>
                    <div className='mt-4 d-flex justify-content-center'>
                        <button
                            type="submit"
                            className="bg-yellow-300 text-white py-2 px-5  rounded-md hover:bg-yellow-200 transition">
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-sm text-center">
                    Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
                </p>
            </div>
        </div>
    );
}
