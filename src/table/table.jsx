// App.jsx
import { Table } from "antd";
import { Bar, Pie } from "@ant-design/plots";
import { useState } from "react";

const App = () => {
    // Datos de la tabla
    const users = Array.from({ length: 35 }, (_, index) => ({
        key: index + 1,
        name: `Usuario ${index + 1}`,
        loginDate: `2023-12-${(index % 30) + 1}`,
        sessionTime: `${Math.floor(Math.random() * 120)} min`,
        button1Clicks: Math.floor(Math.random() * 40),
        button2Clicks: Math.floor(Math.random() * 200),
    }));

    const [data] = useState(users);

    // Configuración del gráfico de barras horizontales
    const barConfig1 = {
        data: [
            { range: "0-10", value: data.filter((d) => d.button1Clicks <= 10).length },
            { range: "11-20", value: data.filter((d) => d.button1Clicks <= 20 && d.button1Clicks > 10).length },
            { range: "21-30", value: data.filter((d) => d.button1Clicks <= 30 && d.button1Clicks > 20).length },
            { range: ">30", value: data.filter((d) => d.button1Clicks > 30).length },
        ],
        xField: "value",
        yField: "range",
        seriesField: "range",
        legend: false,
        barStyle: { strokeWidth: 5 }, // Grosor de las barras
        height: 200,
    };

    // Configuración del gráfico de pastel
    const pieConfig = {
        data: [
            { type: "Clics", value: data.filter((d) => d.button1Clicks > 0).length },
            { type: "Sin clics", value: data.filter((d) => d.button1Clicks === 0).length },
        ],
        angleField: "value",
        colorField: "type",
        radius: 0.8,
        height: 200,
    };

    // Configuración del gráfico de barras verticales
    const barConfig2 = {
        data: [
            { range: "0-50", value: data.filter((d) => d.button2Clicks <= 50).length },
            { range: "51-100", value: data.filter((d) => d.button2Clicks <= 100 && d.button2Clicks > 50).length },
            { range: "101-150", value: data.filter((d) => d.button2Clicks <= 150 && d.button2Clicks > 100).length },
            { range: ">150", value: data.filter((d) => d.button2Clicks > 150).length },
        ],
        xField: "range",
        yField: "value",
        seriesField: "range",
        legend: false,
        barStyle: { strokeWidth: 5 }, // Grosor de las barras
        height: 200,
    };

    // Columnas de la tabla
    const columns = [
        { title: "Nombre", dataIndex: "name", key: "name" },
        { title: "Inicio de sesión", dataIndex: "loginDate", key: "loginDate" },
        { title: "Tiempo de sesión", dataIndex: "sessionTime", key: "sessionTime" },
        { title: "Botón 1", dataIndex: "button1Clicks", key: "button1Clicks" },
        { title: "Botón 2", dataIndex: "button2Clicks", key: "button2Clicks" },
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h1>Gestión de Usuarios</h1>
            <Table
                dataSource={data}
                columns={columns}
                pagination={{ position: ["bottomCenter"], pageSize: 10 }}
                bordered
            />
            <div style={{ marginTop: "40px" }}>
                <h2>Estadísticas</h2>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                    <Bar {...barConfig1} />
                    <Pie {...pieConfig} />
                    <Bar {...barConfig2} />
                </div>
            </div>
        </div>
    );
};

export default App;
