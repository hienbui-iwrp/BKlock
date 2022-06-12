import React from 'react';
import { Grid, Text, Image, Container, Table, Group, Button } from '@mantine/core';
import "../../css/adminMember.css";


export default function Member() {
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const elements = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
      ];
      const rows = elements.map((element) => (
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
          <td> <Text>Hoàng</Text></td>
          <td>{element.position}</td>
          <td>{element.name}</td>
          <td>{element.symbol}</td>
          <td>
                        <Group>
                            <Button variant="filled">Sửa</Button>
                            <Button variant="filled" color="yellow">Cấm</Button>
                            <Button variant="filled" color="red">Xóa</Button>
                        </Group>  
          </td>
        </tr>
      ));

    // const [activePage, setPage] = React.useState(1);
    // const maxItemPerPage = 6;
    // const total = Math.ceil(arr.length / maxItemPerPage);
    return (
        <Container className="detail-section-container" style={{backgroundColor:"white"}}>
            <Grid style={{}}>
                <Grid.Col className="admin-page-title">
                    <h1 style={{textAlign:"center"}}>Quản lý khách hàng</h1>
                </Grid.Col>
                <Grid.Col>
                <Table  highlightOnHover>
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
