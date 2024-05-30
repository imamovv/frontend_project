import {Outlet} from "react-router-dom";
import MyHeader from "../MyHeader/MyHeader";
import './App.css'

import { Layout } from 'antd';

const { Sider, Footer, Content } = Layout;

function App() {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider width="auto" theme='light'><MyHeader/></Sider>
            <Content><Outlet /></Content>
            <Footer style={{color: 'black', background: '#ffffff'}}>
                {new Date().getFullYear()}
            </Footer>
        </Layout>
    );
}

export default App;
