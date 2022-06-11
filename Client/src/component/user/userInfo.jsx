import React from "react";
import {
    TextInput,
    Button,
    Container,
    PasswordInput,
    Grid,
    Space,
    Text,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import BreadCrumbs from "../general/breadCrumb";
import { useLocation } from "react-router-dom";

export default function UserInfo() {
    const { height, width } = useViewportSize();
    let location = useLocation();

    return (
        <Grid style={{ marginTop: 60 }}>
            <BreadCrumbs location={location} size={width} />
            <Grid.Col>
                <Container mx="auto" className="form-signin-container">
                    <Text
                        style={
                            width > 768 ? { fontSize: 34 } : { fontSize: 24 }
                        }
                        weight={500}
                    >
                        Thông tin của bạn
                    </Text>
                    <Space h="md" />
                    <form>
                        <TextInput
                            label="Tài khoản"
                            placeholder="username"
                            className="form-username-input"
                            value={sessionStorage.getItem("userName")}
                        />
                        <Space h="md" />
                        <PasswordInput
                            label="Mật khẩu"
                            placeholder="password"
                            className="form-password-input"
                            value={sessionStorage.getItem("password")}
                            disabled
                            onPaste={(e) => {
                                e.preventDefault();
                                return false;
                            }}
                            onCopy={(e) => {
                                e.preventDefault();
                                return false;
                            }}
                        />
                        <Space h="md" />
                        <TextInput
                            label="Tên"
                            placeholder="Tên của bạn"
                            className="form-username-input"
                            value={
                                sessionStorage.getItem("fullName") === "null"
                                    ? ""
                                    : sessionStorage.getItem("fullName")
                            }
                        />
                        <Space h="md" />
                        <TextInput
                            label="Địa chỉ"
                            placeholder="Địa chỉ"
                            className="form-password-input"
                            value={
                                sessionStorage.getItem("address") === "null"
                                    ? ""
                                    : sessionStorage.getItem("address")
                            }
                        />
                        <Space h="md" />
                        <TextInput
                            label="Số điện thoại"
                            placeholder="số điện thoại"
                            className="form-username-input"
                            value={sessionStorage.getItem("phoneNum")}
                        />

                        <Space h="md" />
                        <Button
                            type="submit"
                            color="dark"
                            className="form-signin-submit-btn"
                        >
                            Cập nhật
                        </Button>
                        <Space h="sm" />
                    </form>
                </Container>
            </Grid.Col>
        </Grid>
    );
}
