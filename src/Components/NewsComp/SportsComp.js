import axios from 'axios'
import React, {useEffect, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BussinessComp from './BussinessComp';

const SportsComp = () => {
  const [sport, setSport] = useState([])

  const getSport = async () => {
    try{
      let res = await axios.get('https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=0a6a63c9b36a45bc9e6cbc41a2e2bd99')
      setSport(res.data.articles);
    } catch (e){
      console.log(e.message);
    }
  }

  useEffect(() => {
    getSport()
  }, [])
  return(
      <div>
          <Container className="mt-5">
            <h4 style={{textAlign: "left"}}>Berita Olahraga</h4>
            <hr />
              <Row className="my-4">
                {
                  sport.map((spr, index) => {
                    return(
                      <>
                      <Col style={{marginBottom: 19, textAlign: "left"}} md={6} key={index}>
                        <a style={{textDecoration: "none", color: "black"}} href={spr.url}>
                        <h5>{spr.title}</h5>
                        <p style={{fontStyle: "italic"}}>{spr.publishedAt}</p>
                        </a>
                      </Col>
                      <Col style={{marginBottom: 19}} md={6}>
                        <a href={spr.url}>
                        <img src={spr.urlToImage} alt="" width={240} />
                        </a>
                      </Col>
                      </>
                    )
                  })
                }
              </Row>
          </Container>
      </div>
  ) 
};

export default SportsComp;
