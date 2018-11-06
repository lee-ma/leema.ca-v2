import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {FaGithub, FaLinkedin, FaFileAlt} from 'react-icons/fa'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import pdf from '../files/leemaresume.pdf'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 20vh;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  justify-content: space-between;
  background-color: ${props=> props.background || "#feffff"};

  @media(max-width: 1024px) {
    padding-top: 10vh;
    display: inline-block
  };
`

const SummaryText = styled.div`
  width: 50%;
  color : ${props => props.white ? "#feffff" : "#484848"};

  @media(max-width: 1024px) {
    width: 100%;
  }
`

const Visual = styled.div`
  width: 50%;
  height: fit-content;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  @media(max-width: 1024px) {
    width: 100%;
    margin-top: 2em;
  }
`

const VisualMobile = styled.div`
  width: 20%;
  height: fit-content;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  margin-right: 17.5%;

  @media(max-width: 1024px) {
    width: 50vw;
    margin-top: 2em;
  }
`

const HeaderText = styled.h1`
  font-size: 4em;
  margin-bottom: 0.1em;
`

const SubHeaderText = styled.h3`
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 1.25em;
`

const BodyText = styled.p`
  margin-bottom: 2.5em;
`

const Button = styled.a`
  padding: 1.5% 2.5%;
  text-decoration: none;
  color: ${props=> props.defColor || "#feffff"};
  border: 2px solid;
  font-family: "Helvetica Neue", "serif";
  transition: 0.2s;
  margin-right: 5%;

  &:hover {
    background-color: ${props=> props.btnBackground || "#feffff"};
    color: ${props=> props.hoverColor || "#feffff"};
  }
`

class IndexPage extends React.Component{ 
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Layout>
        <Container>
          <SummaryText>
            <HeaderText>
              Lee Ma
            </HeaderText>
            <SubHeaderText>
              ECE 2022, University of Waterloo 🇨🇦
            </SubHeaderText>
            <BodyText>Hot Sauce Enthusiast. Ski Slope Dominator. Software Developer.</BodyText>
              <Button defColor={'#484848'} hoverColor={'#feffff'} btnBackground={'#484848'} href="https://github.com/lee-ma"><FaGithub style={{verticalAlign: "text-top"}}/> Github</Button>
              <Button defColor={'#484848'} hoverColor={'#feffff'} btnBackground={'#484848'} href="https://linkedin.com/in/lma321"><FaLinkedin style={{verticalAlign: "text-top"}}/> Linkedin</Button>
              <Button defColor={'#484848'} hoverColor={'#feffff'} btnBackground={'#484848'} target="_blank" href={pdf}><FaFileAlt style={{verticalAlign: "text-top"}}/> Resume</Button>
          </SummaryText>
          <Visual>
            <Img fluid={this.props.data.me.childImageSharp.fluid}></Img>
          </Visual>
        </Container>
        <Container background={"#00C853"}>
          <SummaryText white>
            <HeaderText>
              Foodiy
            </HeaderText>
            <SubHeaderText>
              Find delicious recipes to cook at home. 🥕
            </SubHeaderText>
            <BodyText>Attempting to make a food recipe site that isn't cluttered.</BodyText>
            <Button hoverColor={"#00C853"} href="https://github.com/lee-ma/foodiy"><FaGithub style={{verticalAlign: "text-top"}}/> Github</Button>
          </SummaryText>
          <Visual>
              <Img fluid={this.props.data.foodiy.childImageSharp.fluid}></Img>
            </Visual>
        </Container>
        <Container background={"#00BFB2"}>
          <SummaryText white>
            <HeaderText>
              Atheneum
            </HeaderText>
            <SubHeaderText>
              Connect with local students and tutors. 📖
            </SubHeaderText>
            <BodyText>Building a web app to help people learn new things.</BodyText>
            <BodyText>Unfortunately this repo is private :(</BodyText>
          </SummaryText>
          <Visual>
              <Img fluid={this.props.data.atheneum.childImageSharp.fluid}></Img>
            </Visual>
        </Container>
        <Container background={"#ff8a65"}>
          <SummaryText white>
            <HeaderText>
              Zephyr
            </HeaderText>
            <SubHeaderText>
              A journal trying too hard to have a cool name. 🖋️
            </SubHeaderText>
            <BodyText>Building a very minimalistic journal app.</BodyText>
            <Button hoverColor={"#ff8a65"} href="https://github.com/lee-ma/zephyr"><FaGithub style={{verticalAlign: "text-top"}}/> Github</Button>
          </SummaryText>
          <Visual>
              <Img fluid={this.props.data.zephyr.childImageSharp.fluid}></Img>
            </Visual>
        </Container>
        <Container background={"#68E182"}>
          <SummaryText white>
            <HeaderText>
              Daytrip
            </HeaderText>
            <SubHeaderText>
              A lifestyle android app. 💪
            </SubHeaderText>
            <BodyText>The first thing I ever built.</BodyText>
            <Button hoverColor={"#68E182"} href="https://github.com/lee-ma/daytripandroid"><FaGithub style={{verticalAlign: "text-top"}}/> Github</Button>
          </SummaryText>
          <VisualMobile>
              <Img fluid={this.props.data.daytrip.childImageSharp.fluid}></Img>
            </VisualMobile>
        </Container>
      </Layout>
    )
  }
} 

export default IndexPage


export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid( maxWidth: 1680) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const fluidImageMobile = graphql`
fragment fluidImageMobile on File {
  childImageSharp {
    fluid( maxHeight: 864) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;


export const pageQuery = graphql`
  query {
    me: file(relativePath: { eq: "me.jpg" }) {
      ...fluidImage
    },
    foodiy: file(relativePath: { eq: "foodiy.png" }) {
      ...fluidImage
    },
    atheneum: file(relativePath: { eq: "atheneum.png" }) {
      ...fluidImage
    },
    zephyr: file(relativePath: { eq: "zephyr.png" }) {
      ...fluidImage
    },
    daytrip: file(relativePath: { eq: "daytrip.png" }) {
      ...fluidImageMobile
    }
  }
`

