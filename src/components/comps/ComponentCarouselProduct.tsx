import React, { useRef } from "react";
import ComponentProduct from "./ComponentProduct";
import iconCarouselNext from '../../assets/icon_carouselNext.svg'
import iconCarouselPrevious from '../../assets/icon_carouselPrevious.svg'


export default function ComponentCarouselProduct() {

    const carouselRef = useRef<HTMLDivElement>(null)
    
    return (

        <div style={{width: '1120px', backgroundColor: 'white', marginLeft: '80px', marginRight: '80px', marginTop: '80px'}}>
            <span style={{fontFamily: 'Work Sans', fontSize: '48px', marginLeft: '25px', fontWeight: '700'}}>Top Sellers</span>
            <div >
                <div style={{display: 'flex', width: '100%', position:'relative'}}>
                    <img src={iconCarouselPrevious} className='hoverGrow' onClick={() => {nextOnCarousel(-380)}} style={{position: 'absolute', top: '50%', left:'-25px', zIndex: '2'}}></img>
                    <div ref={carouselRef} className='carouselProducts' >
                        <ComponentProduct/>
                        <ComponentProduct/>
                        <ComponentProduct/>
                        <ComponentProduct/>
                    </div>
                    <img src={iconCarouselNext} className='hoverGrow' onClick={() => {nextOnCarousel(380)}} style={{position: 'absolute', top: '50%', right:'-25px', zIndex: '2'}} ></img>
                </div>
                <hr className="carouselHL"></hr>
            </div>
        </div>

    )

    function nextOnCarousel(val: number) {
        let scrollx = carouselRef.current?.scrollLeft
        console.log(scrollx)
        carouselRef.current?.scroll({
            top: 0,
            left: scrollx! + val,
            behavior: 'smooth'
        })
        

    }
}