import React from "react";
import { Select } from "@mantine/core";
import "../../css/filterForm.css";

export default function Selects({ items, label, filters, setFilters }) {
    return (
        <Select
            data={items.map((item) => item.value)}
            placeholder={label}
            transition="pop-top-left"
            transitionDuration={1000}
            transitionTimingFunction="ease"
            onChange={(value) => setFilters([...filters, value])}
        />
    );
}
