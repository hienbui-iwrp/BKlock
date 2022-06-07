import React from "react";
import {
    Container,
    Image,
    Text,
    Button,
    Group,
    MediaQuery,
} from "@mantine/core";
import "../../css/homeAds.css";
import { Link } from "react-router-dom";

export default function HomeAds({ img }) {
    return (
        <Container className="home-ads-container" fluid>
            <Link to="/detail">
                <Image src={img} className="home-ads-image" fit="contain" />
            </Link>
            <Group className="home-ads-group" direction="column">
                <MediaQuery
                    query="(max-width: 1800px) and (min-width: 768px)"
                    styles={{
                        fontSize: 40,
                    }}
                >
                    <Text className="home-ads-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugiat, aliquam.
                    </Text>
                </MediaQuery>
                <Group direction="row">
                    <MediaQuery
                        query="(max-width: 768px) and (min-width: 0px)"
                        styles={{
                            transform: "scale(0.75, 0.75)",
                            marginLeft: "-6%",
                        }}
                    >
                        <Button
                            variant="outline"
                            className="home-ads-btn"
                            uppercase
                        >
                            Show more
                        </Button>
                    </MediaQuery>
                    <MediaQuery
                        query="(max-width: 768px) and (min-width: 0px)"
                        styles={{
                            transform: "scale(0.75, 0.75)",
                            marginLeft: "-12%",
                        }}
                    >
                        <Button
                            variant="outline"
                            className="home-ads-btn"
                            uppercase
                        >
                            Buy now
                        </Button>
                    </MediaQuery>
                </Group>
            </Group>
        </Container>
    );
}
