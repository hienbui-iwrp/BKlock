import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import "../../css/nav-bar.css";

export default function Navbar() {
    return (
        <>
            <div className="nav-bar">
                <Link to="/">
                    <Button color="gray" radius="xs" uppercase>
                        Trang chủ
                    </Button>
                </Link>

                <Link to="/products">
                    <Button color="gray" radius="xs" uppercase>
                        Sản phẩm
                    </Button>
                </Link>
                <Link to="/contact">
                    <Button color="gray" radius="xs" uppercase>
                        Liên hệ
                    </Button>
                </Link>

                <Link to="/introduction">
                    <Button color="gray" radius="xs" uppercase>
                        Giới thiệu
                    </Button>
                </Link>

                <Link to="/news">
                    <Button color="gray" radius="xs" uppercase>
                        Tin tức
                    </Button>
                </Link>
                <Link to="/signin">
                    <Button
                        color="gray"
                        radius="xs"
                        uppercase
                        className="nav-bar-right"
                    >
                        Đăng nhập/Đăng ký
                    </Button>
                </Link>
                <Link to="/cart">
                    <Button
                        color="gray"
                        radius="xs"
                        uppercase
                        className="nav-bar-right"
                    >
                        Giỏ hàng
                    </Button>
                </Link>
            </div>
        </>
    );
}
