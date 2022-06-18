import React from 'react';
import '../../css/intro.css';
import { MantineProvider, Grid, Container, Stack, Title, Text, Tabs, Image } from '@mantine/core';
import BreadCrumbs from "../general/breadCrumb";
import { useViewportSize } from "@mantine/hooks";
import { useLocation } from "react-router-dom";

export default function Introduction() {
    let location = useLocation();
    const { height, width } = useViewportSize();
    return (
        <>
            <Grid style={{ marginTop: "80px" }}><BreadCrumbs location={location} size={width} /></Grid>
            <MantineProvider theme={{ colorScheme: 'dark' }}
                defaultProps={{
                    Container: {
                        sizes: {
                            xs: 540,
                            sm: 720,
                            md: 960,
                            lg: 1140,
                            xl: 1320,
                        },
                    },
                }}>
                <Container size="85%" px="xs" >
                    <Grid gutter={0} column={12} justify="center" className="intro">
                        <Grid.Col style={{ marginTop: "20px" }}>
                            <Tabs variant="outline" grow={width > 900}>
                                <Tabs.Tab label="Giới thiệu công ty" ><Intro /></Tabs.Tab>
                                <Tabs.Tab label="Chính sách bảo hành" ><Warant /></Tabs.Tab>
                                <Tabs.Tab label="Chương trình khuyến mãi" ><Promotion /></Tabs.Tab>
                                <Tabs.Tab label="Một số tiêu chuẩn sản phẩm" ><Quality /></Tabs.Tab>
                                <Tabs.Tab label="Chính sách giao hàng" ><Policy /></Tabs.Tab>
                            </Tabs>
                        </Grid.Col>
                    </Grid>
                </Container>
            </MantineProvider >
        </>
    )
}

function Intro() {
    return (
        <Container size="90%" className="intro__body">
            <Stack spacing="xl">
                <Title order={1}>Công ty trách nhiệm hữu hạn 4 thành viên BClock</Title>
                <Stack spacing="xs">
                    <Text size="lg"> <b>Địa chỉ:</b> 268 Lý Thường Kiệt, Phường 14, Quận 10, TPHCM</Text>
                    <Text size="lg"> <b>Số điện thoại:</b> 0911435765</Text>
                    <Text size="lg"> <b>Email:</b> bclock@gmail.com</Text>
                </Stack>
                <Text size="md" classname="intro-content-container">
                    Là một trong những chuỗi cửa hàng phân phối đồng đồng hồ chính hãng uy tín bậc nhất trên thị trường tại Việt Nam, BClock là địa chỉ mua sắm tin tưởng của rất nhiều khách hàng, đặc biệt là những khách hàng đam mê sưu tập đồng hồ.
                    Được thành lập với sứ mệnh “chung tay đẩy lùi hàng fake”, hệ thống đồng hồ chính hãng BClock đang nỗ lực góp phần phát triển một cộng đồng sử dụng đồng hồ THẬT, mang tới những sản phẩm chất lượng cao với những ưu đãi hấp dẫn, là một trong các cửa hàng đồng hồ uy tín được nhiều người lựa chọn.
                    Không chỉ là cửa hàng đồng hồ Hà Nội được người tiêu dùng ưa chuộng, BClock đã mở rộng thêm 2 chi nhánh, trở thành shop đồng hồ uy tín TPHCM, Đà Nẵng và hướng tới mục tiêu phát triển rộng khắp các tỉnh thành.
                    Trên con đường nỗ lực đem tới cho khách hàng chất lượng sản phẩm và chất lượng dịch vụ đẳng cấp nhất, BClock đã không ngừng thay đổi, nâng cao chất lượng đội ngũ chuyên viên, đa dạng số lượng sản phẩm, nâng cấp cơ sở hạ tầng của mình, trở thành shop bán đồng hồ uy tín trên toàn quốc, phục vụ nhu cầu của cả khách trong và ngoài nước.
                    <Image src="https://feldmarwatch.com/wp-content/uploads/2020/06/slider-june-2020-store.jpg" className="intro-image" />
                </Text>
            </Stack>
        </Container>
    )
}

