import style from './register.module.css'
import Image from 'next/image'
import { useRouter } from "next/router"

export default function Register() {

    const router = useRouter();

  return (
    <>
        <div className='container'>
            <div className='row mt-5 pt-5'>
                <div className='col-md-6 col-sm-12'>
                    <div>
                        <span className={`global-text-primary fs-3 fw-bold`}>
                            Create your free account
                        </span>
                        <br />
                        <span className='fs-6 global-text-tertiary'>
                            Already have an account?
                        </span>
                        &nbsp;&nbsp;
                        <span role="button" className={`${style.login} fs-6 text-white fw-bold`} onClick={() => {router.push("/login");}}>
                            Log In
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
                                <input type="text" className="form-control global-background-secondary border-0 global-text-primary p-2 lh-lg" placeholder='Username' spellCheck="false" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control global-background-secondary border-0 global-text-primary p-2 lh-lg" placeholder='Full Name' spellCheck="false" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control global-background-secondary border-0 global-text-primary p-2 lh-lg" placeholder='Password' spellCheck="false" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" style={{backgroundColor: "rgba(194,212,248,.15)"}} id="exampleCheck1" />
                                <label className="form-check-label global-text-tertiary" htmlFor="exampleCheck1">I agree to all terms & conditions.</label>
                            </div>
                            <button type="button" className="btn btn-primary text-nowrap lh-lg col-12 fw-bold">Register Now</button>
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
