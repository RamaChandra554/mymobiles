import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { PixelData } from '../Data/PixelData';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';

function PixelView() {
  return (
    <Container fluid>
      <Row className='p-0'>
        <Sidenav />

        <ZviewData
        videoUrl={"https://rr2---sn-npoe7ne6.googlevideo.com/videoplayback?expire=1739749382&ei=piOyZ7ShGdeBkucPu4P_qAs&ip=46.203.32.24&id=o-AHHFITYZrbr3dLAcQR12wI7CishxSwn5T7u5EuREOcTT&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AUWDL3yaeHHOfwBSpUWBekUPksTXU1KQtOIdYHKi_28BnBi26VV-UVQDqolOG1TK0IyN67xyWOtvz4Yr&spc=RjZbSQZTb0ahi_C2YwzapuMAFlkrQpWHISVQ2WkI0L2BnqKhCQ2rVTkMlsgYt6BIVZnL&vprv=1&svpuc=1&mime=video%2Fmp4&ns=Y_G7bjbAduEYuSDLVancYIIQ&rqh=1&gir=yes&clen=1495484&ratebypass=yes&dur=20.074&lmt=1735013491703407&lmw=1&fexp=24350590,24350737,24350827,24350961,24350977,24350979,24351082,24351132,24351152,24351173,24351184,24351201,51326932&c=TVHTML5&sefc=1&txp=5430434&n=51SrCOLXmhA-7Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhANe7et-MOdk5DpJi33h8IM4IUdk-6_u73Z0UyckkPE8TAiASIqs0UpMyJMEo6X10pEBqLOUDDI1F90cny_k7P8E2zA%3D%3D&redirect_counter=1&cm2rm=sn-p5qee776&rrc=80&req_id=92d9e78f28c9a3ee&cms_redirect=yes&cmsv=e&met=1739727785,&mh=qz&mip=2405:201:c046:71ea:9539:19da:2294:4927&mm=34&mn=sn-npoe7ne6&ms=ltu&mt=1739727371&mv=u&mvi=2&pl=52&rms=ltu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRQIhALiqI4xhqKjGasp2I5pHeeCkuavITgUibUcdwg5lCHVdAiA6yNb2_NMQD3OSM_oPRFc8KiSebXPs76r7Ma4CxCke6A%3D%3D"}
          data={PixelData}
          linkTo={`/pixel/`}
        />
      </Row>
    </Container>
  )
}

export default PixelView

