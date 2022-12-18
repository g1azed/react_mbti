/* 
  시작 화면, 사용자에게 시작을 유도하고
  퀴즈에 대해 소개하는 화면
*/
import React from 'react'
import { Button, Title} from '../styles/styledComponents'

const homeContainer = {
  textAlign:"center"
}

class Home extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return <div style={homeContainer} >
        <Title><h1>당신에게 어울리는 디즈니 공주는? </h1></Title>

        <Button onClick={this.props.goTest}>
        시작하기
        </Button>
        
        <p>MADE BY SUJ</p>
      </div>
  }
}

export default Home;