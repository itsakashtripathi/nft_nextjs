import style from './login.module.css'
import Image from 'next/image'
import { useRouter } from "next/router"

export default function Login() {

    const router = useRouter();

  return (
    <>
        <div className='container'>
            <div className='row mt-5 pt-5'>
                <div className='col-md-6 col-sm-12'>
                    <div>
                        <span className={`global-text-primary fs-3 fw-bold`}>
                            Welcome Back!
                        </span>
                        <br />
                        <span className='fs-6 global-text-tertiary'>
                            Didn't have an account?
                        </span>
                        &nbsp;&nbsp;
                        <span role="button" className={`${style.login} fs-6 text-white fw-bold`} onClick={() => {router.push("/register");}}>
                            Register now!
                        </span>
                        <br />
                    </div>
                    <br />
                    <div>
                        <form>
                            <div className="mb-3">
                                <input type="email" className="form-control global-background-secondary border-0 global-text-primary p-2 lh-lg" placeholder='Email' spellCheck="false" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control global-background-secondary border-0 global-text-primary p-2 lh-lg" placeholder='Password' spellCheck="false" />
                            </div>
                            <button type="submit" className="btn btn-success lh-lg col-12 fw-bold mb-3">Log In</button>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" style={{backgroundColor: "rgba(194,212,248,.15)"}} id="exampleCheck1" defaultChecked />
                                <label className="form-check-label global-text-tertiary" htmlFor="exampleCheck1">Keep me logged in</label>
                                <span role="button" className={`fs-6 text-primary fw-bold float-end`} onClick={() => {router.push("/password-reset");}}>
                                    Forgot Password?
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <br />
                    <Image src="/assets/img/register.png" width="700" height="400" />
                </div>
            </div>
        </div>
    </>
  )
}
