import style from './main.module.css'
import Image from 'next/image'
import { BsArrowRightShort } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Main() {

    const router = useRouter();

  return (
    <>
        <div className='container'>
            <div className='row mt-5 pt-5'>
                <div className='col-md-6 col-sm-12'>
                    <p className={`${style.hero_text} global-text-primary fs-1 fw-bold`}>
                        Future of NFT.
                    </p>
                    <p className='fs-3 global-text-tertiary'>
                        It's crafted with the latest trend of design & coded with all modern approaches.
                    </p>
                    <br />
                    <button type="button" className="btn btn-primary text-nowrap rounded-pill text-white fw-bold" onClick={() => {router.push("/register");}}>Explore Now <BsArrowRightShort size={20} /></button>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <Image src="/assets/img/heroImg.png" width="700" height="500" />
                </div>
            </div>
        </div>
    </>
  )
}
