function Card(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <img src={props.imgSrc} alt="avatar_img" />
      <p>{props.mobNum}</p>
      <p>{props.eMail}</p>
    </>
  );
}

const Data = {
  1: {
    name: "Beyonce",
    imgSrc:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    mobNum: "+123 456 789",
    eMail: "b@beyonce.com",
  },
  2: {
    name: "Jack Bauer",
    imgSrc:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    mobNum: "+987 654 321",
    eMail: "jack@nowhere.com",
  },
  3: {
    name: "Chuck Norris",
    imgSrc:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    mobNum: "+918 372 574",
    eMail: "gmail@chucknorris.com",
  },
};

function App() {
  return (
    <>
      <div>
        <h1>My Contacts</h1>

        {/* <Card
          name="Beyonce"
          imgSrc="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
          mobNum="+123 456 789"
          eMail="b@beyonce.com"
        /> */}

        {/* <Card
          name={Data[1].name}
          imgSrc={Data[1].imgSrc}
          mobNum={Data[1].mobNum}
          eMail={Data[1].eMail}
        /> */}

        {Object.values(Data).map((element, index) => (
          <Card
            key={index}
            name={element.name}
            imgSrc={element.imgSrc}
            mobNum={element.mobNum}
            eMail={element.eMail}
          />
        ))}

        {/* <h2>Beyonce</h2>
        <img
          src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
          alt="avatar_img"
        />
        <p>+123 456 789</p>
        <p>b@beyonce.com</p>

        <h2>Jack Bauer</h2>
        <img
          src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
          alt="avatar_img"
        />
        <p>+987 654 321</p>
        <p>jack@nowhere.com</p>

        <h2>Chuck Norris</h2>
        <img
          src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
          alt="avatar_img"
        />
        <p>+918 372 574</p>
        <p>gmail@chucknorris.com</p> */}
      </div>
    </>
    // If you're running this locally in VS Code use the commands:
    // npm install
    // to install the node modules and
    // npm run dev
    // to launch your react project in your browser
  );
}

export default App;
