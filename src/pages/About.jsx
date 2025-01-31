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
      <div className="flex-row items-center justify-items-center tablet:flex tablet:flex-row-reverse lapt:mx-10">
        <div className="ml-8 mr-8 mt-7">
          <div className="text-2xl font-bold mobL:ml-3 tablet:text-3xl lapt:text-4xl">
            Something
          </div>
          <div className="text-justify tablet:text-xl lapt:text-2xl">
            Integer convallis, felis vel cursus finibus, ligula ipsum viverra
            arcu, ut venenatis eros urna at tellus. Maecenas aliquam mauris vel
            augue consequat dictum. Sed dictum mauris et nibh ullamcorper
            efficitur. Mauris sit amet nisl quis quam accumsan dapibus quis a
            libero. Cras quis laoreet erat, a lacinia arcu. Nunc non ipsum id
            tellus porta semper vel vitae risus. Nam pretium nunc nisl, id
            vulputate leo imperdiet vel. Sed imperdiet a purus quis porttitor.
            Pellentesque porta viverra risus, quis consectetur tortor malesuada
            a. Etiam interdum, arcu a sollicitudin suscipit, lorem turpis
            convallis ligula, sit amet iaculis risus lorem eu mi.
          </div>
        </div>
        <img
          className="mt-7 h-48 w-auto self-center pl-3 mobL:h-52 tablet:mr-5 tablet:h-60 lapt:h-64"
          src="/small-about.jpg"
        ></img>
      </div>
    </div>
  );
}
