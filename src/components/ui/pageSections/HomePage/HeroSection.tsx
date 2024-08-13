import Container from "../../Container";

const HeroSection = () => {
  // https://medi.arenacommerce.com/cdn/shop/files/home7-slider-1_1296x.jpg?v=1613576934
  return (
    <Container className="my-10">
      <div>
        <div
        //   className={`bg-[url('../../../../assets/banner-img/banner-bg.webp')]`}
        >
          <div>
            <img src="../../../../assets/banner-img/banner-bg.webp"></img>
            <p>Pharmacy</p>
            <h1>The place where you can find all medications</h1>
            <p>
              We believe that improving both the occasional and ongoing
              engagement experience is necessary to making care dramatically
              better.
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </Container>
  );
};

export default HeroSection;
