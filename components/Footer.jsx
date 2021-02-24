import React from 'react'

const Footer = () => {
  const getDate = () => {
    const Today = new Date();
    return Today.getFullYear();
  };

  return (
    <footer>
      <div className="container flex">
        <div className="text-cont">
          <h2>Peter</h2>
          <p>Life is good when you focus on brighter things</p>
          <div className="links">
            <a
              rel="noreferrer"
              dangerouslySetInnerHTML={{ __html: '' }}
              className="facebook"
              href="https://facebook.com"
              aria-label="facebook"
              target="_blank"
            />
            <a
              rel="noreferrer"
              dangerouslySetInnerHTML={{ __html: '' }}
              className="instagram"
              href="https://instagram.com"
              aria-label="instagram"
              target="_blank"
            />
            <a
              rel="noreferrer"
              dangerouslySetInnerHTML={{ __html: '' }}
              className="linkedin"
              href="https://linkedin.com"
              aria-label="linkedin"
              target="_blank"
            />
            <a
              rel="noreferrer"
              dangerouslySetInnerHTML={{ __html: '' }}
              className="github"
              href="https://github.com"
              aria-label="github"
              target="_blank"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container flex">
          <p>
            ©
            {' '}
            {getDate()}
            {' '}
            Copyright. Developed by Peter Paul Villarino
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
