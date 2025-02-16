import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import { NothingData } from '../Data/NotingData';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';

function NotingView() {
  return (
   <Container fluid>
    <Row className='p-0'>
      <Sidenav/>
      <ZviewData 
      videoUrl={"https://rr4---sn-gwpa-h55k.googlevideo.com/videoplayback?expire=1739749161&ei=ySKyZ5PNLtaVkucPxJnGmAI&ip=156.237.51.89&id=o-AEmFwnUfVLl6vaTAT3j24QhS6Oh_FCvwt-3TddRKh5r3&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AUWDL3w7QzxBKiYMAsbvoyHCJQbQQnlLWFmIsgZo6Juknw2flzLadxe5dZBypcRPBj7vdTEVbjWk5bwa&spc=RjZbSeaGeozoyWSBlNKZlmlG2Q3Wwr-4hc1oMbfL58tJKs1DUdcUFZOcnIZ8eqx3NLn8&vprv=1&svpuc=1&mime=video%2Fmp4&ns=mJrzTTF2EMHMP-bAzbr9Wx8Q&rqh=1&cnr=14&ratebypass=yes&dur=37.848&lmt=1727722223259106&lmw=1&fexp=24350590,24350737,24350827,24350961,24350977,24350978,24351082,24351130,24351132,24351183,51326932&c=TVHTML5&sefc=1&txp=5530434&n=E7dIMqozw8EgIw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAJpsivNu6Vd1p_0dWBI95Hir_Zu8UznDvFIKFGGlCwqpAiA-YKS-F7u7K8tWO2o2IvJU2T6oPhbRtUECzfm4XfGILQ%3D%3D&rm=sn-gjo-w43s7e,sn-ab5el77z&rrc=79,104&req_id=44bc5328d184a3ee&rms=rdu,au&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&met=1739727581,&mh=LM&mip=2405:201:c046:71ea:9539:19da:2294:4927&mm=29&mn=sn-gwpa-h55k&ms=rdu&mt=1739726946&mv=u&mvi=4&pcm2cms=yes&pl=52&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl,rms&lsig=AGluJ3MwRAIgMy_-4g6ZSFBJlosc7TCvy-arTxe7iCx3dSGA5s58OasCIBfUXG5hFjy5Utw2TZ1BgZ80bYdRhDyqJJE9ZSTx4gJ5"}
        data={NothingData}
        linkTo={`/nothing/`}
      />
    </Row>
   </Container>
  )
}

export default NotingView
