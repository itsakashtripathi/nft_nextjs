import NFTCard from '../NFTCard/NFTCard'
import style from './createNFT.module.css'

export default function CreateNFT() {

    let nftDetails = {
        image: '/assets/img/nft/1.jpg',
        type: 'Featured',
        price: '0.324',
        currency: 'ETH',
        title: 'Macaw Bird',
        user: {
            image: '/assets/img/user/1.jpg',
            userName: '@creative_art',
            avatarSize: 2
        }
    }

  return (
    <>
        <div className='container'>
            <div className='row mt-5 pt-5'>
                <div className={`${style.borderStyle} col-md-8 col-sm-12 global-border-primary border border-1 border-secondary rounded py-5 px-5 mb-3`}>
                    <div>
                        <span className={`global-text-primary fs-3 fw-bold`}>
                            Create New NFT
                        </span>
                    </div>
                    <br />
                    <div>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="myfile" className='fs-6 global-text-tertiary'>Upload File</label>
                                <input type="file" id="myfile" name="myfile" className={`${style.upload} form-control global-background-secondary border-0 global-text-primary p-2 lh-lg bg-transparent`} placeholder='Choose Files' accept="image/png, image/jpg, image/gif, image/jpeg" />
                            </div>
                            <div className="mb-3">
                                <span className=''>
                                    <input type="radio" id="fixedPrice" name="price" value="Fixed Price" className="form-check-input global-cursor-pointer" style={{backgroundColor: "rgba(194,212,248,.15)"}} />
                                    &nbsp;&nbsp;
                                    <label htmlFor="fixedPrice" className="form-check-label global-text-tertiary global-cursor-pointer">Fixed Price</label>
                                </span>
                                <span className='ms-3'>
                                    <input type="radio" id="unlockPurchased" name="price" value="Unlock Purchased" className="form-check-input global-cursor-pointer" style={{backgroundColor: "rgba(194,212,248,.15)"}} />
                                    &nbsp;&nbsp;
                                    <label htmlFor="unlockPurchased" className="form-check-label global-text-tertiary global-cursor-pointer">Unlock Purchased</label>
                                </span>
                                <span className='ms-3'>
                                    <input type="radio" id="openForBids" name="price" value="Open For Bids" className="form-check-input global-cursor-pointer" style={{backgroundColor: "rgba(194,212,248,.15)"}} />
                                    &nbsp;&nbsp;
                                    <label htmlFor="openForBids" className="form-check-label global-text-tertiary global-cursor-pointer">Open For Bids</label>
                                </span>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label global-text-tertiary">Title</label>
                                <input type="text" id="title" className="form-control global-background-secondary border-0 global-text-primary p-2 lh-lg" placeholder='NFT Name' spellCheck="false" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label global-text-tertiary">Description</label>
                                <textarea id="description" name="description" className="form-control global-background-secondary border-0 global-text-primary p-2 lh-lg" placeholder='Write short description' spellCheck="false" rows="4" cols="50"></textarea>
                            </div>
                            <div className='row'>
                                <div className="mb-3 col-md-6 col-sm-12">
                                    <label htmlFor="price" className="form-label global-text-tertiary">Price</label>
                                    <input type="text" id="price" className="form-control global-background-secondary border-0 global-text-primary p-2 lh-lg" placeholder='Price' spellCheck="false" defaultValue="0.324 ETH" />
                                </div>
                                <div className="mb-3 col-md-6 col-sm-12">
                                    <label htmlFor="categories" className="form-label global-text-tertiary">Categories</label>
                                    <select name="categories" id="categories" className="form-control form-select global-background-secondary border-0 global-text-primary p-2 lh-lg global-cursor-pointer">
                                        <option defaultValue value="Art" className={`${style.dropdownItem}`}>Art</option>
                                        <option value="Cards" className={`${style.dropdownItem}`}>Cards</option>
                                        <option value="Collectibles" className={`${style.dropdownItem}`}>Collectibles</option>
                                        <option value="Domain" className={`${style.dropdownItem}`}>Domain</option>
                                        <option value="Music" className={`${style.dropdownItem}`}>Music</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="mb-3 col-md-6 col-sm-12">
                                    <label htmlFor="startingDate" className="form-label global-text-tertiary">Starting Date</label>
                                    <input type="date" id="startingDate" name="startingDate" className="form-control global-background-secondary border-0 global-text-primary p-2 lh-lg" />
                                </div>
                                <div className="mb-3 col-md-6 col-sm-12">
                                    <label htmlFor="endingDate" className="form-label global-text-tertiary">Ending Date</label>
                                    <input type="date" id="endingDate" name="endingDate" className="form-control global-background-secondary border-0 global-text-primary p-2 lh-lg" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="mb-3 col-md-4 col-sm-12">
                                    <label htmlFor="royality" className="form-label global-text-tertiary">Royality</label>
                                    <input type="text" id="royality" className="form-control global-background-secondary border-0 global-text-primary p-2 lh-lg" placeholder='5%' spellCheck="false" />
                                </div>
                                <div className="mb-3 col-md-4 col-sm-12">
                                    <label htmlFor="copies" className="form-label global-text-tertiary">No of copies</label>
                                    <input type="text" id="copies" className="form-control global-background-secondary border-0 global-text-primary p-2 lh-lg" placeholder='13' spellCheck="false" />
                                </div>
                                <div className="mb-3 col-md-4 col-sm-12">
                                    <label htmlFor="size" className="form-label global-text-tertiary">Size</label>
                                    <input type="text" id="size" className="form-control global-background-secondary border-0 global-text-primary p-2 lh-lg" placeholder='20 MB' spellCheck="false" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="mb-3 col-md-8 col-sm-12 form-check">
                                    <input type="checkbox" className="form-check-input" style={{backgroundColor: "rgba(194,212,248,.15)", marginLeft: "-10px"}} id="exampleCheck1" defaultChecked />
                                    &nbsp;&nbsp;
                                    <label className="form-check-label global-text-tertiary" htmlFor="exampleCheck1">I agree to all terms & conditions.</label>
                                </div>
                                <div className="mb-3 col-md-4 col-sm-12">
                                    <button type="button" className="btn btn-primary text-nowrap lh-lg col-12 fw-bold rounded-pill">Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='mb-3 col-md-4 col-sm-12'>
                    <NFTCard nftDetails={nftDetails} />
                </div>
            </div>
        </div>
    </>
  )
}
