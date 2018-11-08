import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import {FaGithub, FaLinkedin, FaFileAlt, FaChevronDown} from 'react-icons/fa'
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';
// import ReactFullpage from '@fullpage/react-fullpage'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import pdf from '../files/leemaresume.pdf'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 20vh;
  padding-left: 5%;
  padding-right: 5%;
  display: flex !important;
  justify-content: space-between !important;
  flex-wrap: wrap;
  background-color: ${props=> props.background || "#feffff"};

  @media(max-width: 1024px) {
    padding-top: 10vh;
    display: inline-block !important
    justify-content: center;
  };
  @media(max-width: 768px) {
    padding-top: 2.5vh;
    display: inline-block !important
    justify-content: center;
  }
`

const SummaryText = styled.div`
  width: 50%;
  padding-right: 5%;
  color : ${props => props.white ? "#feffff" : "#484848"};

  @media(max-width: 1024px) {
    width: 100% !important;
  }
`

const Visual = styled.div`
  width: 50%;
  height: fit-content;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  @media(max-width: 1024px) {
    width: 100% !important;
    margin-top: 2em;
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
  margin-bottom: 2.5em;

  @media(max-width: 768px) {
    font-size: 16px;
    margin-bottom: 1em;
  }
`

const Button = styled.a`
  padding: 1.5% 2.5%;
  text-decoration: none;
  color: ${props=> props.defColor || "#feffff"};
  border: 2px solid;
  font-family: "Helvetica Neue", "serif";
  transition: 0.2s;
  margin-right: 3%;

  &:hover {
    background-color: ${props=> props.btnBackground || "#feffff"};
    color: ${props=> props.hoverColor || "#feffff"};
  }
`

const ScrollBtn = styled.a`
  color: ${props=> props.black ? '#484848' : '#feffff'};
  border: none;
  position: relative;
  margin: auto;
  font-size: 2em;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
  -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 1.5s infinite;

    @keyframes bounce {
      0%, 20%, 30%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      60% {
        transform: translateY(10px);
      }
      90% {
        transform: translateY(0);
      }
    }
`

const ScrollUpBtn = styled.a`
  color: ${props=> props.black ? '#484848' : '#feffff'};
  border: none;
  position: relative;
  margin: auto;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline
  }
`

class IndexPage extends React.Component{
  constructor(props) {
    super(props)

    this.state = {showPage: false}
  }

  componentDidMount() {
    this.setState({showPage: true})
  }

  render() {
    return (
      <ReactFullpage
        anchors={['about', 'foodiy', 'atheneum', 'zephyr', 'daytrip', 'blog']}
        licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
        render={({ state, fullpageApi }) => {

        return (
          <ReactFullpage.Wrapper>
            <Layout>
              <div className="section">
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
                  <ScrollBtn black href="#foodiy"><FaChevronDown/></ScrollBtn>
                </Container>
              </div>
              <div className="section">
                <Container background={"#00C853"}>
                    <SummaryText white>
                      <HeaderText>
                        Foodiy
                      </HeaderText>
                      <SubHeaderText>
                        Find delicious recipes to cook at home. 🥕
                      </SubHeaderText>
                      <BodyText>
                        <p>Attempting to make a food recipe site that isn't cluttered.<br></br>(React + Redux / Express + Sequelize + PostgreSQL)</p>
                      </BodyText>
                      <Button hoverColor={"#00C853"} href="https://github.com/lee-ma/foodiy"><FaGithub style={{verticalAlign: "text-top"}}/> Github</Button>
                    </SummaryText>
                    <Visual>
                        <Img fluid={this.props.data.foodiy.childImageSharp.fluid}></Img>
                    </Visual>
                    <ScrollBtn href="#atheneum"><FaChevronDown/></ScrollBtn>
                  </Container>
              </div>
              <div className="section">
                <Container background={"#00BFB2"}>
                  <SummaryText white>
                    <HeaderText>
                      Atheneum
                    </HeaderText>
                    <SubHeaderText>
                      Connect with local students and tutors. 📖
                    </SubHeaderText>
                    <BodyText>
                      <p>Building a web app to help people learn new things.<br></br>(React + Redux / Express + Mongoose + MongoDB)</p>
                    </BodyText>
                    <BodyText><p>Unfortunately this repo is private :(</p></BodyText>
                  </SummaryText>
                  <Visual style={{marginTop: 0}}>
                      <Img fluid={this.props.data.atheneum.childImageSharp.fluid}></Img>
                  </Visual>
                  <ScrollBtn href="#zephyr"><FaChevronDown/></ScrollBtn>
                </Container>
              </div>
              <div className="section">
                <Container background={"#ff8a65"}>
                  <SummaryText white>
                    <HeaderText>
                      Zephyr
                    </HeaderText>
                    <SubHeaderText>
                      A journal trying too hard to have a cool name. 🖋️
                    </SubHeaderText>
                    <BodyText>
                      <p>Building a minimalistic journal app.<br></br>(React + Redux / Express + Mongoose + MongoDB)</p>
                    </BodyText>
                    <Button hoverColor={"#ff8a65"} href="https://github.com/lee-ma/zephyr"><FaGithub style={{verticalAlign: "text-top"}}/> Github</Button>
                  </SummaryText>
                  <Visual>
                      <Img fluid={this.props.data.zephyr.childImageSharp.fluid}></Img>
                  </Visual>
                  <ScrollBtn href="#daytrip"><FaChevronDown/></ScrollBtn>
                </Container>
              </div>
              <div className="section">
                <Container background={"#68E182"}>
                  <SummaryText white>
                    <HeaderText>
                      Daytrip
                    </HeaderText>
                    <SubHeaderText>
                      A lifestyle android app. 💪
                    </SubHeaderText>
                    <BodyText>The first thing I ever built.<br></br>(Java / Firebase)</BodyText>
                    <Button hoverColor={"#68E182"} href="https://github.com/lee-ma/daytripandroid"><FaGithub style={{verticalAlign: "text-top"}}/> Github</Button>
                  </SummaryText>
                  <Visual>
                    <Img fluid={this.props.data.daytrip.childImageSharp.fluid}></Img>
                  </Visual>
                  <ScrollBtn href="#blog"><FaChevronDown/></ScrollBtn>
                </Container>
              </div>
              <div className="section">
                <Container>
                  <SummaryText>
                    <HeaderText>
                      The Blog
                    </HeaderText>
                    <SubHeaderText>
                      Coming soon. 🕒
                    </SubHeaderText>
                    <BodyText></BodyText>
                    <Button hoverColor={"#68E182"} href="https://github.com/lee-ma/daytripandroid"><FaGithub style={{verticalAlign: "text-top"}}/> Github</Button>
                  </SummaryText>
                  <Visual>
                    <Img fluid={this.props.data.mtn.childImageSharp.fluid}></Img>
                  </Visual>
                  <ScrollUpBtn black href="#about">Back to top</ScrollUpBtn>
                </Container>
              </div>
            </Layout>
          </ReactFullpage.Wrapper>
        );
      }}/>
    )
  }
} 

export default IndexPage


export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid( maxWidth: 1680, maxHeight: 970) {
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
      ...fluidImage
    },
    mtn: file(relativePath: { eq: "mtns.jpg" }) {
      ...fluidImage
    }
  }
`

