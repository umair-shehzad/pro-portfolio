import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/umairshehzad_">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/umair-shehzad-307836234/">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/umairshehzad_">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
