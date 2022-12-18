/*
재활용 할 수 있는 버튼 만들어서 갖다쓰기
+
홈 화면에 필요한 스타일
*/
import styled from 'styled-components'

/*let IMG = require('public/img/무제-1.png'); */

export const Button = styled.button`
    font-size: 16px;
    color: black;
    margin: 20px; 
    &:active{
        outline: none;
    }
    &:focus{
        outline: none;
    }

`

// 제목이 적절한 위치에 배치되도록 최소높이 지정한!
export const Title = styled.div`
    min-height: 150px;

`