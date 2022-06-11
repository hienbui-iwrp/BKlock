import { Grid, Group, Avatar, Text } from "@mantine/core";
import "../../css/detail.css";
import React from "react";

export default function CommentCard() {
    return (
        <Grid className="comment-card-container">
            <Grid.Col>
                <Group direction="row">
                    <Avatar
                        src="https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg"
                        alt="avatar"
                    />
                    <Group direction="column" spacing={1}>
                        <Text>Nguyễn Văn A</Text>
                        <Text color="#cfcfcf">11-06-2022</Text>
                    </Group>
                </Group>
            </Grid.Col>
            <Grid.Col>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    facere praesentium eos quis at perspiciatis sint nobis
                    veritatis exercitationem quam!
                </Text>
            </Grid.Col>
        </Grid>
    );
}
