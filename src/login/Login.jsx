import { Form, Input, Button } from 'antd';
import axios from 'axios';

const Login = () => {
    const onFinish = async (values) => {
        try {
            const response = await axios.post('https://tu-api.com/login', values);
            console.log('Respuesta del servidor:', response.data);

            if (response.data.success) {
                alert('Inicio de sesión exitoso');
                // Redirige al usuario a otra página
            } else {
                alert('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Ocurrió un error. Por favor, intenta de nuevo.');
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: 'auto', padding: '20px' }}>
            <Form
                name="login"
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
            >
                <h2 style={{ textAlign: 'center' }}>Iniciar Sesión</h2>

                <Form.Item
                    label="Correo Electrónico"
                    name="email"
                    rules={[
                        { required: true, message: 'Por favor ingresa tu correo electrónico' },
                        { type: 'email', message: 'El correo electrónico no es válido' },
                    ]}
                >
                    <Input placeholder="Correo Electrónico" />
                </Form.Item>

                <Form.Item
                    label="Contraseña"
                    name="password"
                    rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
                >
                    <Input.Password placeholder="Contraseña" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Iniciar Sesión
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
