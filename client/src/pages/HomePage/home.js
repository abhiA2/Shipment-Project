import React from 'react';
import HeroImage from '../../Images/Home/home-heroImage.jpg';
import classes from './home.module.css';
import SimpleImageSlider from "react-simple-image-slider";
import Slider1 from '../../Images/Home/slider1.jpg';
import Slider2 from '../../Images/Home/slider2.jpg';
import Slider3 from '../../Images/Home/slider3.jpg';



const sliderImages = [
    { url: Slider1 },
    { url: Slider2 },
    { url: Slider3 }
]
const Home = () => {
    return (
        <>
            <section>
                <div>
                    <h1>
                        Welcome to the Home Page
                    </h1>
                    <img src={HeroImage} className={classes.heroImage} alt='hero_image' />
                </div>
                <div>
                    <h4>We offer a diverse range of transportation services from project cargo to international transportation and domestic retail distribution and delivery.</h4>
                </div>
            </section>
            <section>

                <div className={classes.home_imageSlider}>
                    <SimpleImageSlider
                        width={300}
                        height={400}
                        images={sliderImages}
                        showBullets={true}
                        showNavs={true}
                    />
                </div>
            </section>
        </>
    )
}

export default Home;