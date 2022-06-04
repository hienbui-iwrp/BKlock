import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "@mantine/core";
import "../../css/slider.css";

export default function Slider({ type, items }) {
    let responsive;
    if (type === "homeads") {
        responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 1,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1,
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
            },
        };
    } else {
        responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4,
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
            },
        };
    }

    const CustomDot = ({ onMove, index, onClick, active }) => {
        // onMove means if dragging or swiping in progress.
        // active is provided by this lib for checking if the item is active or not.
        return (
            <li
                className={active ? "active" : "inactive"}
                onClick={() => onClick()}
            >
                <div></div>
            </li>
        );
    };

    return (
        <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            autoPlay
            centerMode={false}
            className={type === "homeads" ? "home-ads-slider" : ""}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass={type === "homeads" ? "home-ads-slider-item" : ""}
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots={type === "product" || type == "image" ? false : true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            customDot={<CustomDot />}
            customTransition="transform 0.5s ease-in-out"
        >
            {items.map((item) => {
                return type === "image" ? (
                    <Image
                        src={item}
                        alt="img"
                        fit="contain"
                        height={80}
                        style={{ border: "1px solid black", margin: 5 }}
                    ></Image>
                ) : (
                    item
                );
            })}
        </Carousel>
    );
}
