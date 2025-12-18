import UniImage from "../../assets/images/uni-image.svg?react";

const PageNavigation = () => {
  return (
    <nav className="navigations">
      <div className="nav_logo">
        <UniImage />
      </div>
      <menu className="nav_links">
        <li>
          <a href="home" id="home">
            Home
          </a>
        </li>
        <li>
          <a href="about" id="about">
            About Us
          </a>
        </li>
        <li>
          <a href="courses" id="courses">
            Courses
          </a>
        </li>
        <li>
          <a href="pages" id="pages">
            Pages
          </a>
        </li>
        <li>
          <a href="blog" id="blog">
            Blog
          </a>
        </li>
        <li>
          <a href="contact" id="contact">
            Contact
          </a>
        </li>
      </menu>
      <div>
        <button className="btn-primary">Create Account</button>
      </div>
    </nav>
  );
};

export { PageNavigation };
