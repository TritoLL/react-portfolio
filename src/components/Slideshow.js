import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SlideshowContainer = styled.div`
    overflow: hidden;
    margin: 20px auto 0px auto;
    width: 85%;
    position: relative;

    @media (min-width: 768px) {
        width: 85%
        max-width: 85%;
    }
`;

const Slide = styled.div`
    -webkit-animation-name: fade;
    -webkit-animation-duration: 0.4s;
    animation-name: fade;
    animation-duration: 0.4s;

    @-webkit-keyframes fade {
        from {
            opacity: 0.4;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fade {
        from {
            opacity: 0.4;
        }
        to {
            opacity: 1;
        }
    }

    border: 10px solid ${(props) => props.theme.border};
    flex-direction: column;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
    }
`;

const SlideDescription = styled.p`
    padding: 10px;
    word-wrap: break-word;
    overflow: auto;
    font-size: ${(props) => props.theme.smallText * 1.5}vw;

    @media (min-width: 768px) {
        font-size: ${(props) => props.theme.smallText * 0.8}vw;
        width: 30%;
    }
`;

const SlideImage = styled.img`
    width: 100%;
    border-bottom: 10px solid ${(props) => props.theme.border};

    @media (min-width: 768px) {
        border-bottom: none;
        border-right: 10px solid ${(props) => props.theme.border};
        width: 70%;
    }
`;

const SlideTitle = styled.span`
    display: block;
    font-weight: bold;
    text-align: center;
    margin: 10px 0px;
`;

const Slideshow = ({ slideData, slideshowName }) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const changeSlide = (amount) => {
        setSlideIndex(slideIndex + amount);
    };

    useEffect(() => {
        const slides = document.querySelectorAll(`.slide-${slideshowName}`);

        if (slideIndex >= slides.length) {
            setSlideIndex(0);
            return;
        }

        if (slideIndex < 0) {
            setSlideIndex(slides.length - 1);
            return;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex].style.display = "flex";
    }, [slideIndex, slideshowName]);

    return (
        <SlideshowContainer>
            <button
                onClick={function () {
                    changeSlide(-1);
                }}
            >
                previous
            </button>
            <button
                onClick={function () {
                    changeSlide(1);
                }}
            >
                next
            </button>
            {slideData.map((slideData, index) => (
                <Slide className={`slide-${slideshowName}`} key={index}>
                    <SlideImage src={slideData.img} alt={slideData.alt} />
                    <SlideDescription>
                        <SlideTitle>{slideData.title}</SlideTitle>
                        {slideData.description}
                    </SlideDescription>
                </Slide>
            ))}
        </SlideshowContainer>
    );
};

export default Slideshow;
