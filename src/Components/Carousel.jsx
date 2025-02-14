import Carousel from 'react-bootstrap/Carousel';


function DasCarousel() {
    return (
        <Carousel data-bs-theme="dark" style={{ height:' 80vh'}}>
            <Carousel.Item classname="text-white">
                <img
                    className="d-block w-100"
                    src="https://images.samsung.com/in/smartphones/galaxy-s25/buy/kv_group_PC_v3.jpg?imbypass=true"
                    alt="First slide" style={{ height: ' 80vh' }}
                />
                <Carousel.Caption classname="text-white" style={{color:'white'}}>
                    <h5 >bdsjhfgdb</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <button style={{}}>view more</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.samsung.com/in/smartphones/galaxy-s25/buy/kv_group_PC_v3.jpg?imbypass=true"
                    alt="Second slide" style={{ height: ' 80vh' }}
                />
                <Carousel.Caption style={{ color: 'white' }}>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.samsung.com/in/smartphones/galaxy-s25/buy/kv_group_PC_v3.jpg?imbypass=true"
                    alt="Third slide" style={{ height: ' 80vh' }}     
                />
                <Carousel.Caption style={{ color: 'white' }}    >
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