import img from '../assets/images/image-web-3-desktop.jpg'
import imgMobile from '../assets/images/image-web-3-mobile.jpg'
import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'

function MainContent(){

    return(
        <main>
            <div className="parts">
                <div className="partOne">
                    <img className='imgBig1' src={img} alt="" />
                    <img className='imgBig2' src={imgMobile} alt="" />
                    <div className="head-main">
                        <div className="head">
                            <h1>The Bright Future of Web 3.0?</h1>
                        </div>
                        <div className="paragragh">
                            <p>We did into the next evolution of the web that
                            claims to put the power of the platforms back
                            into the hands of the people. But is it really
                            fulfilling its promise?
                        </p>
                        <button>READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="partTwo">
                    <h3>New</h3>
                    <div className="box-dark">
                        <h5>Hydrogen VS Electric Cars</h5>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div><hr />
                    <div className="box-dark">
                        <h5>THe Downsides of Al Artistry</h5>
                        <p>What are the possible adverse effects of on-demand Al image generation?</p>
                    </div><hr />
                    <div className="box-dark">
                        <h5>Is VC Funding Drying Up</h5>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                </div>
            </div>
            <footer>
                <div className="box">
                    <img src={img1} alt="img1" />
                    <div className="info">
                        <span>01</span>
                        <h6>Reviving Retro PCs</h6>
                        <p>What happens when old PCs are given modern upgrades.</p>
                    </div>
                </div>
                <div className="box">
                    <img src={img2} alt="img1" />
                    <div className="info">
                        <span>02</span>
                        <h6>Top 10 Laptops of 2022</h6>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div className="box">
                    <img src={img3} alt="img1" />
                    <div className="info">
                        <span>03</span>
                        <h6>The Growth of Gaming</h6>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default MainContent