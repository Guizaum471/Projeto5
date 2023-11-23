import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Axios from 'axios'


const Body = styled.body`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
const Left = styled.div`
width: 450px;
height: 500px;
background-color: #414042;
position: absolute;
margin-right: 50%;
`
const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`
const Footer = styled.footer`
padding: 10px;
margin-top: 250px;
margin-left: 15px;
color: #FFF;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const Container = styled.div`
background-color: whitesmoke;
padding: 6px;
width: 350px;
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
overflow: hidden;
border-radius: 10px;
box-shadow: 0 0 20px 0 darkgrey;
`
const ButtonsForm = styled.div`
margin-top: 40px;
position: relative;
border-radius: 30px;
box-shadow: 0 0 7px 0 blueviolet;
`
const ContactForm = styled.form`
padding: 20px;
`

const Input = styled.input`
width: 100%;
padding: 10px;
margin-bottom: 10px;
border: 1px solid #ccc;
`
const TextArea = styled.textarea`
width: 100%;
padding: 10px;
margin-bottom: 10px;
border: 1px solid #ccc;
height: 100px;
`

const Button = styled.button`
background-color: #000;
color: #fff;
padding: 10px 20px;
border: none;
cursor: pointer;
`

function Contact(){
  const[values, setValues] = useState();

  const handleChangeValues = (value) =>(
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  )

  const handleClickButton = () =>{
    Axios.post("http://localhost:3001/register",{
      nome: values.nome,
      email: values.email,
      mensagem: values.mensagem,
    }).then((response)=>{
      console.log(response)
    })
  }

  return(
    <Body>
    <Left>
      <Logo><Link to="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="104" viewBox="0 0 200 104" fill="none">
                <path d="M84.4112 78.1275L80.0271 78.496C74.6671 78.9459 69.868 82.0423 67.1904 86.7803L65.003 90.6568C58.2665 102.588 40.9797 101.501 35.7469 88.8143L34.0451 84.6937C31.9662 79.659 27.582 75.9787 22.3163 74.8636L18.0076 73.9495C4.75133 71.1354 0.428447 54.1075 10.6912 45.134L14.0288 42.2195C18.1066 38.6588 20.1949 33.2843 19.6151 27.8572L19.139 23.416C17.6823 9.74289 32.3009 0.310033 43.8742 7.44569L47.6361 9.76682C52.2324 12.6 57.9082 12.959 62.8157 10.724L66.8321 8.8958C79.188 3.26289 92.5432 14.4569 89.4318 27.8429L88.423 32.1932C87.1879 37.5054 88.6068 43.1001 92.2179 47.1441L95.1737 50.4559C104.272 60.6449 97.9079 77.0028 84.4112 78.1323V78.1275Z" fill="black" stroke="black" stroke-width="9" stroke-miterlimit="10"/>
                <path d="M181.243 75.2909L177.224 75.6272C172.314 76.0356 167.921 78.8706 165.473 83.1951L163.471 86.7364C157.303 97.6342 141.471 96.6443 136.684 85.0546L135.128 81.2875C133.226 76.6843 129.207 73.3256 124.387 72.3069L120.444 71.4709C108.304 68.9002 104.347 53.3416 113.745 45.149L116.801 42.487C120.535 39.2341 122.447 34.3281 121.915 29.3646L121.479 25.3043C120.141 12.8161 133.524 4.19591 144.128 10.7163L147.572 12.8353C151.781 15.4252 156.98 15.752 161.473 13.7098L165.15 12.0377C176.465 6.89152 188.696 17.1214 185.845 29.3453L184.92 33.3191C183.79 38.1721 185.09 43.2847 188.397 46.9797L191.101 50.0021C199.432 59.3094 193.606 74.253 181.243 75.2861V75.2909Z" fill="black" stroke="black" stroke-width="9" stroke-miterlimit="10"/>
                <path d="M147.012 14.2839H48.4369C33.2442 14.2839 20.9281 26.9264 20.9281 42.5216V55.6759C20.9281 71.2711 33.2442 83.9136 48.4369 83.9136H147.012C162.205 83.9136 174.521 71.2711 174.521 55.6759V42.5216C174.521 26.9264 162.205 14.2839 147.012 14.2839Z" fill="black" stroke="black" stroke-width="9" stroke-miterlimit="10"/>
                <path d="M41.903 30.7712H37.5626V44.668H32.7368V30.7712H28.3823V26.1838H41.903V30.7712Z" fill="#FAF9F9"/>
                <path d="M53.6328 44.668L48.7834 36.6412V44.668H43.967L43.9435 26.1838H50.8287C54.745 26.1838 57.5443 28.8786 57.5443 32.1931C57.5443 34.4988 56.1824 36.425 54.4057 37.2512L59.2645 44.668H53.6281H53.6328ZM48.7599 34.3019L50.7298 34.3115C51.7524 34.3211 52.6855 33.5909 52.6855 32.4525C52.6855 31.314 51.743 30.5935 50.7298 30.5935H48.7599V34.2971V34.3019Z" fill="#FAF9F9"/>
                <path d="M72.6203 42.5159H65.8481L64.9244 44.6727H59.6604L68.0867 25.9581H70.3723L78.8081 44.6727H73.5298L72.6203 42.5159ZM71.0887 38.9277L69.2319 34.5468L67.3656 38.9277H71.0887Z" fill="#FAF9F9"/>
                <path d="M78.1389 35.4259C78.1389 29.9546 82.4792 25.7467 88.1298 25.7467C90.472 25.7803 92.9791 26.8227 94.8359 28.5424L92.0696 32.1643C90.9574 31.1315 89.4823 30.4542 88.1439 30.4542C85.354 30.4542 83.0259 32.6206 83.0259 35.4547C83.0259 38.2888 85.4577 40.4312 88.0449 40.4312C89.5624 40.4312 90.9244 39.6963 92.0931 38.6299L94.8359 42.3574C93.1017 43.9618 90.7972 45.0762 88.0402 45.0762C82.9222 45.0762 78.1389 41.2238 78.1389 35.4211V35.4259Z" fill="#FAF9F9"/>
                <path d="M106.274 44.668L101.683 37.6403V44.668H96.8812V26.1838H101.683V33.077L105.892 26.1838H111.429L105.873 35.1953L112.117 44.668H106.278H106.274Z" fill="#FAF9F9"/>
                <path d="M112.895 41.5408L115.807 38.6299C116.561 39.7635 117.966 40.4552 119.488 40.4552C120.511 40.4552 121.515 40.0758 121.515 39.3216C121.515 38.3705 119.658 37.5347 117.881 36.7277C115.586 35.7189 113.616 34.1818 113.616 31.3957C113.616 28.1965 116.599 25.9149 120.039 25.9149C122.806 25.9149 124.969 27.2454 125.676 29.066L122.895 31.7944C122.353 30.8193 120.958 30.3966 120.096 30.3966C119.106 30.3966 118.399 30.9106 118.399 31.5446C118.399 32.3949 119.681 32.6687 121.642 33.5045C124.479 34.7198 126.354 36.4875 126.354 39.2159C126.354 42.7369 123.136 44.9274 119.502 44.9274C116.519 44.9274 113.809 43.5872 112.9 41.5457L112.895 41.5408Z" fill="#FAF9F9"/>
                <path d="M128.395 37.9478V26.1838H133.244V37.9382C133.244 39.4753 134.54 40.4937 135.912 40.4937C137.283 40.4937 138.598 39.4513 138.598 37.9382V26.1838H143.447V37.9478C143.447 42.1893 140.073 45.1819 135.921 45.1819C131.769 45.1819 128.395 42.1893 128.395 37.9478Z" fill="#FAF9F9"/>
                <path d="M146.44 26.1838H151.256V44.668H146.44V26.1838Z" fill="#FAF9F9"/>
                <path d="M166.822 30.7712H162.482V44.668H157.656V30.7712H153.302V26.1838H166.822V30.7712Z" fill="#FAF9F9"/>
                <path d="M29.5604 48.996H38.0244C42.6381 48.996 46.4884 52.5362 46.4884 56.9987C46.4884 61.4612 42.723 65.1023 38.0244 65.1023H35.5078V71.8321H29.5604V48.9911V48.996ZM40.7483 57.0275C40.7483 55.6393 39.6079 54.5921 38.0244 54.5921H35.5078V59.5062L38.0244 59.5206C39.622 59.535 40.7483 58.4302 40.7483 57.0275Z" fill="#FAF9F9"/>
                <path d="M60.9847 71.8369L54.9948 61.9176V71.8369H49.0474L49.0191 48.996H57.5255C62.3608 48.996 65.8246 52.3248 65.8246 56.4223C65.8246 59.2708 64.1422 61.6486 61.9461 62.6717L67.95 71.8369H60.9847ZM54.9666 59.0306L57.3983 59.045C58.6613 59.0594 59.8159 58.1516 59.8159 56.7489C59.8159 55.3463 58.6472 54.4528 57.3983 54.4528H54.9666V59.0306Z" fill="#FAF9F9"/>
                <path d="M69.114 60.4429C69.114 53.5834 74.4535 48.3859 81.4142 48.3859C88.3748 48.3859 93.7143 53.5834 93.7143 60.4429C93.7143 67.3024 88.3748 72.4133 81.4 72.4133C74.4252 72.4133 69.114 67.2399 69.114 60.4429ZM87.6962 60.3996C87.6962 56.8738 84.9722 54.1502 81.4142 54.1502C77.8561 54.1502 75.1321 56.869 75.1321 60.3996C75.1321 63.9303 77.8561 66.6202 81.4142 66.6202C84.9722 66.6202 87.6962 63.9158 87.6962 60.3996Z" fill="#FAF9F9"/>
                <path d="M92.7718 70.6312L95.7737 65.6307C96.5796 66.2552 97.1216 66.4954 98.2196 66.4954H98.3186C100.378 66.4954 102.004 64.8525 102.004 63.0224L101.891 48.996L107.852 49.0104L107.951 63.0512C107.951 68.2246 103.696 72.202 98.3469 72.202H98.1819C96.0706 72.202 94.4023 71.7072 92.7765 70.6312H92.7718Z" fill="#FAF9F9"/>
                <path d="M117.523 54.6354V57.8249H124.639V62.8831H117.523V66.1543H126.171V71.8369H111.646V48.996H126.171V54.6354H117.523Z" fill="#FAF9F9"/>
                <path d="M128.503 60.414C128.503 53.6554 133.866 48.4579 140.846 48.4579C143.74 48.5012 146.836 49.7885 149.131 51.9165L145.709 56.3934C144.333 55.1205 142.514 54.2847 140.86 54.2847C137.415 54.2847 134.536 56.9603 134.536 60.462C134.536 63.9638 137.538 66.6106 140.733 66.6106C142.609 66.6106 144.291 65.7027 145.738 64.3866L149.131 68.9932C146.991 70.9771 144.14 72.3509 140.738 72.3509C134.413 72.3509 128.503 67.5905 128.503 60.4188V60.414Z" fill="#FAF9F9"/>
                <path d="M167.001 54.6642H161.638V71.8369H155.677V54.6642H150.3V48.996H167.006V54.6642H167.001Z" fill="#FAF9F9"/>
              </svg>
              </Link>
      </Logo>
      <Footer>
      <p>Apoie nossa causa!</p>
      <p>Lutamos por um mundo melhor. </p>
      </Footer>
      </Left>
      <Container>
      <h1>Converse conosco</h1>
      <ContactForm>
      
      <Input type="text" name="nome" placeholder="Seu nome" onChange={handleChangeValues}/>
      <Input type="email" name="email" placeholder="Seu Email" onChange={handleChangeValues}/>
      <TextArea name="mensagem" placeholder="Sua mensagem" onChange={handleChangeValues}></TextArea>
      <Link to="/"><Button type="submit" onClick={()=> handleClickButton()}>Enviar</Button></Link>
      </ContactForm>
    </Container>
    
    </Body>
  )
}

export default Contact