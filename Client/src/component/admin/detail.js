import "../../css/detail.css";
import React from 'react';
import {
    Container,
    Grid,
    Image,
    Text,
    MediaQuery,
    Badge,
    Group,
    List,
    Button,
    Input,
    Select
} from "@mantine/core";
import { TextInput, NumberInput, Box, Textarea, Avatar } from '@mantine/core';
import { useForm } from '@mantine/form';
import "../../css/detail.css";
import { useViewportSize } from "@mantine/hooks";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { SiCashapp } from "react-icons/si";

export default function Detail() {
    return (
        <Container className="detail-section-container" style={{ marginTop: 60 }}>
            <Grid style={{ marginTop: 60 }}>
                <Grid.Col>
                    <ProductDetail />
                </Grid.Col>
                <Grid.Col>
                    <CommentSection />
                </Grid.Col>
            </Grid>
        </Container>
    )
}

function ProductDetail() {
    const { height, width } = useViewportSize();
    const form = useForm({
        initialValues: {
            name: 'ABC',
            branch: 'rolex',
            type: 'đồng hồ nam',
            category: 'cơ-automatic',
            price: 2000000
        },
        validate: {
            name: (value) => value,
            branch: (value) => value,
            type: (value) => value,
            category: (value) => value,
            price: (value) => value,
        },
    });
    return (
        <Grid>
            <Grid.Col xl={6} lg={6} md={6} sm={6} xs={12}>
                <MediaQuery
                    query="(max-width: 1800px) and (min-width: 900px)"
                    styles={{
                        border: "1px solid #f1f1f1",
                    }}
                >
                    <Container className="detail-image-container">
                        <Image
                            src="https://bossluxurywatch.vn/uploads/san-pham/rolex/sky-dweller/rolex-sky-dweller-42mm-326938-0005.png"
                            alt="watch"
                            height="500px"
                            fit="contain"
                        />
                    </Container>
                </MediaQuery>
            </Grid.Col>
            <Grid.Col xl={6} lg={6} md={6} sm={6} xs={12}>

                <Box >
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <TextInput
                            required
                            label="Name"
                            placeholder="Input Name"
                            {...form.getInputProps('name')}
                        />
                        <Select
                            label="Branch"
                            data={[
                                { value: 'rolex', label: 'Rolex' },
                                { value: 'seiko', label: 'Seiko' },
                                { value: 'casio', label: 'Casio' },
                                { value: 'citizen', label: 'Citizen' },
                                { value: 'fossil', label: 'Fossil' },

                            ]}
                            {...form.getInputProps('branch')}
                        />

                        <Select
                            label="Type"
                            data={[
                                { value: 'đồng hồ nam', label: 'Đồng hồ nam' },
                                { value: 'đồng hồ nữ', label: 'Đồng hồ nữ' },
                                { value: 'đồng hồ trẻ em', label: 'Đồng hồ trẻ em' },

                            ]}
                            {...form.getInputProps('type')}
                        />

                        <Select
                            label="Category"
                            data={[
                                { value: 'cơ-automatic', label: 'Cơ-automatic' },
                                { value: 'điện tử', label: 'Điện tử' },
                                { value: 'treo tường', label: 'Treo tường' },
                                { value: 'năng lượng mặt trời', label: 'Năng lượng mặt trời' },

                            ]}
                            {...form.getInputProps('category')}
                        />

                        <NumberInput
                            required
                            label="Price"
                            placeholder="Input Price"
                            {...form.getInputProps('price')}
                        />


                        <Group position="right" mt="md">
                            <Button variant="outline" color="red" className="admin__delete-btn">Delete</Button>
                            <Button type="submit">Save</Button>
                        </Group>
                    </form>
                </Box>
            </Grid.Col>
        </Grid>
    );
}


function CommentSection() {
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
                {arr.map(() => {
                    return <CommentCard />;
                })}
            </Grid.Col>
        </Grid>
    );
}


function CommentCard() {
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
                    <Button variant="outline" color="red" className ="admin__delete-btn">Delete</Button>
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
