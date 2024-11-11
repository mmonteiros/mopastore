import React, {useEffect} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import {getNotification} from './api/notification/notification';
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";

const Div = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;

  .title {
    font-size: 64px;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 640px) {
      font-size: 56px;
    }
  }

  .text {
    margin-top: 30px;
  }

  a {
    display: block;
    margin-top: 40px;
    padding: 14px 42px;
    text-decoration: none;
    font-weight: 500;
    border: none;
    border-radius: 10px;
    background: #8e2de2;
    background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);
    background: linear-gradient(to right, #8e2de2, #4a00e0);
    color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const Home = () => {

  useEffect(() => {
    getNotification().then(({data}) => {
      if (data?.notification?.name) {
        toast.success(data?.notification?.name, {
          duration: 6000,
          progress: true,
          position: "bottom-center",
          transition: "bounceIn",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>',
          sonido: true,
        });
      }
    })
  }, [])

  return (
    <>
      <Head>
        <title>Mopa Store - Online Shopping for Men</title>
      </Head>
      <Div>
        <p className="title">Elevate Your Style, Elevate Your Confidence.</p>
        <p className="text">Discover apparel that not only fits but also defines you. Embrace fashion that speaks to your individuality and transforms your everyday look.</p>
        <Link href="/collections">Shop Now</Link>
      </Div>
    </>
  );
};

export default Home;