function Warant() {
    return (
        <>
            <Container size="90%" className="intro__body">
                <Stack spacing="xl">
                    <Title order={1}>Chính sách bảo hành</Title>
                    <Text size="md" classname="intro-content-container">
                        1) BẢO HÀNH CÓ CAM KẾT TRONG 12 THÁNG
                        <br />
                        - RIÊNG Phụ kiện có điện AVA bảo hành 3 tháng. Đồng hồ thời trang chỉ bảo hành bộ máy, không bảo hành dây, vỏ, mặt kính.
                        <br />
                        - Chỉ áp dụng cho sản phẩm chính, KHÔNG áp dụng cho phụ kiện đi kèm sản phẩm chính.
                        <br />
                        + Bảo hành trong vòng 15 ngày (tính từ ngày TGDĐ nhận máy ở trạng thái lỗi và đến ngày gọi khách hàng ra lấy lại máy đã bảo hành).
                        <br />
                        + Sản phẩm không bảo hành lại lần 2 trong 30 ngày kể từ ngày máy được bảo hành xong.
                        <br />
                        + Nếu TGDD vi phạm cam kết (bảo hành quá 15 ngày hoặc phải bảo hành lại sản phẩm lần nữa trong 30 ngày kể từ lần bảo hành trước), Khách hàng được áp dụng phương thức Hư gì đổi nấy ngay và luôn hoặc Hoàn tiền với mức phí giảm 50%.
                        <br />
                        *Từ tháng thứ 13 trở đi không áp dụng bảo hành cam kết, chỉ áp dụng bảo hành hãng (nếu có).
                        <br />
                        <br />
                        2) HƯ GÌ ĐỔI NẤY NGAY VÀ LUÔN (KHÔNG áp dụng cho Đồng hồ (ngoại trừ 3 hãng ELIO, SKMEI, SMILE KID), phụ kiện có điện)
                        <br />
                        Sản phẩm hư gì thì đổi đó (cùng model, cùng dung lượng, cùng màu sắc...) đối với sản phẩm chính và đổi tương đương đối với phụ kiện đi kèm, cụ thể:
                        <br />
                        2.1) Hư sản phẩm chính thì đổi sản phẩm chính mới
                        <br />
                        - Tháng đầu tiên kể từ ngày mua: miễn phí.
                        <br />
                        - Tháng thứ 2 đến tháng thứ 12: phí 10% giá trị hóa đơn/tháng.
                        <br />
                        (VD: tháng thứ 2 phí 10%, tháng thứ 3 phí 20%...).
                    </Text>
                </Stack>
            </Container>
        </>
    )
}

function Promotion() {
    return (
        <>
            <Container size="90%" className="intro__body">
                <Stack spacing="xl">
                    <Title order={1}>Chính sách khuyến mãi</Title>
                    <Text size="md" classname="intro-content-container">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, reprehenderit aliquid veritatis ex quos quam quis dolorem consequuntur repellat ipsum, eos aspernatur illo hic! Quae accusamus facilis, alias commodi eius quaerat suscipit sapiente saepe iure ex nisi et animi totam, veniam tempora corrupti vero nostrum. Provident tempora necessitatibus enim earum vero dolores officiis, amet impedit ullam sint unde numquam temporibus, officia expedita illum sapiente corrupti voluptas. Cupiditate beatae, delectus ad unde autem tempore culpa esse qui dicta nihil fuga dolorum harum repellendus, sit sint cumque, id aliquid a! Reprehenderit animi vel officiis voluptas asperiores iure aperiam perferendis ex fuga! Quod corrupti repellat deleniti autem quasi earum suscipit dolore sapiente cumque nisi, consectetur laboriosam eveniet ab laborum voluptates asperiores sed facere eius obcaecati ipsa placeat expedita! Cupiditate, eius! Consectetur aperiam molestias officiis culpa, voluptatum ex, eligendi minima assumenda sunt doloremque quae ut, magni itaque! Magnam labore excepturi sit asperiores, possimus quae quia at nemo odit maxime tempora enim similique veritatis repellendus numquam ab, ut, distinctio eaque quisquam voluptas eligendi autem accusantium deleniti! Sed error reprehenderit sequi, voluptates placeat ratione aspernatur aperiam itaque, quaerat voluptatem ex distinctio exercitationem facilis consequatur! Eos nihil, vel aliquid unde incidunt autem sapiente, voluptate consectetur, architecto vero soluta rerum voluptas. Veniam aliquam magnam nisi sed at optio praesentium odit tempore ex molestiae quos repudiandae libero non ipsam, itaque totam! Ea quod porro sed neque fuga atque distinctio praesentium natus impedit aliquam, ut sint odit est consequuntur velit optio ex? Similique maiores illo sit ullam saepe deserunt atque distinctio? Qui quo iste ut ea repellendus officia fugiat reprehenderit, similique ipsum labore pariatur quisquam deleniti, nihil quibusdam repellat tempora distinctio voluptatum maiores unde provident libero. Sequi voluptas illo quaerat?
                    </Text>
                </Stack>
            </Container>
        </>
    )
}

