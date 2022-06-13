import React from 'react';
import { Grid, Text, Image, Container, Table, Group, Button, Title } from '@mantine/core';
import axios from 'axios';
import "../../css/adminMember.css";


export default function Member() {
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const [mems,setMems] = React.useState([]);
    const [render,setRender] = React.useState(false);
    React.useEffect(() => {
        axios
            .get(`http://localhost/Server/controllers/account/getalluser.php`)
            .then((response) => {
                if (typeof response.data !== "string") {
                    setMems(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [render]);
    const handleBan = (proid,name) => {
        if (window.confirm(`Bạn muốn cấm ${name}?`)) { 
            const data = {
                id: proid,
            };
            setRender(!render);
            console.log(JSON.stringify(data));
            axios.post("http://localhost/Server/Controllers/account/block.php", JSON.stringify(data))
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
            })
        }
    };
    const handleDelete = (proid,name) => {
        if (window.confirm(`Bạn muốn xóa ${name}?`)) { 
            const data = {
                id: proid,
            }
            setRender(!render);
            console.log(JSON.stringify(data));
            axios.post("http://localhost/Server/Controllers/account/delete.php", JSON.stringify(data))
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
            })
        }
    };
    const elements = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    ];
    const rows = mems.map((element) => (
        <tr key={element.name}>
            <td>
                <Container className='member-image-container'>
                    <Image
                        src="https://bossluxurywatch.vn/uploads/san-pham/rolex/sky-dweller/rolex-sky-dweller-42mm-326938-0005.png"
                        alt="watch"
                        height="45px"
                        width="45px"
                        fit="contain"
                    />
                </Container>
            </td>
            <td> <Text>{element.userName}</Text></td>
            <td>{element.fullName}</td>
            <td>{element.phoneNum}</td>
            <td>{element.address}</td>
            <td>
                <Group>
                    <Button variant="filled">Sửa</Button>
                    <Button variant="filled" color="yellow" onClick={()=>handleBan(element.id,element.userName)}>Cấm</Button>
                    <Button variant="filled" color="red" onClick={()=>handleDelete(element.id,element.userName)}>Xóa</Button>
                </Group>
            </td>
        </tr>
    ));

    // const [activePage, setPage] = React.useState(1);
    // const maxItemPerPage = 6;
    // const total = Math.ceil(arr.length / maxItemPerPage);
    return (
        <Container className="detail-section-container" style={{ backgroundColor: "white" }}>
            <Grid style={{}}>
                <Grid.Col className="">
                    <Group position="center" style={{ paddingBottom: "2%", margin: "2% 5%", borderBottom: "1px solid #000" }}>
                        <Title order={1} >Quản lý khách hàng </Title>
                    </Group>
                </Grid.Col>
                <Grid.Col>
                    <Table highlightOnHover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Tên tài khoản</th>
                                <th>Tên người dùng</th>
                                <th>Số điện thoại</th>
                                <th>Địa chỉ</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </Table>

                    {/* <Grid style={{ marginTop: 30 }}>
                        <Grid.Col>
                            <Grid>
                                {arr.slice((activePage - 1) * maxItemPerPage, activePage * maxItemPerPage).map(x => {
                                    return (                                     
                                        <Grid.Col key={x} 
                                            <p>hi</p>
                                        </Grid.Col>
                                    );
                                })}
                            </Grid>
                        </Grid.Col>
                    </Grid> */}
                </Grid.Col>
            </Grid>
        </Container>
    )
}
