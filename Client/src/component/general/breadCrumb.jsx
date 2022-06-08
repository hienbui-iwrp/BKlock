import React from "react";
import { Grid, Breadcrumbs, Anchor } from "@mantine/core";

export default function BreadCrumbs({ location, size }) {
    const anchorUtil = (location) => {
        let locations = "Home" + location.pathname;
        locations = locations.split("/");
        return locations.map((item, index) => (
            <Anchor href={item === "Home" ? "/" : item} key={index}>
                {item}
            </Anchor>
        ));
    };

    let anchors = anchorUtil(location);

    return (
        <>
            {size > 768 ? (
                <Grid.Col>
                    <Breadcrumbs style={{ marginLeft: "8%" }}>
                        {anchors}
                    </Breadcrumbs>
                </Grid.Col>
            ) : null}
        </>
    );
}
