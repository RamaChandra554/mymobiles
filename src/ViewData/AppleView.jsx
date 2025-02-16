import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { AppleData } from '../Data/AppleData';
import { Link } from 'react-router-dom';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';

function AppleView() {
  return (
    <Container fluid>
    <Row className="p-0">
      <Sidenav/>

      <ZviewData
      videoUrl={"https://rr1---sn-h5576nsl.googlevideo.com/videoplayback?expire=1739748444&ei=_B-yZ5-ZMp-ZvcAP0bD0yAo&ip=136.158.119.165&id=o-AAEbii-Gr47mUIanum2P_smxTY0wlyxEaKegPd7-uGQP&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AUWDL3x8--XE3ISxFOWd3Q9IjwSHcfSCP0fe9Th7S33tMh6XCH62f9V7xsNbkfQ6gguhB0LKi54vjeTG&spc=RjZbSX2osrgikdjhYhsm-zGv9i2Y5O6tpfszPhXUTM89bU3E0XtCqb_Qdjzzebzp7A&vprv=1&svpuc=1&mime=video%2Fmp4&ns=9S-nxOf4ve-9TTZ8A5K9OPIQ&rqh=1&gir=yes&clen=2328774&ratebypass=yes&dur=38.080&lmt=1728853081317161&fexp=24350590,24350737,24350827,24350961,24350977,24350978,24351082,24351132,24351147,24351148,24351172,24351184,51326932,51331020&c=MWEB&sefc=1&txp=4530434&n=2kzBLpx_Qh3UBw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAIcdaoF5i3ZRJyOmHaBPX7kJm-5EIIQLCMyFhJ_XXNyzAiBUp-M1HGnavOzPngvVUy7jl033B_HtLjeVup_1FiwcaQ%3D%3D&title=iPhone%2016%20Pro%20%7C%20Camera%20Control%20%7C%20Apple&rm=sn-jvhja5g3-hoar7l,sn-jvhja5g3-hoaez7l,sn-hoal7s&rrc=79,79,104&req_id=2ebfa153a344a3ee&cmsv=e&rms=nxu,au&redirect_counter=3&cms_redirect=yes&ipbypass=yes&met=1739726849,&mh=vs&mip=2405:201:c046:71ea:9539:19da:2294:4927&mm=30&mn=sn-h5576nsl&ms=nxu&mt=1739726181&mv=m&mvi=1&pl=52&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRQIhAN0Bqtf6yRzZ8S5ZOnSTUBLgSb2j-5f0XJdpDE6GqfzLAiB_pmFQ48Vs5-CLFcWXcYmjrwqeOrnawEfmK6PVEQvlwA%3D%3D"}
        data={AppleData}
        linkTo={'/apple/'}
      />

    </Row>
  </Container>

  )
}

export default AppleView

