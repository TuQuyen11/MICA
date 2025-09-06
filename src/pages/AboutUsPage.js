import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Section from 'components/Section';
import { Accordion, Col, Container, Row, Table } from 'react-bootstrap';

const renderTable = (infoArr, position = true) => (
    <Table
        className="table"
        striped
        responsive
    >
        <thead>
            <tr>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Học hàm, học vị</th>
                <th>Cơ quan công tác</th>
                {position && <th>Chức vụ</th>}
            </tr>
        </thead>
        <tbody>
            {infoArr.map((person, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{person.name}</td>
                    <td>{person.degree}</td>
                    <td>{person.workplace}</td>
                    {position && <td>{person.position}</td>}
                </tr>
            ))}
        </tbody>
    </Table>
);

// Ban chap hanh
const firstTable = [
    {
        name: 'Trần Viết An',
        degree: 'PGS.TS.BS',
        workplace: 'Trường Đại học Y Dược Cần Thơ',
    },
    {
        name: 'Trần Quỳnh An',
        degree: 'BSCKI',
        workplace: 'BV Đa khoa Thanh Vũ Medic Bạc Liêu',
    },
    {
        name: 'Huỳnh Quốc Bình',
        degree: 'BSCKII',
        workplace: 'BV Tim Mạch An Giang',
    },
    {
        name: 'Nguyễn Đức Chỉnh',
        degree: 'BSCKI',
        workplace: 'BV Đa khoa Quốc tế S.I.S Cần Thơ',
    },
    {
        name: 'Lê Văn Cường',
        degree: 'BSCKII',
        workplace: 'BV Đa Khoa TP Cần Thơ',
    },
    {
        name: 'Nguyễn Mạnh Cường',
        degree: 'BSCKII',
        workplace: 'BV Đa khoa Quốc tế S.I.S Cần Thơ',
    },
    {
        name: 'Đinh Minh Đức',
        degree: 'BSCKII',
        workplace: 'BV Đa khoa tỉnh Đồng Tháp',
    },
    {
        name: 'Nguyễn Văn Hoàng',
        degree: 'TS.BS',
        workplace: 'BV Đa khoa tỉnh Long An',
    },
    {
        name: 'Phan Thanh Hơn',
        degree: 'BSCKII',
        workplace: 'BV Quân Y 121',
    },
    {
        name: 'Huỳnh Thanh Hữu',
        degree: 'BSCKII',
        workplace: 'BV Đa khoa tỉnh Vĩnh Long',
    },
    {
        name: 'Nguyễn Duy Khuê',
        degree: 'ThSBS',
        workplace: 'BV Đại học Y Dược Cần Thơ',
    },
    {
        name: 'Nguyễn Duy Khương',
        degree: 'BSCKII',
        workplace: 'BV Đại học Y Dược Cần Thơ',
    },
    {
        name: 'Nguyễn Hữu Nghĩa',
        degree: 'BSCKI',
        workplace: 'BV Tim Mạch An Giang',
    },
    {
        name: 'Nguyễn Hữu Nghĩa',
        degree: 'BSCKI',
        workplace: 'BV Đa khoa Khu vực tỉnh An Giang',
    },
    {
        name: 'Nguyễn Văn Nhiệm',
        degree: 'BSCKII',
        workplace: 'BV Đa khoa Trung ương Cần Thơ',
    },
    {
        name: 'Phạm Thanh Phong',
        degree: 'BSCKII',
        workplace: 'BV Đa khoa Trung ương Cần Thơ',
    },
    {
        name: 'Trần Kim Sơn',
        degree: 'PGS.TS.BS',
        workplace: 'BV Đại học Y Dược Cần Thơ',
    },
    {
        name: 'Trịnh Thanh Tâm',
        degree: 'BSCKII',
        workplace: 'BV Tim mạch TP Cần Thơ',
    },
    {
        name: 'Nguyễn Hữu Thái',
        degree: 'BSCKII',
        workplace: 'BV Hoàn Mỹ Cửu Long',
    },
    {
        name: 'Trần Hữu Thế',
        degree: 'TS.BS',
        workplace: 'BV Đa khoa tỉnh Tiền Giang',
    },
    {
        name: 'Lê Mộng Toàn',
        degree: 'BSCKII',
        workplace: 'BV Nguyễn Đình Chiểu',
    },
    {
        name: 'Trương Tú Trạch',
        degree: 'TS.BS',
        workplace: 'BV Đa khoa tỉnh Sóc Trăng',
    },
    {
        name: 'Phạm Huỳnh Minh Trí',
        degree: 'ThSBS',
        workplace: 'BV Đa khoa Trung tâm An Giang',
    },
    {
        name: 'Hồng Minh Triết',
        degree: 'BSCKII',
        workplace: 'BV Đa khoa tỉnh Hậu Giang',
    },
    {
        name: 'Trần Văn Triệu',
        degree: 'BSCKII',
        workplace: 'BV Đa khoa Trung ương Cần Thơ',
    },
    {
        name: 'Lý Ích Trung',
        degree: 'BSCKII',
        workplace: 'BV Chợ Rẫy',
    },
    {
        name: 'Võ Thành Trung',
        degree: 'BSCKI',
        workplace: 'BV Đa khoa tỉnh Trà Vinh',
    },
    {
        name: 'Lê Quang Tuấn',
        degree: 'ThSBS',
        workplace: 'BV Đa khoa Cà Mau',
    },
    {
        name: 'Đoàn Thanh Tuấn',
        degree: 'BSCKII',
        workplace: 'BV Đa Khoa TP Cần Thơ',
    },
    {
        name: 'Vũ Hoàng Vũ',
        degree: 'TS.BS',
        workplace: 'BV Đại học Y Dược TPHCM',
    },
];

