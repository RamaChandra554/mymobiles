import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { RealmeData } from '../Data/RealmeData';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';

function RealmeView() {
  return (
    <Container fluid>
      <Row className='p-0'>
        <Sidenav />

        <ZviewData
        videoUrl={"https://rr5---sn-gwpa-h55e7.googlevideo.com/videoplayback?expire=1739749509&ei=JSSyZ6IZyMex8g_g5YuoAw&ip=69.30.76.208&id=o-AFKD55ffDgJs1MO_X_4CNBaMMOXKobckoS6puKCyQyEF&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&bui=AUWDL3xHn23eXml3nAbLyklgbN84hbraUWqxaWxpHJTHqo1lcvaW89iX5w_fJ66Q1qPfQQR3yybT_adp&spc=RjZbSW2htAIni5eS8bLHqHnRhFa9cmKcirAd4405oqsMpZ0c8VAqIfciHRc4ot9VAA&vprv=1&svpuc=1&mime=video%2Fmp4&ns=SretbVASgQv25imh3EdZoGQQ&rqh=1&gir=yes&clen=1191816&ratebypass=yes&dur=15.859&lmt=1730780507674587&lmw=1&fexp=24350590,24350737,24350827,24350961,24350977,24350979,24351063,24351082,24351132,24351183,51326932&c=TVHTML5&sefc=1&txp=5319224&n=Ii4_wvJERwRb6Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhAJhkcnRDs0K2Up5i8pVyBu1LKYiFtHtmiKt6hZ4hkFL2AiEA3KYlxch1z2x9sm5s3wA23_xDCHmIkkEoiTZ2mDNk4oY%3D&rm=sn-a5me7d7e&rrc=104,80&req_id=7eb32c6f9822a3ee&ipbypass=yes&met=1739727915,&redirect_counter=2&cm2rm=sn-gwpa-itqez7e&cms_redirect=yes&cmsv=e&mh=_3&mip=2405:201:c046:71ea:9539:19da:2294:4927&mm=29&mn=sn-gwpa-h55e7&ms=rdu&mt=1739727658&mv=m&mvi=5&pcm2cms=yes&pl=52&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl,rms&lsig=AGluJ3MwRQIhAIJ-JsQOoC250nwhwn8mFd8IjEL49p0laaWOpV_bi7A1AiBV88VQEdmsvvHdxWVB5JAjZwVQ9P7i-weMu5cNOImWtA%3D%3D"}
          data={RealmeData}
          linkTo={`/realme/`}
        />

      </Row>
    </Container>
  )
}

export default RealmeView

