import style from './avatar.module.css'

export default function Avatar({user}) {
  return (
    <>
        <span className='global-cursor-pointer rounded-circle' style={{width: `${user.avatarSize}rem`, height: `${user.avatarSize}rem`}}>
            <img src={user.image ? user.image : '/assets/img/user/1.jpg'} className='global-cursor-pointer rounded-circle' style={{width: `${user.avatarSize}rem`, height: `${user.avatarSize}rem`}} /> 
        </span>
    </>
  )
}
