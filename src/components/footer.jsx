import logo from "../assets/images/logo.svg";


const Footer = () => {
    return ( 
        <>
            <div className="footer">
                <div className="wrapper">
                    <div className="footer-items">
                        <img src={logo} alt="" />
                        <h2>ООО «АСГАРД», г. Москва, ул. Земляной вал, д. 8<br /> ИНН 5001117667 ОГРН 1175053020130</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Footer;