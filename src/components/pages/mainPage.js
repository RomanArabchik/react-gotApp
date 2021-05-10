import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './mainPage.css';

function MainPage () {
  return (
    <span className='select-error'>Please select a item in the upper right corner</span>
  )
}

// const items = [
//   {
//     src: './img/characters.jpg',
//     altText: 'Characters',
//     caption: 'Characters'
//   },
//   {
//     src: './img/houses.jpg',
//     altText: 'Houses',
//     caption: 'Houses'
//   },
//   {
//     src: './img/books.jpg',
//     altText: 'Books',
//     caption: 'Books'
//   }
// ];

// const MainPage = (props) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   }

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   }

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   }

//   const slides = items.map((item) => {
//     return (
//       <CarouselItem
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//         key={item.src}
        
//       >
//         <img src={item.src} alt={item.altText} />
//         <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
//       </CarouselItem>
//     );
//   });

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//       interval={ false }
//     >
//       <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
//       {slides}
//       <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
//       <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
//     </Carousel>
//   );
// }

export default MainPage;