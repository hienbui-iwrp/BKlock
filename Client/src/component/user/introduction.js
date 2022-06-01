import React from 'react';
import '../../css/intro.css';
import { MantineProvider, Grid, Container, Stack, Title, Text } from '@mantine/core';
import { useState } from 'react';


export default function Introduction() {
    const [selected, setSelected] = useState(0);

    return (
        <MantineProvider theme={{ colorScheme: 'dark' }}
            defaultProps={{
                Container: {
                    sizes: {
                        xs: 540,
                        sm: 720,
                        md: 960,
                        lg: 1140,
                        xl: 1320,
                    },
                },
            }}>
            <Container size="85%" px="xs" style={{ marginTop: "80px", marginBottom: "80px" }}>
                <Grid gutter={0} column={12} justify="center" className="intro">
                    <Grid.Col xs={12} sm={3} md={3} lg={3} xl={3} className="intro__side-bar">
                        <Container size="85%" className="intro__body">
                            <Stack >
                                <Text size='lg' Text className={`side-bar__item ${selected === 0 && 'side-bar__item__selected'}`}
                                    onClick={() => setSelected(0)}
                                >Giới thiệu công ty</Text>
                                <Text size='lg' className={`side-bar__item ${selected === 1 && 'side-bar__item__selected'}`}
                                    onClick={() => setSelected(1)}
                                >Chính sách bảo hành</Text>
                                <Text size='lg' className={`side-bar__item ${selected === 2 && 'side-bar__item__selected'}`}
                                    onClick={() => setSelected(2)}
                                >Chương trình khuyến mãi</Text>
                                <Text size='lg' className={`side-bar__item ${selected === 3 && 'side-bar__item__selected'}`}
                                    onClick={() => setSelected(3)}
                                >Một số tiêu chuẩn sản phẩm</Text>
                                <Text size='lg' className={`side-bar__item ${selected === 4 && 'side-bar__item__selected'}`}
                                    onClick={() => setSelected(4)}
                                >Chính sách giao hàng</Text>
                            </Stack>
                        </Container>
                    </Grid.Col>
                    <Grid.Col xs={12} sm={9} md={9} lg={9} xl={9} className="intro__content">
                        {selected === 0 && <Intro />}
                        {selected === 1 && <Warant />}
                        {selected === 2 && <Promotion />}
                        {selected === 3 && <Quality />}
                        {selected === 4 && <Policy />}
                    </Grid.Col>
                </Grid>
            </Container>
        </MantineProvider >

    )
}

function Intro() {
    return (
        <Container size="90%" className="intro__body">
            <Stack spacing="xl">
                <Title order={1}>Công ty trách nhiệm hữu hạn 4 thành viên</Title>
                <Stack spacing="xs">
                    <Text size="lg"> <b>Địa chỉ:</b> Việt Nam</Text>
                    <Text size="lg"> <b>Số điện thoại:</b> 0911435765</Text>
                    <Text size="lg"> <b>Email:</b> anh.nguyen.doivakhat@hcmut.edu.vn</Text>
                </Stack>
                <Text size="md">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.h
                </Text>
            </Stack>
        </Container>
    )
}

function Warant() {
    return (
        <>
        </>
    )
}

function Promotion() {
    return (
        <>
        </>
    )
}

function Quality() {
    return (
        <>
        </>
    )
}

function Policy() {
    return (
        <>
        </>
    )
}