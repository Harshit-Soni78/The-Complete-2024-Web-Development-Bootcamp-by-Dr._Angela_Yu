const Year = new Date().getFullYear()

function Footer() {

  return (
    //4. Create a Footer.jsx component that renders a <footer> element
    //to show a copyright message in a <p> with a dynamically updated year.
    <footer>
        <p>Copyright © {Year}. All right reserved.</p>
    </footer>
  );
}

export default Footer;
