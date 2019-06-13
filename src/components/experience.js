import React from 'react'
import Layout from './layout'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin-left: 20%;
  display: inline-block !important;
  justify-content: center !important;
  flex-wrap: wrap;
  background-color: ${props=> props.background || "#feffff"};

  @media(max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`

const Section = styled.a`
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  color: #484848;
  margin-bottom: 5em;

  @media(max-width: 768px) {
    margin-bottom: 2.5em;
  }
  @media(max-width: 425px) {
    margin-bottom: 0.5em;
  }
`

const Logo = styled.img`
  margin-top: -1em;
  height: 7.5em;
  margin-right: 5em;
  
  @media(max-width: 425px) {
    height: 5em;
    margin: auto;
  }
`

const HeaderText = styled.h1`
  font-size: 2em;
  margin-bottom: 0;
  color: ${props=> props.color || "#484848"};

  @media(max-width: 425px) {
    font-size: 1.25em;
    text-align: center;
  }
`

const SubHeaderText = styled.h3`
  font-size: 1em;
  font-weight: 600;
  display: inline;
  vertical-align: top;

  @media(max-width: 425px) {
    font-size: 1em;
  }
`

const BodyText = styled.div`
  margin-top: 0.5em;
  margin-bottom: 1em;

  @media(max-width: 425px) {
    font-size: 16px;
  }
`

const Description = styled.div`
  @media(max-width: 768px) {
    text-align: left;
  }
  @media(max-width: 425px) {
    width: 100%;
    margin-top: -5px;
    text-align: center;
  }
`

const Experience = () => {
  return (
    <Container backgroundColor={'#feffff'}>
      <Section href="https://riverpayment.com">
        <Logo src="https://events.nrf.com/annual2019/CUSTOM/mapp/RiverPay_AN19.png"/>
        <Description>
          <HeaderText color="#139fdd">RiverPay Inc.</HeaderText>
          <SubHeaderText>Software Engineering Co-op - Summer 2019</SubHeaderText>
          <br/>
          <SubHeaderText>San Francisco Bay Area, California</SubHeaderText>
          {
            typeof window !== 'undefined' && window.innerWidth > 425 ? <BodyText>Payment platform for thousands of merchants globally.</BodyText> : null
          }
        </Description>
      </Section>
      <Section href="https://gobonfire.com">
        <Logo src="https://media.licdn.com/dms/image/C4E0BAQEo02kE2JwPEg/company-logo_200_200/0?e=2159024400&v=beta&t=8a8owbqvjoWy9VdgeW2gJZ6Rul0D0IxEmOBZ4klBCgc"/>
        <Description>
          <HeaderText color="#EF8420">Bonfire Interactive Ltd.</HeaderText>
          <SubHeaderText>Software Engineering Co-op - Fall 2018</SubHeaderText>
          <br/>
          <SubHeaderText>Kitchener, Ontario</SubHeaderText>
          {
            typeof window !== 'undefined' && window.innerWidth > 425 ? <BodyText>Helping procurement professionals make better decisions.</BodyText> : null
          }
        </Description>
      </Section>
      <Section href="https://uwaterloo.ca/arts-computing/" style={{marginBottom: "1em"}}>
        <Logo style={{marginBottom: "3em"}} src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/220px-University_of_Waterloo_seal.svg.png"/>
        <Description>
          <HeaderText color="#ffd045">University of Waterloo</HeaderText>
          <SubHeaderText>Computing Assistant - Winter 2018</SubHeaderText>
          <br/>
          <SubHeaderText>Waterloo, Ontario</SubHeaderText>
          {
            typeof window !== 'undefined' && window.innerWidth > 425 ? <BodyText>IT services, static web templates, and Powershell scripting.</BodyText> : null
          }
        </Description>
      </Section>
    </Container>
  )
}

export default Experience
