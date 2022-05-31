import React from "react";
import { Grid, Center, Image, Text, Space } from "@mantine/core";
import "../../css/footer.css";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <Grid className="footer-grid" columns={11} justify="center">
                    <Grid.Col span={2}>
                        <Center
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "fill",
                            }}
                        >
                            <Image
                                style={{ width: 150, height: 150 }}
                                src="https://i.pinimg.com/736x/76/13/43/7613439f9864c0a5ae9ac965ca527e91.jpg"
                                alt="Logo"
                            />
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Text weight={700} size="xl">
                            Shop
                        </Text>
                        <Text weight={500} size="md">
                            Đồng hồ điện tử
                        </Text>
                        <Text weight={500} size="md">
                            Đồng hồ cổ điển
                        </Text>
                        <Text weight={500} size="md">
                            Đồng hồ treo tường
                        </Text>
                        <Text weight={500} size="md">
                            Đồng hồ hạng sang
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Text weight={700} size="xl">
                            Thông tin
                        </Text>
                        <Text weight={500} size="md">
                            Giới thiệu
                        </Text>
                        <Text weight={500} size="md">
                            Diễn đàn
                        </Text>
                        <Text weight={500} size="md">
                            Liên hệ
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Text weight={700} size="xl">
                            Hỗ trợ
                        </Text>
                        <Text weight={500} size="md">
                            FAQ
                        </Text>
                        <Text weight={500} size="md">
                            Ship và trả hàng
                        </Text>
                        <Text weight={500} size="md">
                            Chính sách bảo hành
                        </Text>
                        <Text weight={500} size="md">
                            Chính sách đổi trả
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Text weight={700} size="xl">
                            Liên hệ
                        </Text>
                        <Text weight={500} size="md">
                            Đường dây nóng: 01274748901
                        </Text>
                        <Text weight={500} size="md">
                            Email: 123@gmail.com
                        </Text>
                        <Text weight={500} size="md">
                            Địa chỉ: Đại học Bách Khoa
                        </Text>
                        <Text weight={500} size="md">
                            Facebook, Utube
                        </Text>
                    </Grid.Col>
                </Grid>
                <Text
                    color="black"
                    align="center"
                    style={{ backgroundColor: "blue" }}
                >
                    © Copyright by Elite
                </Text>
            </div>
        </>
    );
}
