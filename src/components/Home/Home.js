import React from 'react';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <img 
                        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Yzk3OWQ3NDUt/Yzk3OWQ3NDUt-YTVlMmNiZTgt-w1500._CB418667451_.jpg" 
                        className="home-image"
                        alt="banner"
                />
                <div className="home-row">
                    <Product 
                        id="89789878"
                        title='The Fallen Lauren Kate Best Selling Ebook of Modern Age Black Friday Offer' 
                        price={29.99} 
                        image='https://i0.wp.com/www.creativindie.com/wp-content/uploads/2013/10/fallen_lauren_kate.jpg' 
                        rating={5}
                        />
                    <Product 
                        id="98989898"
                        title='RCA M1 4.0 Unlocked Cell Phone, Dual SIM, 5MP Camera, Android 4.4, 1.3GHz (White)' 
                        price={209.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51VCP05020L._AC_US218_.jpg' 
                        rating={4}
                        />
                </div>
                <div className="home-row">
                <Product 
                        id="76787678"
                        title='BLU R1 HD - 16 GB - Black - Prime Exclusive - with Lockscreen Offers' 
                        price={99.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/416TS-ODxfL._AC_US218_.jpg' 
                        rating={3}
                        />
                    <Product 
                        id="0987654"
                        title='Celltronics Micro USB Cable,10FT Nylon Braided Tangle-free Data Sync Heavy Duty Android Charging Cable' 
                        price={29.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/61+-qmTKy8L._AC_US218_.jpg' 
                        rating={5}
                        />
                    <Product 
                        id="3423430"
                        title='Nikon Coolpix L340 20.2 MP Digital Camera' 
                        price={769.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/41d0gUpd0eL._AC_US218_.jpg' 
                        rating={3}
                        />
                </div>
                <div className="home-row">
                <Product 
                        id="44112233"
                        title='Cell Phone Camera Lens - TURATA 2 in 1 Professional HD Camera Lens Kit' 
                        price={89.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/41wyZE9sWLL._AC_US218_.jpg' 
                        rating={5}
                        />
                    <Product 
                        id="33112244"
                        title='Acer Aspire E 15 E5-575-33BM 15.6-Inch Full HD Notebook' 
                        price={790.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/41HfDkXXyeL._AC_US218_.jpg' 
                        rating={5}
                        />
                    <Product 
                        id="22113344"
                        title='Kodak PIXPRO Friendly Zoom FZ43 16 MP Digital Camera' 
                        price={345.00} 
                        image='https://images-na.ssl-images-amazon.com/images/I/41XZUouAKJL._AC_US218_.jpg' 
                        rating={5}
                        />
                    <Product 
                        id="11223344"
                        title='KINGEAR Pcam PDC001 2.7 inch TFT LCD HD Mini Digital Camera(black)' 
                        price={454.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51uKiDibbZL._AC_US218_.jpg' 
                        rating={4}
                        />
                </div>
            </div>
        </div>
    );
};

export default Home;