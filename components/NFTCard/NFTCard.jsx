import style from './nftCard.module.css'
import { BsArrowUp } from 'react-icons/bs'
import { AiOutlineHeart } from "react-icons/ai";
import { RiPulseFill } from "react-icons/ri";
import Avatar from '../utils/Avatar/Avatar';
import NFTType from '../utils/NFTType/NFTType';

export default function NFTCard({nftDetails}) {
  return (
    <>
        <div className='container rounded global-background-secondary'>
            <div className='container rounded py-4'>
                <div className='position-relative'>
                    <img src={nftDetails.image} className={`${style.nftImage} img-fluid rounded mb-2`} />
                    <NFTType type={nftDetails.type} />
                </div>
                <div className='row global-text-tertiary fs-6 mb-2'>
                    <div className='col-8'>
                        <BsArrowUp size={12} />
                        &nbsp;
                        <span style={{fontSize: "12px"}}>Floor price {nftDetails.price} {nftDetails.currency}</span>
                    </div>
                    <div className='col-4'>
                        <AiOutlineHeart size={20} className='float-end global-cursor-pointer' />
                    </div>
                </div>
                <div className='row global-text-tertiary'>
                    <div className='col-2'>
                        <Avatar user={nftDetails.user} />
                    </div>
                    <div className='col-6'>
                        <span className='fw-bold'>{nftDetails.title}</span>
                        <br />
                        <span style={{fontSize: "12px"}}>{nftDetails.user.userName}</span>
                    </div>
                    <div className='col-4'>
                        <span className='float-end' style={{fontSize: "12px"}}>Current Bid</span>
                        <br />
                        <span className='float-end fw-bold global-text-primary'>{nftDetails.price} {nftDetails.currency}</span>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-6'>
                        <button type="button" className="btn btn-primary text-nowrap rounded-pill">Place Bid</button>
                    </div>
                    <div className='col-6'>
                        <span className='float-end text-white mt-2'>
                            <span><RiPulseFill /></span>
                            &nbsp;
                            <span>Activity</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
