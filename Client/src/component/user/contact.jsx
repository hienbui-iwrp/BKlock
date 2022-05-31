import React from "react";
import "../../css/contact.css";
import { Text, Input, Button, Textarea, Container, Space } from "@mantine/core";

export default function Contact() {
    return (
        <>
            <div className="contact">
                <Space h="xl" />
                <div className="contact1">
                    <Container>
                        <Text>Email:</Text>
                        <Space h="xs" />
                        <Input placeholder="123@gmail.com" />
                    </Container>
                    <Container>
                        <Text>Số điện thoại:</Text>
                        <Space h="xs" />
                        <Input placeholder="0123456789" />
                    </Container>
                </div>
                <Space h="xl" />
                <div className="contact1">
                    <Container>
                        <Text>Tên:</Text>
                        <Space h="xs" />
                        <Input placeholder="Nguyễn Văn A" />
                    </Container>
                    <Container>
                        <Text>Địa chỉ:</Text>
                        <Space h="xs" />
                        <Input placeholder="268 Lý Thường Kiệt, Phường 14, Quận 10, TPHCM" />
                    </Container>
                </div>
                <Space h="xl" />
                <div className="contact2">
                    <Container>
                        <Text>Nội dung:</Text>
                        <Space h="xs" />
                        <Textarea
                            placeholder="Mặt hàng này mlem mlem quá"
                            required
                        />
                    </Container>
                </div>
                <Space h="xl" />
                <Button size="md" color="gray">
                    Gửi
                </Button>
                <Space h="xl" />
            </div>
        </>
    );
}
