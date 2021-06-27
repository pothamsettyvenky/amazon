import React from 'react'
import './Home.css'
import Product from './product'
import gloves from './2.png';
import sweeter from './sweeeter.png'
import pillow from './pillow.png'
import green from './green.png'
import teal from './teal.png'
import  blue from './blue.png'
import bed from './3.png'
import salva from './salva.png'
import black from './black.png'
import slider1 from './slider2.png'
import slider2 from './slider3.png'
import AwesomeSlider from 'react-awesome-slider';
import withAutoPlay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'
function Home() {
    const AutoPlaySlider=withAutoPlay(AwesomeSlider)
    return (
        
        <div className="main_home">
       
            <div className="home_contanier">
           
                <AutoPlaySlider className="slider"
                play={true}
                bullets={false}>
                <div
                data-src={slider1} 
                alt="" className="amazon_header"

                />
                 <div 
                data-src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/kitchen/Kitchen_Under999-1500x600._CB655159544_.jpg"
                alt="" className="amazon_header"

                />
                 <div
                data-src={slider2} 
                alt="" className="amazon_header"

                />
                </AutoPlaySlider>
                <div className="home_Rowd">
                    
                    <Product
                    id="132456220"
                     title="Amazon Brand - Solimo 100% Cotton Padded Oven Gloves Paisley,"
                        image={gloves}
                        price={329}
                        rating={3}
                    />
                  <Product title="Amazon Brand - Solimo 100% Cotton Padded Oven Gloves Paisley,"
                    id="132455525"
                        image="https://o.remove.bg/downloads/60e8eabc-6749-41fe-a128-7892bdd82b41/image-removebg-preview.png"
                        price={329}
                        rating={3}
                    />
                    
                   
                    
                </div>
                <div className="home_Rowd">
                <Product 
                id=
                "446200252"
                    title="Amazon Brand - Solimo Floral Flakes 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Blue"
                    price={799}
                    rating={4}
                    image={blue}
                />
                <Product 
                id="542101452"
                    title="Amazon Brand - Solimo Floral Foliage 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Teal"
                    price={899}
                    rating={5}
                    image={teal}
                />
             
              <Product 
              id="54554542724"
                    title="Amazon Brand - Solimo Abstract Waves 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Green"
                    price={669}
                    rating={3}
                    image={green}
                />
                    
                </div>
                <div className="home_Rowd">
                <Product 
                id="554454"
                    title="Amazon Brand - Solimo 2-Piece Premium Bed Pillow Set"
                    price={1100}
                    rating={5}
                    image={pillow}
                />
                <Product 
                id="2444"
                
                    title="Amazon Brand - Solimo Cotton Blend Table Cover for Centre Table and 4 Seater Dining Table (Halo, Maroon)"
                    price={769}
                    rating={4}
                    image={salva}
                />
                
             
                </div>
                <div className="home_Rowd">
                <Product 
                id="44544"
                    title="Amazon Brand - Solimo Microfiber Reversible Comforter, Single (Aqua Blue & Olive Green, 200 GSM)

"
                    price={1199}
                    rating={4}
                    image={bed}
                />
                 <Product 
                 id="11454456220"
                    title="HUESLAND by Ahmedabad Cotton Ultra-Plush Solid Microfibre Double Comforter, Black"
                    price={1849}
                    rating={5}
                    image={black}
                />
                <Product 
                id="1324444420"
                    title="HUESLAND by Ahmedabad Cotton Ultra-Plush Solid Microfibre Double Comforter, Black"
                    price={1063}
                    rating={4}
                    image={sweeter}
                />
                </div>
                           </div>
            
        </div>
    )
}

export default Home
