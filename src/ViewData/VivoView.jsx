import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { VivoData } from '../Data/VivoData';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';

function VivoView() {
  return (
   <Container fluid>
      <Row className='p-0'>
        <Sidenav/>

        <ZviewData
        videoUrl={"https://rr3---sn-gwpa-h55y.googlevideo.com/videoplayback?expire=1739749714&ei=8iSyZ93IJOq3kucPuuyxuA4&ip=46.203.32.24&id=o-AKD-K3b-S9Kc0HYxosOPkmNcbxMLnBwUpDhuUeSsLx1D&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AUWDL3y81Kp1GfM-_TFuHVnl4hBA_Ie78SoCG0CSH61qn7jB7MCuqpCXxgBx6lAIXAJ5kqTTIFYQw5tg&spc=RjZbSeWfmMBH0zpTqTdmaynpyipa3XhkFWNdjg9pitVA61lBvKH0pyXpui4pTQ2sjw&vprv=1&svpuc=1&mime=video%2Fmp4&ns=2yCQDZZW-5G6hNNNvvwj8x0Q&rqh=1&gir=yes&clen=846543&ratebypass=yes&dur=15.069&lmt=1733355831785036&lmw=1&fexp=24350590,24350737,24350827,24350961,24350977,24350978,24351082,24351093,24351132,24351147,24351183,24351201,51326932&c=TVHTML5&sefc=1&txp=5319224&n=c00sFpob_ncRgg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhAL9GnYog3G3nfANMq6EqAp3xrJxUKq8V--JhcN5KC60wAiEAyPvlVuLnCQ2ZIsMoiMFaGF36pwlRTSQHBtm_4Qpmj_A%3D&rm=sn-p5qee676&rrc=104,80&req_id=ac4f5a414eaca3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-gwpa-itqes7z&cms_redirect=yes&cmsv=e&met=1739728118,&mh=Eh&mip=2405:201:c046:71ea:9539:19da:2294:4927&mm=29&mn=sn-gwpa-h55y&ms=rdu&mt=1739727658&mv=m&mvi=3&pl=52&rms=rdu,au&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRQIgLdIMda2dPbiWM-3exwkqL94BcBHUc8mxsp1MNdOekkwCIQCQrpDHxjxz49USIVn_cFG5uN3DQ1UKS_NUbAQ6eAhjyQ%3D%3D"}
          data={VivoData}
          linkTo={`/vivo/`}
        />

      </Row>
   </Container>
  )
}

export default VivoView

