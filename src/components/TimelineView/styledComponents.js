import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  text-align: center;
`

export const Heading = styled.h1`
  color: ${props => (props.color ? '#1e293b' : '#2b237c')};
  font-family: Roboto;
  font-size: ${props => (props.fontSize ? '15px' : '20px')};
`
