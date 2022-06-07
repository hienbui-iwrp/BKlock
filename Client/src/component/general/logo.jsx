import React from "react";
import { Link } from "react-router-dom";
import { Button, Text } from "@mantine/core";
import { SiClockify } from "react-icons/si";

export default function Logo({ classname }) {
    return (
        <Link to="/">
            <Button color="gray" radius="xs" uppercase className={classname}>
                <Text weight={700} className={classname + "-text"}>
                    B<SiClockify />
                    lock
                </Text>
            </Button>
        </Link>
    );
}
