/** @format */

import React from "react";

const LeftC: React.FC = () => {
  return (
    <div className='col-3'>
      <h3>
        <i className='fas fa-user icon'></i>Contact
      </h3>
      <hr />
      <h6 style={{ margin: "10px auto" }}>Address</h6>
      <p style={{ marginTop: "-6px" }}>Sasaram, India 821104</p>
      <h6>Phone</h6>
      <p style={{ marginTop: "-6px" }}>+917355374024</p>
      <h6>E-mail</h6>
      <p style={{ marginTop: "-6px" }}>nksharmassm1999@gmail.com</p>
      <h6>Linkedin</h6>
      <a
        style={{ marginTop: "-10px", textDecoration: "none" }}
        href='https://linkedin.com/in/1999nandkis
horsharma'>
        1999nandkishorsharma
      </a>
      <h6 style={{ margin: "10px auto" }}>Git</h6>
      <a
        style={{ marginTop: "-10px", textDecoration: "none" }}
        href='https://github.com/nksharma1999'>
        {" "}
        nksharma1999
      </a>
      <h6 style={{ margin: "10px auto" }}>live application</h6>
      <a
        style={{ marginTop: "-10px", textDecoration: "none" }}
        href='https://nksharma.pythonanywhere.com/login/?next=/'>
        Web Page
      </a>
      <h3 style={{ margin: "10px auto" }}>
        {" "}
        <i className='fas fa-laptop-code icon'></i>Programing
      </h3>
      <p>C, C++, JavaScript, TypeScript, Java, Python & C#</p>

      <h3>
        {" "}
        <i className='fas fa-users-cog icon'></i>Skills
      </h3>
      <p>
        React.js, Node.js, Redux.js, Express.js, Socket.io, Socket.io-client,
        Bootstrap5, CSS3, HTML5, SQL, Mongodb & Power BI
      </p>

      <h3>
        <i className='fab fa-git-square icon'></i>Tools
      </h3>
      <p>Git, Jira & VSCode</p>
      <h3>Interests</h3>
      <p style={{ margin: "-2px auto" }}>Full Stack Web Development</p>
      <p style={{ margin: "-2px auto" }}>Api Development</p>
      <p style={{ margin: "-2px auto" }}>Machine Learning</p>
    </div>
  );
};

export default LeftC;
