import bg from '../../assets/img/bg.jpeg'
const { default: styled } = require("styled-components");


const Background = styled.div`
    height: calc(100vh - 64px);
    
    &::after {
        content: "";
        background-image: url(${bg});
        background-size: cover;
        background-repeat: no-repeat;
        top: 64px;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;   
        opacity: .4;
    }
`

export default Background;