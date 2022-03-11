import Head from "next/head";
import Image from "next/image";
import { Layout } from "antd";
import PixelHead from "../components/head/Pixel-head";

const { Header, Footer, Sider, Content } = Layout;


// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Layout>
        <Header>
          <PixelHead></PixelHead>
        </Header>
        <Content></Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </>
  );
}
