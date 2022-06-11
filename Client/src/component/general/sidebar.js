import React from 'react';
import { Stack, Button, Title, Affix, Anchor } from '@mantine/core';
import { Power } from "tabler-icons-react";
import '../../css/sidebar.css'


export default function SideBar({ selected }) {
    return (
        <Stack className="sidebar" justify="flex-start" spacing="xl" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}>
            <Title order={1} className="sidebar__title">BKlock</Title>
            <Anchor href="/admin/products"><Button variant="subtle" className={selected === 0 ? "sidebar__item--selected sidebar__item" : "sidebar__item"}> Product</Button></Anchor>
            <Anchor href="/admin/news"><Button variant="subtle" className={selected === 1 ? "sidebar__item--selected sidebar__item" : "sidebar__item"}> News </Button></Anchor>
            <Anchor href="/admin/member"><Button variant="subtle" className={selected === 2 ? "sidebar__item--selected sidebar__item" : "sidebar__item"}> Member</Button></Anchor>
            <Button variant="subtle" className="sidebar__item--out"><Power />Log out</Button>
        </Stack>
    );
}