// Ban lanh dao, ban thuong vu
const secondTable = [
    {
        name: 'Trần Viết An',
        degree: 'PGS.TS.BS',
        workplace: 'Trường Đại học Y Dược Cần Thơ',
    },
    {
        name: 'Huỳnh Quốc Bình',
        degree: 'BSCKII',
        workplace: 'BV Tim Mạch An Giang',
    },
    {
        name: 'Nguyễn Duy Khương',
        degree: 'BSCKII',
        workplace: 'BV Đại học Y Dược Cần Thơ',
    },
    {
        name: 'Trương Tú Trạch',
        degree: 'TS.BS',
        workplace: 'BV Đa khoa tỉnh Sóc Trăng',
    },
    {
        name: 'Trần Văn Triệu',
        degree: 'BSCKII',
        workplace: 'BV Đa khoa Trung ương Cần Thơ',
    },
    {
        name: 'Lý Ích Trung',
        degree: 'BSCKII',
        workplace: 'BV Chợ Rẫy',
    },
    {
        name: 'Vũ Hoàng Vũ',
        degree: 'TS.BS',
        workplace: 'BV Đại học Y Dược TPHCM',
    },
];

// Ban kiem tra
const thirdTable = [
    {
        name: 'Huỳnh Thanh Hữu',
        degree: 'BSCKII',
        workplace: 'BV Đa khoa tỉnh Vĩnh Long',
        position: 'Trưởng ban',
    },
    {
        name: 'Nguyễn Hữu Thái',
        degree: 'BSCKII',
        workplace: 'BV Hoàn Mỹ Cửu Long',
        position: 'Thành viên',
    },
    {
        name: 'Võ Thành Trung',
        degree: 'BSCKI',
        workplace: 'BV Đa khoa tỉnh Trà Vinh',
        position: 'Thành viên',
    },
];

// Ban thu ky
const fourthTable = [
    {
        name: 'Huỳnh Thanh Hữu',
        degree: 'BSCKII',
        workplace: 'BV Đa khoa tỉnh Vĩnh Long',
        position: 'Trưởng ban',
    },
    {
        name: 'Nguyễn Hữu Thái',
        degree: 'BSCKII',
        workplace: 'BV Hoàn Mỹ Cửu Long',
        position: 'Thành viên',
    },
    {
        name: 'Võ Thành Trung',
        degree: 'BSCKI',
        workplace: 'BV Đa khoa tỉnh Trà Vinh',
        position: 'Thành viên',
    },
];

// Ban dao tao
const fifthTable = [
    {
        name: 'Trần Kim Sơn',
        degree: 'PGS.TS.BS',
        workplace: 'BV Đại học Y Dược Cần Thơ',
        position: 'Trưởng ban',
    },
    {
        name: 'Trần Hữu Thế',
        degree: 'TS.BS',
        workplace: 'BV Đa khoa tỉnh Tiền Giang',
        position: 'Thành viên',
    },
    {
        name: 'Đinh Minh Đức',
        degree: 'BSCKII',
        workplace: 'BV Đa khoa tỉnh Đồng Tháp',
        position: 'Thành viên',
    },
];

