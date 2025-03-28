import './About.css'
import profile_img from '../../assets/Profile_img.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About Me</h1>
                <img src="" alt='' />
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={profile_img} alt='' style={{ width: '30vh', height: '45vh' }}/>
                </div>
                <div className='about-right'>
                    <div className="about-para">
                        <p>I have completed my graduation in CSE and am currently working in web development. I have strong knowledge of React.js, Bootstrap 5, and a basic understanding of PHP, Node.js and Express.js. I love what I do and always enjoy my work.</p>
                        <p>I always try to staying updated with the latest technology.</p>
                    </div>
                    
                    <div className='about-skills'>
                        <div className='about-skill'><p>HTML & CSS</p> <hr style={{width: "55%"}} /></div>
                        <div className='about-skill'><p>Java Script</p> <hr style={{width: "70%"}} /></div>
                        <div className='about-skill'><p>React JS</p> <hr style={{width: "75%"}} /></div>
                        <div className='about-skill'><p>Bootstrap</p> <hr style={{width: "65%"}} /></div>
                        <div className='about-skill'><p>NODE JS</p> <hr style={{width: "45%"}} /></div>
                        <div className='about-skill'><p>PHP</p> <hr style={{width: "40%"}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>6+</h1>
                    <p>Month OF Experiance</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>Happy Client</p>
                </div>
            </div>
        </div>
    )
}

export default About