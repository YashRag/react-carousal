import { useState } from 'react'
import './App.css';

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

function App() {
  const [current, setCurrent] = useState(0);

const nextSlider = () =>{
  setCurrent(preValue => preValue === images.length-1 ? 0 : preValue + 1)
}

const preSlide = ()=>{
  setCurrent(preVal => preVal === 0 ? images.length - 1 : preVal - 1);
}

  return (
    <>
      <h2>Carousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={preSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlider}>
          ⮕
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
        )}
      </div>
    </>
  )
}

export default App