function Quality() {
    return (
        <>
            <Container size="90%" className="intro__body">
                <Stack spacing="xl">
                    <Title order={1}>Tiêu chuẩn sản phẩm</Title>
                    <Text size="md" classname="intro-content-container">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero non pariatur praesentium, unde culpa vel nostrum, laudantium possimus, rem ex voluptates ut! Id corrupti autem debitis placeat aliquam nam dolor aliquid. Amet debitis atque consectetur architecto veniam officiis, unde harum, magnam, ipsa repellat voluptas deleniti saepe nihil reprehenderit molestias quae? Excepturi a cumque provident aliquid tempora soluta recusandae nesciunt dolorum fugiat eveniet tempore libero accusamus dolorem magni, esse culpa? Aliquid omnis maiores hic maxime? Nemo, praesentium! Rerum cupiditate dolor numquam, voluptas provident ducimus quibusdam molestias mollitia excepturi nesciunt minima omnis modi maxime illum voluptatem incidunt accusamus harum doloribus? Deleniti modi officiis quidem laudantium et assumenda nostrum maxime dolorum incidunt, aspernatur temporibus enim mollitia soluta quasi rem dolore. Voluptatem, velit voluptates porro dolor consequatur magnam vel nisi quae nam consequuntur amet asperiores fugiat mollitia delectus esse id magni accusantium! Optio quod commodi necessitatibus asperiores molestias eveniet omnis magni mollitia vel voluptatem, delectus impedit velit maxime ad accusamus! Minima quam expedita magni vel architecto placeat ipsam neque blanditiis totam, dignissimos soluta itaque obcaecati voluptatum, voluptates eveniet deserunt. Sapiente, repellendus aut! Ullam ducimus animi minus. Quod, dolorem repudiandae dolore, minima asperiores, aspernatur nisi minus saepe repellat animi doloremque repellendus neque esse vero. Asperiores, molestias! Eaque unde repellat voluptatum obcaecati ullam quae est doloribus dolores voluptas sequi. Explicabo eum ut consectetur, quos perspiciatis, doloribus assumenda ad provident rerum maxime quae iusto, error esse necessitatibus quam labore animi natus? Eveniet tempore, minus soluta iure harum, architecto quae, sit tenetur quis exercitationem placeat maiores fugit?
                    </Text>
                </Stack>
            </Container>
        </>
    )
}

function Policy() {
    return (
        <>
            <Container size="90%" className="intro__body">
                <Stack spacing="xl">
                    <Title order={1}>Chính sách giao hàng </Title>
                    <Text size="md" classname="intro-content-container">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus iusto expedita suscipit, ex maxime, aliquam dolorum alias magnam minima sequi reiciendis veniam modi blanditiis iure recusandae quaerat quas aut. Alias quam fugit, mollitia animi eligendi enim esse rem reiciendis laboriosam repudiandae iure distinctio porro assumenda unde cum, officiis doloremque! Dignissimos, excepturi modi incidunt dolorum repellendus, earum ipsa nulla assumenda sed esse eius a at temporibus, sit nihil aut quam recusandae laudantium dolorem nobis? Asperiores nesciunt praesentium quae nulla repellat ad ea, laudantium nam libero, dolorem aperiam aliquid corporis distinctio beatae doloribus sit minus quod ullam, architecto veritatis provident velit et tempora? Repellat, iste repudiandae labore voluptatum error ratione quos et dolore tempora sunt autem neque velit ipsam deserunt, cumque eaque illum architecto corrupti doloribus hic. Nobis quas, eligendi nihil, dolorem possimus laudantium hic natus obcaecati necessitatibus sed nam modi cumque quia eveniet atque adipisci vel qui provident corrupti pariatur deleniti eum, odio quidem. Suscipit placeat saepe culpa soluta omnis eum accusantium mollitia ullam nam aut autem distinctio harum molestias blanditiis animi deserunt dolorum tempore, in ea voluptas. Ducimus ratione vero culpa assumenda voluptates asperiores iste optio enim maiores error! Deleniti voluptates inventore reprehenderit esse molestias nesciunt explicabo ad nam tenetur, dolor suscipit non qui quam autem possimus atque, ut, adipisci voluptatibus ducimus obcaecati? Voluptate animi dolor praesentium expedita optio repellat ipsa, inventore, labore eum ea voluptates eius. Odio ipsa rem veritatis totam aperiam officia dicta quisquam aspernatur sapiente sunt molestiae hic qui labore adipisci, ratione quam unde ullam nesciunt repudiandae quia odit eligendi eveniet similique? Sequi, error. Libero eaque excepturi iste eos sunt blanditiis non, error quos aperiam, odit numquam distinctio et natus esse dolor tempora officia porro obcaecati nisi. Cumque facere nostrum, dolorem error, velit iusto mollitia aut distinctio consectetur ullam deserunt est saepe rem nemo exercitationem aliquid aspernatur?
                    </Text>
                </Stack>
            </Container>
        </>
    )
}