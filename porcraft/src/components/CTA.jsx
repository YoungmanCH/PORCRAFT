import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        CTA messages{" "}
        <br className="sm:block hidden" />
        CTA text
      </p>
      <Link to="/editor" className="btn">
        Get started!
      </Link>
    </section>
  );
};

export default CTA;