import Carousel from 'react-bootstrap/Carousel';


function DasCarousel() {
    return (
        <Carousel data-bs-theme="dark" style={{ height: '80vh' }}>
            <Carousel.Item className="text-white">
                <video
                    className="d-block w-100"
                    src="https://images.samsung.com/is/content/samsung/assets/in/smartphones/galaxy-s25-ultra/buy/02_Color_Group_Online-Exclusive-KV_video_PC.mp4" 
                    alt="First slide"
                    style={{ height: '80vh' }}
                    autoPlay
                    loop
                    muted
                />
                <Carousel.Caption className="text-white" style={{ color: 'white' }}>
                    <h5>bdsjhfgdb</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <button className="btn btn-danger">View More</button>
                </Carousel.Caption>
            </Carousel.Item>
    
            <Carousel.Item>
                <video
                    className="d-block w-100"
                    src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/activity/1738905116832/zip/img/pc/color1.webm"  
                    alt="Second slide"
                    style={{ height: '80vh' }}
                    autoPlay
                    loop
                    muted
                />
                <Carousel.Caption style={{ color: 'white' }}>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
    
            <Carousel.Item>
                <video
                    className="d-block w-100"
                    src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1738142530699/zip/img/iqoo13-tvc-video1-lg.webm"  
                    alt="Third slide"
                    style={{ height: '80vh' }}
                    autoPlay
                    loop
                    muted
                />
                <Carousel.Caption style={{ color: 'white' }}>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
    
}

export default DasCarousel;