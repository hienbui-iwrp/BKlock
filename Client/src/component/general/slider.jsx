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

    return (
        <Carousel
            responsive={responsive}
            showDots={true}
            autoPlay
            autoPlaySpeed={5000}
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
