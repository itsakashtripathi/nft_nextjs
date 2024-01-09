import style from './passwordReset.module.css'
import Image from 'next/image'
import { useRouter } from "next/router"

export default function PasswordReset() {

    const router = useRouter();

  return (
    <>
        <div className='container'>
            <div className='row mt-5 pt-5'>
                <div className='col-md-6 col-sm-12'>
                    <div>
                        <span className={`global-text-primary fs-3 fw-bold`}>
                            Reset Password
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
                            <button type="submit" className="btn btn-warning lh-lg col-12 fw-bold mb-3">Reset Password</button>
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
