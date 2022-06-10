import {
    Badge,
    Button,
    Grid,
    Group,
    Image,
    Text,
    Tooltip,
    Checkbox,
} from "@mantine/core";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import React from "react";
import "../../css/cart.css";

export default function CartCard({
    img,
    name,
    price,
    quantity,
    brand,
    setTotal,
    payment,
}) {
    const [count, setCount] = React.useState(quantity);
    const [totalLocal, setTotalLocal] = React.useState(0);
    const [checked, setChecked] = React.useState(false);
    const [tooltip1, setTooltip1] = React.useState(false);
    const [tooltip2, setTooltip2] = React.useState(false);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        count > 0 ? setCount(count - 1) : setCount(0);
    };

    React.useEffect(() => {
        setTotal((money) => money + count * price - totalLocal);
        setTotalLocal(count * price);
    }, [count]);

    return (
        <Grid className="cart-card-container" align="center">
            <Grid.Col xl={2} lg={2} md={2} className="cart-card-img-container">
                <Image
                    src={img}
                    className="cart-card-img"
                    height="25vh"
                    width="auto"
                    fit="contain"
                />
            </Grid.Col>
            <Grid.Col xl={3} lg={3} md={3}>
                <Grid className="cart-card-product-container">
                    <Grid.Col>
                        <Badge size="lg" color="red">
                            {brand}
                        </Badge>
                    </Grid.Col>
                    <Grid.Col>
                        <Text weight={600} size="xl">
                            {name}
                        </Text>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <Grid.Col xl={2} lg={2} md={2}>
                <Text weight={600} size="lg">
                    Số lượng
                </Text>
                <Group direction="row" className="cart-card-quantity-container">
                    <Text weight={600} size="lg">
                        {count}
                    </Text>
                    {!payment ? (
                        <Group direction="column" align="center">
                            <Button
                                onClick={() => handleIncrement()}
                                variant="light"
                                color="dark"
                                size="xs"
                            >
                                <BiUpArrow />
                            </Button>
                            <Button
                                onClick={() => handleDecrement()}
                                variant="light"
                                color="dark"
                                size="xs"
                            >
                                <BiDownArrow />
                            </Button>
                        </Group>
                    ) : null}
                </Group>
            </Grid.Col>
            <Grid.Col xl={3} lg={3} md={3}>
                <Group direction="column">
                    <Text weight={500} color="red" align="right" size="xl">
                        Giá: <b>${price}</b>
                    </Text>
                    <Text weight={500} color="red" align="right" size="xl">
                        Thành tiền: <b>${totalLocal}</b>
                    </Text>
                </Group>
            </Grid.Col>
            <Grid.Col xl={2} lg={2} md={2}>
                {!payment ? (
                    <Group direction="column">
                        {!checked ? (
                            <Tooltip label="Xác nhận" opened={tooltip1}>
                                <Button
                                    color="green"
                                    variant="subtle"
                                    className="cart-card-btn-check"
                                    onMouseEnter={() => setTooltip1(true)}
                                    onMouseLeave={() => setTooltip1(false)}
                                    onClick={() => setChecked(true)}
                                >
                                    <AiOutlineCheckCircle size={30} />
                                </Button>
                            </Tooltip>
                        ) : (
                            <Checkbox
                                checked={true}
                                className="cart-card-checkbox"
                                color="green"
                            />
                        )}
                        <Tooltip label="Xóa" opened={tooltip2}>
                            <Button
                                color="red"
                                variant="subtle"
                                className="cart-card-btn-delete"
                                onMouseEnter={() => setTooltip2(true)}
                                onMouseLeave={() => setTooltip2(false)}
                            >
                                <AiOutlineCloseCircle size={30} />
                            </Button>
                        </Tooltip>
                    </Group>
                ) : null}
            </Grid.Col>
        </Grid>
    );
}
