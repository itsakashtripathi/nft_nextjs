import style from './nftType.module.css'

export default function NFTType({type}) {
  return (
    <>
        <span className="badge rounded-pill bg-dark m-2 py-1 position-absolute top-0 start-0">
            <img src='/assets/img/utils/fire.png' />
            &nbsp;&nbsp;
            {type}
        </span>
    </>
  )
}
