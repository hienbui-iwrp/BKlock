import { Grid, Text, MediaQuery, Textarea, Button, Group } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import CommentCard from "./commentCard";
import "../../css/detail.css";
import React from "react";

export default function CommentSection() {
    const { height, width } = useViewportSize();
    const arr = [1, 2, 3, 4, 5];
    return (
        <Grid>
            <Grid.Col>
                <MediaQuery
                    query="(max-width: 1800px) and (min-width: 900px)"
                    styles={{
                        fontSize: 36,
                        marginLeft: 40,
                        fontWeight: 600,
                    }}
                >
                    <Text className={width < 900 ? "detail-product-name" : ""}>
                        Bình luận
                    </Text>
                </MediaQuery>
            </Grid.Col>
            <Grid.Col>
                <Textarea
                    placeholder="Bình luận của bạn"
                    label="Bình luận của bạn"
                    radius="md"
                    size="md"
                />
                <Group position="right" style={{ marginTop: 10 }}>
                    <Button>Đăng</Button>
                </Group>
            </Grid.Col>
            <Grid.Col>
                {arr.map(() => {
                    return <CommentCard />;
                })}
            </Grid.Col>
        </Grid>
    );
}
