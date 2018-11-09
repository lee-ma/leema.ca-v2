import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 20vh;
  padding-left: 5%;
  padding-right: 5%;
  display: inline-block !important;
  justify-content: center !important;
  flex-wrap: wrap;
  background-color: ${props=> props.background || "#feffff"};
`

const SummaryText = styled.div`
  width: 100%;
  margin-left: 25%;
  color : ${props => props.white ? "#feffff" : "#484848"};

  @media(max-width: 1024px) {
    width: 100% !important;
    margin-left: 0;
  }
`

const HeaderText = styled.h1`
  font-size: 4em;
  margin-bottom: 0.1em;

  @media(max-width: 768px) {
    font-size: 3em;
  }
`

const SubHeaderText = styled.h3`
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 1.25em;

  @media(max-width: 768px) {
    font-size: 1.5em;
  }
`

const BodyText = styled.div`
  margin-bottom: 5em;

  @media(max-width: 768px) {
    font-size: 16px;
  }
`

const Button = styled.a`
  padding: 20px 40px;
  text-decoration: none;
  color: ${props=> props.defColor || "#feffff"};
  border: 2px solid;
  font-family: "Helvetica Neue", "serif";
  transition: 0.2s;

  &:hover {
    background-color: ${props=> props.btnBackground || "#feffff"};
    color: ${props=> props.hoverColor || "#feffff"};
  }
`

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <Container background={"#484848"}>
          <SummaryText white>
            <HeaderText>
              404
            </HeaderText>
            <SubHeaderText>
              That url request is a bit too spicy for me. 🌶️
            </SubHeaderText>
            <BodyText>
              <p>Couldn't seem to find that page.</p>
            </BodyText>
            <Button hoverColor={"#484848"} href="/#about"> Go back</Button>
          </SummaryText>
        </Container>
      </Layout>
    )
  }
}

export default NotFoundPage