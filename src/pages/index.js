import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Img from 'gatsby-image'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 10%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  justify-content: center;
  background-color: ${props=> props.background || "#feffff"};

  @media(max-width: 768px) {
    display: inline-block
  };
`

const SummaryText = styled.div`
  width: 50%;
  color : ${props => props.white ? "#feffff" : "#484848"};

  @media(max-width: 768px) {
    width: 100%;
  }
`

const Visual = styled.div`
  width: 50%;
  height: fit-content;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  @media(max-width: 768px) {
    width: 100%;
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
  margin-bottom: 0.25em;
`

class IndexPage extends React.Component{ 
  constructor(props) {
    super(props)

    this.state = {}
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
            <BodyText>Hot Sauce Aficionado. U6 Soccer Participation Medalist. Aspiring Software Developer.</BodyText>
          </SummaryText>
          <Visual>
            <Img fluid={this.props.data.me.childImageSharp.fluid}></Img>
          </Visual>
        </Container>
        <Container background={"#00BFB2"}>
          <SummaryText white>
            <HeaderText>
              Atheneum
            </HeaderText>
            <SubHeaderText>
              Connect with local students and tutors.
            </SubHeaderText>
            <BodyText><a href="/projects/atheneum">Read more.</a></BodyText>
          </SummaryText>
          <Visual>
              <Img fluid={this.props.data.atheneum.childImageSharp.fluid}></Img>
            </Visual>
        </Container>
      </Layout>
    )
  }
} 

export default IndexPage


export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1024) {
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
    atheneum: file(relativePath: { eq: "atheneum.png" }) {
      ...fluidImage
    }
  }
`

