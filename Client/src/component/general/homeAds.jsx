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

export default function HomeAds({ img }) {
    return (
        <Container className="home-ads-container" fluid>
            <MediaQuery
                query="(max-width: 1800px) and (min-width: 800px)"
                styles={{
                    height: "120vh",
                }}
            >
                <Image src={img} className="home-ads-image" />
            </MediaQuery>
            <Group className="home-ads-group" direction="column">
                <MediaQuery
                    query="(max-width: 1800px) and (min-width: 800px)"
                    styles={{
                        fontSize: 40,
                    }}
                >
                    <Text className="home-ads-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugiat, aliquam.
                    </Text>
                </MediaQuery>
                <Group>
                    <Button variant="outline" className="home-ads-btn">
                        Show more
                    </Button>
                    <Button variant="outline" className="home-ads-btn">
                        Buy now
                    </Button>
                </Group>
            </Group>
        </Container>
    );
}
