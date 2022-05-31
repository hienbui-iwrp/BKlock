import React from "react";
import "../../css/home.css";
import { Container, Text } from "@mantine/core";
import { Carousel, Thumbs, CarouselProps } from "react-responsive-carousel";

export default function Home() {
    return (
        <>
            <div className="home">
                <Container>
                    <Text>Sản phẩm bán chạy nhất</Text>
                    <Carousel
                        showArrows={true}
                        // onChange={onChange}
                        // onClickItem={onClickItem}
                        // onClickThumb={Thumbs}
                    >
                        <div>
                            <img src="https://kenh14cdn.com/2019/9/12/photo-4-15682544730301888465967.jpg" />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src="https://kenh14cdn.com/2019/9/12/photo-4-15682544730301888465967.jpg" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src="https://kenh14cdn.com/2019/9/12/photo-4-15682544730301888465967.jpg" />
                            <p className="legend">Legend 3</p>
                        </div>
                        <div>
                            <img src="https://kenh14cdn.com/2019/9/12/photo-4-15682544730301888465967.jpg" />
                            <p className="legend">Legend 4</p>
                        </div>
                    </Carousel>
                </Container>
                <Container>Sản phẩm mới nhất</Container>
            </div>
        </>
    );
}