// Ban nghien cuu khoa hoc
const sixthTable = [
    {
        name: 'Trịnh Thanh Tâm',
        degree: 'BSCKII',
        workplace: 'BV Tim mạch TP Cần Thơ',
        position: 'Trưởng ban',
    },
    {
        name: 'Lê Văn Cường',
        degree: 'BSCKII',
        workplace: 'BV Đa Khoa TP Cần Thơ',
        position: 'Thành viên',
    },
    {
        name: 'Nguyễn Văn Hoàng',
        degree: 'TS.BS',
        workplace: 'BV Đa khoa tỉnh Long An',
        position: 'Thành viên',
    },
];

// Ban phap che
const seventhTable = [
    {
        name: 'Lê Mộng Toàn',
        degree: 'BSCKII',
        workplace: 'BV Nguyễn Đình Chiểu',
        position: 'Trưởng ban',
    },
    {
        name: 'Phan Thanh Hơn',
        degree: 'BSCKII',
        workplace: 'BV Quân Y 121',
        position: 'Thành viên',
    },
    {
        name: 'Hồng Minh Triết',
        degree: 'BSCKII',
        workplace: 'BV Đa khoa tỉnh Hậu Giang',
        position: 'Thành viên',
    },
];

// Ban doi ngoai
const eighthTable = [
    ({
        name: 'Nguyễn Đức Chỉnh',
        degree: 'BSCKI',
        workplace: 'BV Đa khoa Quốc tế S.I.S Cần Thơ',
        position: 'Trưởng ban',
    },
    {
        name: 'Đoàn Thanh Tuấn',
        degree: 'BSCKII',
        workplace: 'BV Đa Khoa TP Cần Thơ',
        position: 'Thành viên',
    },
    {
        name: 'Nguyễn Hữu Nghĩa',
        degree: 'BSCKI',
        workplace: 'BV Đa khoa Khu vực tỉnh An Giang',
        position: 'Thành viên',
    }),
];

// Ban phuc vu cong dong
const ninthTable = [
    {
        name: 'Nguyễn Duy Khuê',
        degree: 'ThSBS',
        workplace: 'BV Đại học Y Dược Cần Thơ',
        position: 'Trưởng ban',
    },
    {
        name: 'Trần Quỳnh An',
        degree: 'BSCKI',
        workplace: 'BV Đa khoa Thanh Vũ Medic Bạc Liêu',
        position: 'Thành viên',
    },
    {
        name: 'Lê Quang Tuấn',
        degree: 'ThSBS',
        workplace: 'BV Đa khoa Cà Mau',
        position: 'Thành viên',
    },
];

// Ban tai chinh
const tenthTable = [
    {
        name: 'Nguyễn Mạnh Cường',
        degree: 'ThSBS',
        workplace: 'BV Đa khoa Quốc tế S.I.S Cần Thơ',
        position: 'Trưởng ban',
    },
    {
        name: 'Phạm Huỳnh Minh Trí',
        degree: 'ThSBS',
        workplace: 'BV Đa khoa Trung tâm An Giang',
        position: 'Thành viên',
    },
];

