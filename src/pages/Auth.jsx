import React, { useState } from 'react'
import './Auth.css'
import authImg from "../assets/authimage.jpg"
import logo from "../assets/logo1.png"
import { Form, FloatingLabel } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginApi, registerApi } from '../../services/allAPI'
function Auth({ insideRegister }) {
    const navigate = useNavigate()
    const [userInput, setUserInput] = useState({ username: "", email: "", password: "" })
    console.log(userInput);

    const handleRegister = async (e) => {
        e.preventDefault()
        if (userInput.username && userInput.email && userInput.password) {
            try {
                const result = await registerApi(userInput)
                console.log(result);
                if (result.status == 200) {
                    toast.success(`Welocme ${result.data.username}`)
                    setUserInput({ username: "", email: "", password: "" })
                    setTimeout(() => {
                        navigate('/login')
                    }, 2000)

                } else {
                    toast.error(result.response.data)
                    setUserInput({ username: "", email: "", password: "" })
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            toast.info("Please fill the form completely")
        }
    }

    //login
    const handleLogin = async (e) => {
        e.preventDefault()
        if (userInput.email && userInput.password) {
            try {
                const result = await loginApi(userInput)
                if (result.status == 200) {
                    sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
                    sessionStorage.setItem("token", result.data.token)
                    toast.success(`Welcome ${result.data.existingUser.username}`)
                    setUserInput({ username: "", email: "", password: "" })
                    setTimeout(()=>{
                        navigate('/dashboard')
                      },2000)
                } else {
                    toast.error(result.response.data)
                }

            } catch (err) {
                console.log(err);
            }
        } else {
            toast.warning("Please fill the form completely")
        }
    }
    return (
        <>
            <div className="auth-container">
                <div style={{ height: "100%" }} className="row">
                    <div style={{ height: "100%" }} className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                        <div className="auth shadow d-flex flex-column  align-items-center">
                            <img className='mt-3' width={"100px"} height={"100px"} src={logo} alt="" />
                            <h1 className='fw-bolder'>Sign {insideRegister ? "Up" : "In"}</h1>
                            <p className='mt-4'>Fill in required details to create a BidZone account</p>
                            <Form className='w-75 text-center' action="">
                                {insideRegister &&
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="username"
                                        className="mb-3"
                                    >
                                        <Form.Control value={userInput.username} onChange={(e) => setUserInput({ ...userInput, username: e.target.value })} type="text" placeholder="Enter username" />
                                    </FloatingLabel>}

                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control value={userInput.email} onChange={(e) => setUserInput({ ...userInput, email: e.target.value })} type="email" placeholder="Enter your email" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control value={userInput.password} onChange={(e) => setUserInput({ ...userInput, password: e.target.value })} type="password" placeholder="Password" />
                                </FloatingLabel>

                            </Form>
                            {insideRegister ?
                                <>
                                    <button onClick={(e) => handleRegister(e)} className='btn btn-primary w-50 mt-3 rounded'>Register</button>
                                    <p className='mt-3'>Already have an account?click here to <Link to={"/login"}>login</Link></p>
                                </>
                                :
                                <>
                                    <button onClick={e=>handleLogin(e)} className='btn btn-primary w-50 mt-3 rounded'>Log in</button>
                                    <p className='mt-3'>New User?click here to <Link to={"/register"}>Register</Link></p>
                                </>

                            }
                        </div>

                    </div>
                    <div style={{ height: "100%" }} className="col-lg-6">
                        <img width={"100%"} height={"100%"} src={authImg} alt="" />
                    </div>
                </div>
            </div>
            <ToastContainer position='top-center' theme='colored' autoClose="1000" />
        </>
    )
}

export default Auth