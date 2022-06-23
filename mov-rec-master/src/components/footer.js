import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
class Footer extends React.Component{
  render(){
    const year = new Date()
    return(
        <footer className="my-footer">
          <Container fluid>
            <Row noGutters>
              <Col xs={12} className="text-center">
                <p>
                  {year.getFullYear()} Trakya Üniversitesi Bilgisayar Mühendisliği Proje dersi için yapılmıştır. <a href="https://www.linkedin.com/in/ogib/" target="_blank" rel="noreferrer">1181602696 - Oguzhan Bilir</a>
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
    )
  }
}
export default Footer
