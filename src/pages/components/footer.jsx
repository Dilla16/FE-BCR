import LogoCarRental from "./../../assets/image/Logo.png";
// import ChevronDown from "./assets/icon/ChevronDown.png";
import IconFacebook from "./../../assets/icon/IconFacebook.png";
import IconInstagram from "./../../assets/icon/IconInstagram.png";
import IconTwitter from "./../../assets/icon/IconTwitter.png";
import IconMail from "./../../assets/icon/IconMail.png";
import IconTwitch from "./../../assets/icon/IconTwitch.png";

function Footer(props) {
  const menus = [
    {
      link: "",
      lable: "Our Services",
    },
    { link: "", lable: "Why Us" },
    { link: "", lable: "Testimonial" },
    {
      link: "",
      lable: "FAQ",
    },
  ];
  const FooterAddress = ["Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000", "binarcarrental@gmail.com", "081-233-334-808"];
  const FooterIcon = [IconFacebook, IconInstagram, IconTwitter, IconMail, IconTwitch];

  return (
    <footer className="container max-w-5xl mx-auto flex flex-row my-8 py-6 ">
      <div className="grid grid-cols-4 space-x-10">
        <div className="space-y-3">
          {FooterAddress.map((val, index) => {
            return (
              <div className="flex">
                <div
                  className="text-xs"
                  key={index}
                >
                  {val}
                </div>
              </div>
            );
          })}
        </div>
        <div className="space-y-3">
          {menus.map((val, index) => {
            return (
              <div className="flex">
                <a
                  className="text-xs"
                  key={index}
                  href={val.link}
                >
                  {val.lable}
                </a>
              </div>
            );
          })}
        </div>
        <div className="grid grid-rows">
          <p className="text-sm font-light">Connect with us</p>
          <div className="flex flex-row space-x-5 ">
            {FooterIcon.map((val, index) => {
              return (
                <div className="">
                  <div key={index}>
                    <img src={val} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-rows">
          <p className="text-sm font-light">Copyright Binar 2022</p>
          <img src={LogoCarRental} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
