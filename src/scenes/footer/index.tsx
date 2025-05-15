import Logo from "@/assets/Logo.png";

const Footer = () => {
    return (
        <footer className="bg-primary-100  md:py-14 xs:py-2">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="pt-10 md:pt-0  xs:mt-10 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p className="xs:my-3 md:my-5">
                        Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                        purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                        orci ut habitant laoreet. Iaculis tristique.
                    </p>
                    <p>© Evogym All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 xs:mt-5 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="xs:my-1 md:my-5">  <a className="underline underline-offset-8 decoration-transparent transition duration-300 ease-in-out hover:decoration-yellow-500" href="#">Massa orci senectus</a> </p>
                    <p className="xs:my-1 md:my-5">  <a className="underline underline-offset-8 decoration-transparent transition duration-300 ease-in-out hover:decoration-yellow-500" href="#">Et gravida id et etiam</a> </p>
                    <p className="xs:my-1 md:my-5">  <a className="underline underline-offset-8 decoration-transparent transition duration-300 ease-in-out hover:decoration-yellow-500" href="#">Ullamcorper vivamus</a></p>
                </div>
                <div className="mt-16 basis-1/4 xs:mt-5 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="xs:my-1 md:my-5">Tempus metus mattis risus volutpat egestas.</p>
                    <p className="xs:my-1 md:my-5"><a className="underline underline-offset-8 decoration-yellow-500 hover:opacity-80 focus:outline-hidden focus:opacity-80" href="tel:+3334256825">(333)425-6825</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;