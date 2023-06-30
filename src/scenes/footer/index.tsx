import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary-500 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Don't wait any longer—start your transformation with us and achieve
            the results you've always dreamed of
          </p>
          <p className="text-primary-100">© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">link 1</p>
          <p className="my-5">link 2</p>
          <p>link 3</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">street A, locality B, City C, State, Country</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
