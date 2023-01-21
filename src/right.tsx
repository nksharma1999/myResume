const RightC: React.FC = () => {
  return (
    <div className="col-8">
      <h4>
        <i className="fas fa-briefcase icon"></i>Work Experience
      </h4>
      <hr />
      <div className="row">
        <div className="col-2">
          <h6>01-2022 - Current</h6>
        </div>
        <div className="col-10">
          <h6>SACADA Expert</h6>
          <p>Suzlon Energy, Pune</p>
          <p style={{ fontWeight: "500" }}>
            {" "}
            Real time data monitoring and decision making web application
          </p>
          <ul>
            <li>
              Used React.js for single page web solution. i have created from
              scratch.
            </li>
            <li>Login page, Dashboard (display historic and real-time data)</li>
            <li>
              Used typeScript, HTML, SQL & Bootstrap to develop real-time data
              monitoring webpage.
            </li>
            <li>
              Created Node and Express based Rest API to handle all frontend
              request. Used JWT for authentication and authorization.
            </li>
          </ul>
        </div>

        <div className="row">
          <div className="col-2">
            <h6>09-2021 - 01-2022</h6>
          </div>
          <div className="col-10">
            <h6>GET-IT</h6>
            <p>Suzlon Energy, Pune</p>
            <p style={{ fontWeight: "500" }}>Fetch OPC UA real-time data</p>
            <ul>
              <li>
                Created a C# Console Client application for fetching real-time
                Turbine data from OPC UA server andposted it into the Node based
                rest API.
              </li>
              <li>
                Created a common application for real-time data monitoring
                andanalysis.
              </li>
              <li>Concepts used: MultiThreading and MultiProcessing.</li>
            </ul>
          </div>
        </div>

        <h4>
          {" "}
          <i className="fas fa-graduation-cap icon"></i>Education
        </h4>
        <hr />
        <div className="row">
          <div className="col-2">
            <h6>2017 - 2021</h6>
          </div>
          <div className="col-10">
            <h6>Bachelor of Technology</h6>
            <p style={{ margin: "-5px auto" }}>
              Information Technology | MNNIT Allahabad{" "}
            </p>
            <p>CPI 7.52/10</p>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <h6>2015 - 2017</h6>
          </div>
          <div className="col-10">
            <h6>XII </h6>
            <p style={{ margin: "-5px auto" }}>
              H S JAMUHAR DEHARI ROHTAS,BSEB
            </p>
            <p>65.40%</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <h6>2014 - 2015</h6>
          </div>
          <div className="col-10">
            <h6>X</h6>
            <p style={{ margin: "-5px auto" }}>H S RAIPURCHORE ROHTAS , BSEB</p>
            <p>69.20%</p>
          </div>
        </div>
        <h4>
          <i className="fas fa-trophy icon"></i>Achievements
        </h4>
        <hr />
        <div className="row">
          <div className="col-2"></div>
          <div className="col-10">
            <ul>
              <li>
                Won among 6 teams in Hackathon-Suzlon’s Tech Fest for Robust
                Turbine Failure Diagnosis.
              </li>
              <li>Highly appreciated in problem solving on “HackerRank”</li>
              <li>Solved more than 300+ DSA questions on leetcode.</li>
            </ul>
          </div>
        </div>
        <h4>
          <i className="fas fa-certificate icon"></i>Certificates
        </h4>
        <div className="row">
          <div className="col-2">
            <h6>11-2022</h6>
          </div>
          <div className="col-10">
            <h6>Web Development Bootcamp (65 Hours)</h6>
            <label htmlFor="cert" style={{ margin: "auto 10px" }}>
              Link{" "}
            </label>
            <a
              id="cert"
              href="https://www.udemy.com/certificate/UC-c8bd20bf-b5d0-4d4d-aaaa-20aebf2be62b/"
            >
              Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightC;
