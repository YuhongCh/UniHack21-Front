import styled from "styled-components";

export const HeaderWrapper = styled.header`
  min-height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  
  padding-right: -100px;

  ul li a:hover {
    color: darkgray;
  }

  ul li a {
    text-decoration: none;
    text-transform: uppercase;
    color: #555;
    padding: 0 15px;
  }

  ul li {
    list-style: none;
    display: inline-block;
  }
  
`

export const SquareWrapper = styled.div`
  
  .text {
    font-size: 16px;
    font-family: 'Georgia', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  
  .avatar {
    color: whitesmoke;
    background: pink;
  }
`

export const ChatWrapper = styled.div`
  font-family: 'Georgia', sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: left;
  
  .border {
    margin-left: 80px;
    margin-right: 80px;
    box-shadow: 0 0 5px #ccc;
    padding: 15px 15px;
    max-width: 1200px;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
  }
 
`

export const CardWrapper = styled.div`
  font-family: 'Georgia', sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: left;

  margin-left: 80px;
  margin-right: 80px;
  box-shadow: 0 0 5px #ccc;
  padding: 15px 15px;
  max-width: 1200px;
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
`

export const SomeWrapper = styled.div`
  .avatar {
    background: pink;
    margin-left: 500px;
  }
`

export const ImageWrapper = styled.div`
  text-align: center;

`

export const MapWrapper = styled.div`
  text-align: center;

`

export const FormWrapper = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 50px;
  box-shadow: 0 0 5px #ccc;
  padding: 15px 15px;
  max-width: 1200px;
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
`

