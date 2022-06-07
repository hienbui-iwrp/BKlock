import React from "react";
import { Grid, Text, Divider, Button, Badge, ActionIcon } from "@mantine/core";
import { HiOutlineFilter, HiX } from "react-icons/hi";
import CheckBoxes from "./checkBoxGroup";
import Selects from "./multiSelect";

const prices = [
    { value: "0 - 1.000.000đ", checked: false },
    { value: "1.000.000 - 2.000.000đ", checked: false },
    { value: "2.000.000 - 3.000.000đ", checked: false },
    { value: "3.000.000 - 5.000.000đ", checked: false },
    { value: "5.000.000 - 10.000.000đ", checked: false },
    { value: "Trên 10.000.000đ", checked: false },
];
const brands = [
    { value: "Rolex", checked: false },
    { value: "Seiko", checked: false },
    { value: "Casio", checked: false },
    { value: "Citizen", checked: false },
    { value: "Fossil", checked: false },
];
const category = [
    { value: "Đồng hồ nam", checked: false },
    { value: "Đồng hồ nữ", checked: false },
    { value: "Đồng hồ trẻ em", checked: false },
];
const type = [
    { value: "Cơ - automatic", checked: false },
    { value: "Điện tử", checked: false },
    { value: "Treo tường", checked: false },
    { value: "Năng lượng mặt trời", checked: false },
];

export default function FilterForm() {
    const [filters, setFilters] = React.useState([]);
    const [unCheck, setUnCheck] = React.useState(false);
    const [badgeValue, setBadgeValue] = React.useState(null);
    const [size, setSize] = React.useState([0, 0]);

    const handleClear = () => {
        setUnCheck(true);
        setFilters([]);
    };

    const handleCloseBadge = (value) => {
        setBadgeValue(value);
        setFilters(filters.filter((ele) => ele !== value));
    };

    const RemoveButton = ({ value }) => {
        return (
            <ActionIcon
                size="xs"
                color="dark"
                radius="xl"
                variant="transparent"
                onClick={() => handleCloseBadge(value)}
            >
                <HiX />
            </ActionIcon>
        );
    };

    React.useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <Grid>
            <Grid.Col>
                <Text style={{ fontSize: 23, fontWeight: "bold" }}>
                    <HiOutlineFilter style={{ marginRight: 10 }} />
                    Lọc sản phẩm
                </Text>
                <div>
                    {filters.map((filter) => {
                        return (
                            <Badge
                                variant="outline"
                                color="dark"
                                key={filter}
                                rightSection={<RemoveButton value={filter} />}
                                size="lg"
                            >
                                {filter}
                            </Badge>
                        );
                    })}
                </div>

                {filters.length > 0 ? (
                    <Button
                        variant="outline"
                        style={{
                            marginTop: 10,
                            borderRadius: 20,
                            width: "100%",
                        }}
                        color="red"
                        onClick={() => handleClear()}
                    >
                        Clear
                    </Button>
                ) : null}
            </Grid.Col>
            {size[0] > 768 ? (
                <Grid.Col>
                    <Divider size="md" />
                </Grid.Col>
            ) : null}
            <Grid.Col xl={12} lg={12} md={6} sm={6} xs={12}>
                {size[0] > 768 ? (
                    <CheckBoxes
                        items={prices}
                        label="Mức giá"
                        filters={filters}
                        setFilters={setFilters}
                        uncheck={unCheck}
                        setUnCheck={setUnCheck}
                        badgeValue={badgeValue}
                    />
                ) : (
                    <Selects
                        items={prices}
                        label="Mức giá"
                        filters={filters}
                        setFilters={setFilters}
                    />
                )}
            </Grid.Col>
            {size[0] > 768 ? (
                <Grid.Col>
                    <Divider size="md" />
                </Grid.Col>
            ) : null}
            <Grid.Col xl={12} lg={12} md={6} sm={6} xs={12}>
                {size[0] > 768 ? (
                    <CheckBoxes
                        items={brands}
                        label="Thương hiệu"
                        filters={filters}
                        setFilters={setFilters}
                        uncheck={unCheck}
                        setUnCheck={setUnCheck}
                        badgeValue={badgeValue}
                    />
                ) : (
                    <Selects
                        items={brands}
                        label="Thương hiệu"
                        filters={filters}
                        setFilters={setFilters}
                    />
                )}
            </Grid.Col>
            {size[0] > 768 ? (
                <Grid.Col>
                    <Divider size="md" />
                </Grid.Col>
            ) : null}
            <Grid.Col xl={12} lg={12} md={6} sm={6} xs={12}>
                {size[0] > 768 ? (
                    <CheckBoxes
                        items={category}
                        label="Loại đồng hồ"
                        filters={filters}
                        setFilters={setFilters}
                        uncheck={unCheck}
                        setUnCheck={setUnCheck}
                        badgeValue={badgeValue}
                    />
                ) : (
                    <Selects
                        items={category}
                        label="Loại đồng hồ"
                        filters={filters}
                        setFilters={setFilters}
                    />
                )}
            </Grid.Col>
            {size[0] > 768 ? (
                <Grid.Col>
                    <Divider size="md" />
                </Grid.Col>
            ) : null}
            <Grid.Col xl={12} lg={12} md={6} sm={6} xs={12}>
                {size[0] > 768 ? (
                    <CheckBoxes
                        items={type}
                        label="Dòng máy"
                        filters={filters}
                        setFilters={setFilters}
                        uncheck={unCheck}
                        setUnCheck={setUnCheck}
                        badgeValue={badgeValue}
                    />
                ) : (
                    <Selects
                        items={type}
                        label="Dòng máy"
                        filters={filters}
                        setFilters={setFilters}
                    />
                )}
            </Grid.Col>
        </Grid>
    );
}
