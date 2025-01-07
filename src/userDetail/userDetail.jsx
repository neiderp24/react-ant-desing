import { Layout, Row, Col, Button, Typography } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const LandingPage = () => {
    return (
        <Layout style={{ minHeight: '80vh', padding: '20px' }}>
            <Content>
                {/* Sección principal con logo, título y descripción */}
                <Row gutter={[16, 16]} justify="center" align="middle" style={{ marginBottom: '40px' }}>
                    <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
                        <img
                            src="https://img.freepik.com/psd-gratis/logo-gradiente-abstracto_23-2150689640.jpg?t=st=1736213263~exp=1736216863~hmac=31472e525637e63f82297429d35543df513ab722b7946209c7e863fb86b2058a&w=740"
                            alt="Logo"
                            style={{ maxWidth: '60%', marginBottom: '10px' }}
                        />
                    </Col>
                    <Col xs={24} sm={16} style={{ textAlign: 'left' }}>
                        <Title level={2}>Panzofi</Title>
                        <Paragraph>
                            Panzofi es una plataforma que gestiona el acceso de usuarios y proporciona análisis
                            de su actividad. Los administradores pueden ver el tiempo de sesión y las interacciones
                            de los usuarios, mientras que los usuarios regulares acceden a una página con botones
                            interactivos que registran sus acciones.
                        </Paragraph>
                    </Col>
                </Row>

                {/* Sección de botones */}
                <Row justify="center" gutter={[16, 16]}>
                    <Col>
                        <Button type="primary" size="large">
                            Button 1
                        </Button>
                    </Col>
                    <Col>
                        <Button type="default" size="large">
                            Button 2
                        </Button>
                    </Col>
                </Row>

            </Content>
        </Layout>
    );
};

export default LandingPage;
