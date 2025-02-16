import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MotorData } from "../Data/MotoData";
import ZviewData from "./ZviewData";
import Sidenav from '../Components/Sidenav';
import { NewMotoData } from "../Data/NewMotoData";


function Motoview() {
  return (
    <Container fluid>
    <Row className="p-0">
      <Sidenav/>

      <ZviewData
      videoUrl={"https://rr5---sn-npoe7nsk.googlevideo.com/videoplayback?expire=1739748680&ei=6CCyZ5XiH7y_vcAPgqGKcQ&ip=2001%3A4451%3A4319%3A2600%3Ada35%3A9fc4%3Ad508%3A8e91&id=o-ABAnxBFt8cgL3Ha5lcyMUWyMoCmn6vmbFgO_43L9244G&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AUWDL3ywXhOvGQURT3N8m4wIjH-J7DqDfg1v3GIv36LdJMs2FCQa96eqLSIWKP-Je5DbJOuSF9Y9igfP&spc=RjZbSTn7Z6DCv5R6IE-w_JTftO5B9H-rGSWBqGdbVeKOMA8bi7MPtjJWfQz9xsUC0w&vprv=1&svpuc=1&mime=video%2Fmp4&ns=okh4OyjL32ubs4rTxvduhAEQ&rqh=1&gir=yes&clen=1126495&ratebypass=yes&dur=15.061&lmt=1728750257692543&fexp=24350590,24350737,24350827,24350961,24350977,24350978,24351082,24351129,24351132,24351184,51326932,51331020&c=MWEB&sefc=1&txp=5530434&n=YiQuzJaipoBv5Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRAIgZvrAl3bRhyu1wgnkac7wf9Mx3axOjnrFtc_h58dFFa4CIEIZmMRysiYEk-AoaQ3Z35LqpLVW3dAYjoZnJNWvL4eS&title=motorola%20edge%2050%20ultra&rm=sn-2aqu-hoasd7s,sn-hoal7l&rrc=79,104,80&req_id=ef9b20c83736a3ee&ipbypass=yes&redirect_counter=3&cm2rm=sn-h55ld7s&cms_redirect=yes&cmsv=e&met=1739727093,&mh=Cu&mip=2405:201:c046:71ea:9539:19da:2294:4927&mm=34&mn=sn-npoe7nsk&ms=ltu&mt=1739726909&mv=m&mvi=5&pl=52&rms=ltu,au&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRAIgJnaCExKhIFuh6S0kuVhAqGXcYx6DwQCPtiWjSq3K66cCIGZNcQfT5ZfnM5EBuOtbyEgPG-AZE9GQhwD3tl35kRKa"}
        data={NewMotoData}
        linkTo={'/moto/'}
      />

    </Row>
  </Container>
  );
}

export default Motoview;
