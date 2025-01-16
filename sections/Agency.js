import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT AGENCY" /> <br />
            <br />
            <Title
              title="The last digital agency you will ever need!"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Turning your business ideas into smart digital products since 2001" />
              <p className="desc-p">
                We specialize in transforming innovative concepts into
                cutting-edge digital solutions that drive success. With over two
                decades of experience, we combine technical expertise, creative
                design, and a customer-focused approach to deliver products that
                meet and exceed your expectations. Whether you're looking to
                launch a new app, streamline your operations, or create a
                seamless digital experience for your customers, our team is here
                to make it happen. Let us bring your vision to life with smart,
                scalable, and impactful digital solutions.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">4+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">30+</h1>
                  <h3>Successful Projecects</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">5+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/s1.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/s4.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                At The4Coders, our mission is to empower businesses by
                delivering innovative, scalable, and user-centric technology
                solutions. We are committed to turning bold ideas into reality,
                leveraging cutting-edge tools and expertise to help our clients
                thrive in the digital age. By focusing on creativity,
                collaboration, and excellence, we aim to bridge the gap between
                technology and business needs, driving growth, efficiency, and
                success for organizations of all sizes. Together, let's build a
                future powered by innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Brand /> */}
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
