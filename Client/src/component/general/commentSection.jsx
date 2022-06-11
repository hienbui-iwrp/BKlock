import { Grid, Text, MediaQuery, Textarea, Button, Group } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import CommentCard from "./commentCard";
import "../../css/detail.css";
import React from "react";
import axios from "axios";

export default function CommentSection({ id }) {
    const { height, width } = useViewportSize();
    const [comments, setComments] = React.useState([]);
    const arr = [1, 2, 3, 4, 5];
    const user = sessionStorage.getItem("userName");

    React.useEffect(() => {
        console.log(id);
        axios
            .get(`http://localhost/Server/controllers/comment/get.php?id=${id}`)
            .then((response) => {
                setComments(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

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
                {user ? (
                    <>
                        <Textarea
                            placeholder="Bình luận của bạn"
                            label="Bình luận của bạn"
                            radius="md"
                            size="md"
                        />
                        <Group position="right" style={{ marginTop: 10 }}>
                            <Button>Đăng</Button>
                        </Group>{" "}
                    </>
                ) : (
                    <Text size={width > 900 ? "xl" : "lg"} align="left">
                        Vui lòng đăng nhập để bình luận
                    </Text>
                )}
            </Grid.Col>
            <Grid.Col>
                {comments.length === 0 ? (
                    <Text
                        weight={500}
                        size={width > 900 ? "xl" : "lg"}
                        align="center"
                    >
                        Hãy là người đầu tiên bình luận về sản phẩm này !
                    </Text>
                ) : (
                    comments.map((comment) => {
                        return (
                            <CommentCard
                                name={comment.userName}
                                date={comment.comDate}
                                content={comment.content}
                            />
                        );
                    })
                )}
            </Grid.Col>
        </Grid>
    );
}
