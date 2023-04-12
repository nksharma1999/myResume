/** @format */

const RightC: React.FC = () => {
  return (
    <div className='col-8'>
      <h4>
        <i className='fas fa-briefcase icon'></i>Work Experience
      </h4>
      <hr />
      <div className='row'>
        <div className='col-2'>
          <h6>01-2022 - Current</h6>
        </div>
        <div className='col-10'>
          <h6>SACADA Expert</h6>
          <p style={{ marginTop: "-10px" }}>Suzlon Energy, Pune</p>
          <p style={{ fontWeight: "500", marginTop: "-10px" }}>
            Real time data monitoring and decision making web application.
          </p>
          <ul style={{ marginTop: "-10px" }}>
            <li>
              Used React.js to create a single-page web solution from scratch.
            </li>
            <li>
              Designed a login page and a dashboard that displays both historic
              and real-time data.
            </li>
            <li>
              Utilized TypeScript, HTML, SQL, and Bootstrap to develop the
              real-time data monitoring webpage.
            </li>
            <li>
              Implemented Socket.IO to enable real-time data updates and
              communication between the client and server.
            </li>
            <li>
              Created a Node and Express-based REST API to handle all frontend
              requests.
            </li>
            <li>Implemented JWT for authentication and authorization.</li>
          </ul>
        </div>

        <div className='row'>
          <div className='col-2'>
            <h6>09-2021 - 01-2022</h6>
          </div>
          <div className='col-10'>
            <h6>GET-IT</h6>
            <p style={{ marginTop: "-10px" }}>Suzlon Energy, Pune</p>
            <p style={{ fontWeight: "500", marginTop: "-10px" }}>
              Fetch OPC UA real-time data.
            </p>
            <ul style={{ marginTop: "-10px" }}>
              <li>
                Developed a C# Console Client application to fetch real-time
                Turbine data from an OPC UA server and posted it to a Node-based
                REST API.
              </li>
              <li>
                Implemented MultiThreading and MultiProcessing concepts in the
                application.
              </li>
              <li>
                Designed a common application for real-time data monitoring and
                analysis.
              </li>
            </ul>
          </div>
        </div>

        <h4>
          {" "}
          <i className='fas fa-graduation-cap icon'></i>Education
        </h4>
        <hr />
        <div className='row'>
          <div className='col-2'>
            <h6>2017 - 2021</h6>
          </div>
          <div className='col-10'>
            <h6>Bachelor of Technology</h6>
            <p style={{ margin: "-5px auto" }}>
              Information Technology | MNNIT Allahabad{" "}
            </p>
            <p>CPI 7.52/10</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-2'>
            <h6>2015 - 2017</h6>
          </div>
          <div className='col-10'>
            <h6>XII </h6>
            <p style={{ margin: "-5px auto" }}>
              H S JAMUHAR DEHARI ROHTAS,BSEB
            </p>
            <p>65.40%</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-2'>
            <h6>2014 - 2015</h6>
          </div>
          <div className='col-10'>
            <h6>X</h6>
            <p style={{ margin: "-5px auto" }}>H S RAIPURCHORE ROHTAS , BSEB</p>
            <p>69.20%</p>
          </div>
        </div>
        <h4>
          <i className='fas fa-trophy icon'></i>Achievements
        </h4>
        <hr />
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-10'>
            <ul>
              <li>
                Achieved first place among 6 teams in Hackathon-Suzlon's Tech
                Fest for developing a robust turbine failure diagnosis solution.
              </li>
              <li>
                Received recognition for exceptional problem-solving skills on
                "HackerRank".
              </li>
              <li>Successfully solved over 300 DSA questions on LeetCode.</li>
            </ul>
          </div>
        </div>
        <h4>
          <i className='fas fa-certificate icon'></i>Certificates
        </h4>
        <div className='row'>
          <div className='col-2'>
            <h6>11-2022</h6>
          </div>
          <div className='col-10'>
            <h6>
              Web Development Bootcamp (65 Hours){" "}
              <a
                style={{ marginTop: "-10px", textDecoration: "none" }}
                id='cert'
                href='https://www.udemy.com/certificate/UC-c8bd20bf-b5d0-4d4d-aaaa-20aebf2be62b/'>
                Certificate
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightC;
