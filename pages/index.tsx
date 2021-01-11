import Head from 'next/head';
import Button from '../components/ui/Button';
import styled from "styled-components";
import Header from '../components/home/header';
export default function Home() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  )
}


const Wrapper = styled.div`
  padding: 4em;
`
