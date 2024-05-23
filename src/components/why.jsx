import React from "react";

import "../css/why.css";

const Why = ({ data, images, headings, descriptions }) => {
  return (
    <>
      <div className="wrapper-4">
        <div className="col">
          <div id="cont" className="l-constrained-2">
            <div className="text-11">
              <div className="headline-4 group">
                <p className="information">Information.</p>
                <p className="text-12">Contact Us.</p>
              </div>
              <div className="description-5 group">
                <div className="information-description">
                  <p className="text-13">About us</p>
                  <p className="branches">Branches</p>
                  <p className="menu-2">Menu</p>
                  <p className="contact-2">Contact</p>
                  <p className="map">Map</p>
                </div>
                <div className="contact-description">
                  <p className="support">Support</p>
                  <p className="id-gmail-com">your_id@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="social-media">
              <div className="icon-3 group">
                <a href="">
                  <img
                    className="facebook-icon-double-click-to-edit"
                    src="images/facebook_icon_double_clic.png"
                    alt=""
                    width={11}
                    height={24}
                  />
                </a>
                <a href="">
                  <img
                    className="instagram-icon-double-click-to-edit"
                    src="images/instagram_icon_double_cli.png"
                    alt=""
                    width={23}
                    height={23}
                  />
                </a>
                <a href="">
                  <img
                    className="twitter-icon-double-click-to-edit"
                    src="images/twitter_icon_double_click.png"
                    alt=""
                    width={23}
                    height={19}
                  />
                </a>
                <a href="">
                  <img
                    className="youtube-icon-double-click-to-edit"
                    src="images/youtube_icon_double_click.png"
                    alt=""
                    width={23}
                    height={18}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="vector-smart-object-double-clik-to-edit-23"
          src="images/vector_smart_object_doubl_2.png"
          alt=""
        />
        <img
          className="vector-smart-object-double-click-to-edit-2"
          src="images/vector_smart_object_doubl_3.png"
          alt=""
          width={298}
          height={69}
        />
        <div className="group-8">
          <img
            className="vector-smart-object-double-clik-to-edit-24"
            src="images/vector_smart_object_doubl_4.png"
            alt=""
            width={77}
            height={99}
          />
          <img
            className="vector-smart-object-double-clik-to-edit-25"
            src="images/vector_smart_object_doubl_5.png"
            alt=""
            width={84}
            height={96}
          />
          <div className="design-4">
            <div className="vector-smart-object-double-clik-to-edit-26" />
            <img
              className="vector-smart-object-double-clik-to-edit-27"
              src="images/vector_smart_object_doubl_7.png"
              alt=""
              width={59}
              height={68}
            />
            <div className="l-unconstrained-2">
              <div id="shop" className="l-constrained-7">
                <img
                  className="vector-smart-object-double-clik-to-edit-28"
                  src="images/vector_smart_object_doubl_6.png"
                  alt=""
                  width={53}
                  height={59}
                />
                <img
                  className="vector-smart-object-double-clik-to-edit-29"
                  src="images/vector_smart_object_doubl_9.png"
                  alt=""
                  width={1241}
                  height={70}
                />
              </div>
            </div>
          </div>
          <div className="text-14">
            <div className="title">Our Branches</div>
            <div className="image group">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt=""
                  width={image.width}
                  height={image.height}
                />
              ))}
            </div>
            <div className="heading group">
              {headings.map((heading, index) => (
                <p key={index} className={heading.class}>
                  {heading.text}
                </p>
              ))}
            </div>
            <div className="description-6 group">
              {descriptions.map((description, index) => (
                <p key={index} className={description.class}>
                  {description.text}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="design-5">
          <img
            className="vector-smart-object-double-clik-to-edit-200"
            src="images/vector_smart_object_doubl_2.png"
            alt=""
          />
          <div id="about" className="l-constrained-3 group">
            <div className="col-3">
              <img
                className="vector-smart-object-double-clik-to-edit-30"
                src="images/vector_smart_object_doubl_13.png"
                alt=""
                width={53}
                height={59}
              />
              <img
                className="vector-smart-object-double-clik-to-edit-31"
                src="images/vector_smart_object_doubl_11.png"
                alt=""
                width={142}
                height={180}
              />
            </div>
            <div className="text-17">
              <div className="title-2">We are Open</div>
              <div className="description-7">
                <p className="text-19">Monday - Friday</p>
                <p className="text-20">10:00 am- 10:00 pm</p>
                <p className="text-21">Saturday and Sunday</p>
                <p className="text-22">10:00 am - 10:10 pm</p>
              </div>
            </div>
            <div className="col-4">
              <img
                className="vector-smart-object-double-clik-to-edit-32"
                src="images/vector_smart_object_doubl_12.png"
                alt=""
                width={124}
                height={143}
              />
              <img
                className="vector-smart-object-double-clik-to-edit-33"
                src="images/vector_smart_object_doubl_14.png"
                alt=""
                width={108}
                height={125}
              />
            </div>
          </div>
        </div>
        <div className="group-6">
          <div className="l-unconstrained">
            <div id="blog" className="l-constrained-4">
              <div className="title-3">Customer Reviews</div>
              <div className="row-5 group">
                <img
                  className="vector-smart-object-double-clik-to-edit-34"
                  src="images/vector_smart_object_doubl_17.png"
                  alt=""
                  width={125}
                  height={143}
                />
                <div className="col-18">
                  {data.map((item, index) => (
                    <div key={index}>
                      <img
                        src={item.image}
                        alt=""
                        width={item.imageWidth}
                        height={item.imageHeight}
                      />
                      <p className={item.nameClass}>{item.name}</p>
                      <p className={item.descriptionClass}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                  <img
                    className={data[0].vectorClass}
                    src={data[0].vectorImage}
                    alt=""
                    width={data[0].vectorWidth}
                    height={data[0].vectorHeight}
                  />
                </div>
                <img
                  className="vector-smart-object-double-clik-to-edit-36"
                  src="images/vector_smart_object_doubl_16.png"
                  alt=""
                  width={91}
                  height={114}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
