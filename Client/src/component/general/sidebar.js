import React from 'react';
import { Stack, Button, Title, Anchor, Grid } from '@mantine/core';
import { Power } from "tabler-icons-react";
import Logo from "../general/logo";
import '../../css/sidebar.css'


export default function SideBar({ selected }) {
    return (
        <Stack className="sidebar" maxHeight justify="space-between" spacing="xl" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}>
            <Stack className="sidebar__part">
                {/* <Title order={1} className="sidebar__title">BKlock</Title> */}
                <Logo classname={"sidebar__logo"}/>
                <Anchor href="/admin"><Button variant="subtle" className={selected === 0 ? "sidebar__item--selected sidebar__item" : "sidebar__item"}> Quản lý sản phẩm</Button></Anchor>
                <Anchor href="/admin/news"><Button variant="subtle" className={selected === 1 ? "sidebar__item--selected sidebar__item" : "sidebar__item"}> Quản lý tin tức </Button></Anchor>
                <Anchor href="/admin/member"><Button variant="subtle" className={selected === 2 ? "sidebar__item--selected sidebar__item" : "sidebar__item"}> Quản lý thành viên</Button></Anchor>
            </Stack>
            <Button variant="subtle" className="sidebar__item sidebar__item--out sidebar__part"><Power />Log out</Button>
        </Stack>
    );
}