const AboutUsPage = () => {
    return (
        <>
            <Header />
            <Section
                scheme="white"
                paddingVertical="pt-5"
            >
                <Container>
                    <div className="page-title">Về MICA</div>
                    <div className="mt-4 page-content">
                        <div className="sub-heading">Giới thiệu</div>
                        <Row>
                            <Col
                                xs={{
                                    span: 12,
                                    order: 2,
                                }}
                                lg={{
                                    span: 8,
                                    order: 1,
                                }}
                            >
                                <div className="mt-2">
                                    Chi hội Tim mạch Can thiệp Mekong (MICA) là
                                    một tổ chức chuyên môn phi lợi nhuận, quy tụ
                                    các bác sĩ, chuyên gia y tế và nhà nghiên
                                    cứu trong lĩnh vực tim mạch can thiệp. Chúng
                                    tôi cam kết nâng cao chất lượng điều trị tim
                                    mạch thông qua{' '}
                                    <b>
                                        đào tạo chuyên sâu, nghiên cứu khoa học
                                        và ứng dụng công nghệ tiên tiến
                                    </b>
                                    .
                                </div>
                                <div>
                                    Tại MICA, chúng tôi tin rằng sự đổi mới
                                    trong y học có thể giúp cải thiện đáng kể
                                    kết quả điều trị và nâng cao chất lượng sống
                                    cho bệnh nhân mắc bệnh tim mạch. Với sứ mệnh
                                    này, MICA không ngừng phát triển các chương
                                    trình đào tạo, tổ chức hội nghị khoa học và
                                    hợp tác với các tổ chức y tế trong nước và
                                    quốc tế để mang đến những giải pháp tối ưu
                                    trong lĩnh vực tim mạch can thiệp.
                                </div>
                            </Col>
                            <Col
                                xs={{
                                    span: 12,
                                    order: 1,
                                }}
                                lg={{
                                    span: 4,
                                    order: 2,
                                }}
                            >
                                <img
                                    src="/banner/about-us-intro.webp"
                                    className="w-100"
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className="page-title mt-5">Sứ mệnh và tầm nhìn</div>
                    <div className="mt-4 page-content">
                        <div className="sub-heading ">Sứ mệnh</div>
                        <ul>
                            <li>
                                Đào tạo và phát triển đội ngũ bác sĩ tim mạch có
                                chuyên môn cao, cập nhật liên tục các kỹ thuật
                                tiên tiến nhất.
                            </li>
                            <li>
                                Thực hiện nghiên cứu khoa học nhằm cải thiện
                                phương pháp chẩn đoán và điều trị bệnh lý tim
                                mạch.
                            </li>
                            <li>
                                Ứng dụng công nghệ hiện đại như trí tuệ nhân tạo
                                (AI), dữ liệu lớn (Big Data) và robot y tế trong
                                can thiệp tim mạch.
                            </li>
                            <li>
                                Hợp tác với các tổ chức y tế, bệnh viện và
                                chuyên gia trên toàn cầu để chia sẻ kiến thức và
                                kỹ thuật mới.
                            </li>
                            <li>
                                Thực hiện các chương trình nâng cao nhận thức
                                cộng đồng về phòng ngừa và điều trị bệnh tim
                                mạch.
                            </li>
                        </ul>
                        <div className="sub-heading ">Tầm nhìn</div>
                        <ul>
                            <li>
                                Trở thành trung tâm đào tạo và nghiên cứu tim
                                mạch hàng đầu tại Đông Nam Á.
                            </li>
                            <li>
                                Dẫn đầu trong việc ứng dụng công nghệ hiện đại
                                vào lĩnh vực tim mạch can thiệp.
                            </li>
                            <li>
                                Phát triển mạng lưới hợp tác với các tổ chức y
                                tế quốc tế nhằm thúc đẩy đổi mới và cải thiện
                                hiệu quả điều trị bệnh tim mạch.
                            </li>
                        </ul>
                    </div>
                    <div className="page-title mt-5">Các hoạt động chính</div>
                    <div className="mt-4 page-content">
                        MICA thực hiện nhiều chương trình và sáng kiến nhằm đạt
                        được sứ mệnh của mình:
                        <ul>
                            <li>
                                <b>Đào tạo & Phát triển nhân lực:</b> Tổ chức
                                các khóa học tim mạch từ cơ bản đến chuyên sâu,
                                cấp chứng chỉ đào tạo liên tục (CME) nhằm nâng
                                cao năng lực của các bác sĩ.
                            </li>
                            <li>
                                <b>Nghiên cứu khoa học:</b> Thực hiện nghiên cứu
                                lâm sàng, công bố các bài báo khoa học và ứng
                                dụng công nghệ mới vào thực tiễn điều trị.
                            </li>
                            <li>
                                <b>Hợp tác quốc tế:</b> Ký kết thỏa thuận hợp
                                tác với các bệnh viện, trung tâm nghiên cứu và
                                tổ chức y tế hàng đầu trên thế giới.
                            </li>
                            <li>
                                <b>Chuyển giao công nghệ:</b> Ứng dụng AI, robot
                                can thiệp và công nghệ dữ liệu lớn trong chẩn
                                đoán và điều trị bệnh tim mạch.
                            </li>
                            <li>
                                <b>Chăm sóc sức khỏe cộng đồng:</b> Tổ chức khám
                                bệnh lưu động, cung cấp dịch vụ y tế miễn phí
                                cho bệnh nhân có hoàn cảnh khó khăn, nâng cao
                                nhận thức về bệnh tim mạch qua các chiến dịch
                                truyền thông.
                            </li>
                        </ul>
                    </div>
                    <div className="page-title mt-5">Mạng lưới và đối tác</div>
                    <div className="mt-4 page-content">
                        MICA tự hào hợp tác với các bệnh viện, trường đại học và
                        tổ chức y khoa hàng đầu nhằm thúc đẩy đổi mới và nâng
                        cao chất lượng điều trị tim mạch tại Việt Nam và khu
                        vực.
                        <br />
                        Các đối tác chiến lược bao gồm:
                        <ul>
                            <li>
                                Các bệnh viện lớn chuyên về tim mạch tại Việt
                                Nam và khu vực Đông Nam Á.
                            </li>
                            <li>
                                Các trung tâm nghiên cứu y khoa và các trường
                                đại học y khoa uy tín.
                            </li>
                            <li>
                                Các tổ chức y tế quốc tế và các chuyên gia tim
                                mạch hàng đầu trên thế giới.
                            </li>
                        </ul>
                        Thông qua sự hợp tác này, MICA không chỉ tiếp cận các
                        tiến bộ y học mới nhất mà còn góp phần nâng cao chất
                        lượng điều trị tim mạch tại Việt Nam.
                    </div>
                    <div className="page-content my-5 py-3">
                        <img
                            src="/banner/banner-2000x500.webp"
                            className="w-100 mb-5"
                        />
                        <div className="page-title my-4">
                            Ban Lãnh Đạo & Hội Đồng Cố Vấn
                        </div>
                        <div>
                            MICA được dẫn dắt bởi đội ngũ chuyên gia tim mạch
                            hàng đầu:
                            <ul>
                                <li>
                                    <b>Ban Chấp Hành:</b> 30 chuyên gia đầu
                                    ngành về tim mạch.
                                </li>
                                <li>
                                    <b>Hội Đồng Cố Vấn:</b> Gồm các bác sĩ & nhà
                                    nghiên cứu hàng đầu trong nước & quốc tế.
                                </li>
                            </ul>
                        </div>
                        <div className="sub-heading">Cơ Cấu Tổ Chức</div>
                        MICA được tổ chức thành nhiều ban chuyên môn:
                        <ul>
                            <li>
                                <div className="content">
                                    <b>Ban Đào Tạo & Phát Triển Nhân Lực:</b>{' '}
                                    Phụ trách chương trình huấn luyện y khoa.
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <b>Ban Nghiên Cứu & Công Nghệ:</b> Thực hiện
                                    nghiên cứu lâm sàng & phát triển công nghệ
                                    tiên tiến.
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <b>Ban Hợp Tác Quốc Tế:</b> Mở rộng quan hệ
                                    với các tổ chức y khoa toàn cầu.
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <b>Ban Chăm Sóc Sức Khỏe Cộng Đồng:</b> Tổ
                                    chức các chương trình khám & hỗ trợ y tế
                                    miễn phí.
                                </div>
                            </li>
                        </ul>
                        <div className="sub-heading">Danh sách thành viên</div>
                        <Accordion className="custom-accordion">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Ban Chấp Hành
                                </Accordion.Header>
                                <Accordion.Body>
                                    {renderTable(firstTable, false)}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Ban Lãnh Đạo, Ban Thường Vụ
                                </Accordion.Header>
                                <Accordion.Body>
                                    {renderTable(secondTable, false)}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Ban Kiểm Tra
                                </Accordion.Header>
                                <Accordion.Body>
                                    {renderTable(thirdTable)}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Ban Thư Ký</Accordion.Header>
                                <Accordion.Body>
                                    {renderTable(fourthTable)}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Ban Đào Tạo</Accordion.Header>
                                <Accordion.Body>
                                    {renderTable(fifthTable)}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>
                                    Ban Nghiên Cứu Khoa Học
                                </Accordion.Header>
                                <Accordion.Body>
                                    {renderTable(sixthTable)}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>
                                    Ban Pháp Chế
                                </Accordion.Header>
                                <Accordion.Body>
                                    {renderTable(seventhTable)}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>
                                    Ban Đối Ngoại
                                </Accordion.Header>
                                <Accordion.Body>
                                    {renderTable(eighthTable)}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header>
                                    Ban Phục Vụ Cộng Đồng
                                </Accordion.Header>
                                <Accordion.Body>
                                    {renderTable(ninthTable)}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header>
                                    Ban Tài Chính
                                </Accordion.Header>
                                <Accordion.Body>
                                    {renderTable(tenthTable)}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <hr className="footer-divider" />
                </Container>
            </Section>
            <Footer />
        </>
    );
};

export default AboutUsPage;
