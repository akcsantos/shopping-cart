export default function About() {
  return (
    <div>
      <div className="flex-row items-center justify-items-center tablet:flex lapt:mx-10">
        <div className="ml-8 mr-8 mt-7">
          <div className="text-2xl font-bold mobL:ml-3 tablet:text-3xl lapt:text-4xl">
            About Us
          </div>
          <div className="text-justify tablet:text-xl lapt:text-2xl">
            Duis bibendum mi ut odio placerat auctor. Sed ut ante diam.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Nullam dignissim ipsum eget tempor vulputate.
            Phasellus urna elit, porttitor non tincidunt vel, lobortis sed eros.
            Fusce malesuada velit lectus, sed bibendum enim bibendum nec.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae;
          </div>
        </div>
        <img
          className="mt-7 h-48 w-auto self-center pl-3 mobL:h-52 tablet:mr-5 tablet:h-60 lapt:h-64"
          src="/small-about.jpg"
        ></img>
      </div>
      {/* <div>
        <div className="ml-8 mr-8 mt-7 mobL:mr-1">
          <div className="text-2xl font-bold mobL:ml-3">About Us</div>
          <div className="text-justify">
            Duis bibendum mi ut odio placerat auctor. Sed ut ante diam.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae;
          </div>
        </div>
        <img
          className="mt-7 h-36 w-auto self-center pl-3"
          src="/small-about.jpg"
        ></img>
      </div> */}
    </div>
  );
}
