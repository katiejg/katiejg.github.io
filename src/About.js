import './App.css';

function About() {
  return (
    <div className="About">
      <body>
        <div className="Section">
          <p>Computer engineering undergraduate at Northwestern University, interested in both software and hardware. Originally from the Greater Boston area.
          Also interested in language learning and environmentalism. Contact: KatieJiang[at]u.northwestern.edu</p>
          <p>Below is a detailed version of my resume.</p>
        </div>
        <hr />
        <div className="Section Resume">
          <h3 id="edu">Education</h3>
          <h4>Northwestern University</h4>
          <p>September 2023 - Anticipated June 2027 (Evanston, IL)
          <br/>Major: Computer Engineering, BS
          <br/>Relevant Coursework: Intro to Electrical Engineering, Intro to Computer Engineering, Fundamentals of Programming II (C/C++), Data Structures and Algorithms</p>
          <br />
          <h3 id="exp">Experience</h3>
          <h4>VAK Sustainable Computing Lab | Undergraduate Researcher</h4>
          <p>September 2024 - Present (Evanston, IL)</p>
          <ul>
            <li>Contributing to the biodegradable packaging project</li>
          </ul>
          <br />
          <h4>Electrical and Computer Engineering (ECE) Undergraduate Teaching Labs | Lab Aide</h4>
          <p>October 2023 - Present (Evanston, IL)</p>
          <ul>
            <li>Assembling parts kits requested by ECE professors for classroom instruction</li>
            <li>Inventorying IC chips, resistors, capacitors, and other electronic components</li>
            <li>Updating and troubleshooting classroom computers and testing equipment</li>
          </ul>
          <br />
          <h4>Northwestern IEEE Student Branch | Marketing Lead</h4>
          <p>February 2024 - Present (Evanston, IL)</p>
          <p>As Technical Program 2024 Participant:</p>
          <ul>
            <li>Built an Arduino-controlled braille display</li>
            <li>Collaborated on the hardware side of the team</li>
            <li>Won “Most Innovative” at the 2024 Technical Program Student Showcase</li>
          </ul>
          <br />
          <h4>Chinese Progressive Association | Chinese Youth Initiative Intern</h4>
          <p>July 2021 - August 2021 (Boston, MA)</p>
          <ul>
            <li>Participated in group discussions on Asian-American history to guide community development</li>
            <li>Hosted an educational activity about the Yes On 1 campaign to Chinatown residents</li>
            <li>Produced campaign materials such as postcards and an informational video</li>
          </ul>
          <br />
          <h3 id="don">Skills</h3>
          <p>C/C++, HTML/CSS, JavaScript, MATLAB, Python, Arduino</p>
          <p>Adobe Photoshop/Illustrator/InDesign, DaVinci Resolve</p>
          <p>Microsoft 365, Google Workspace</p>
          <p>English (Native), French (Intermediate, B1)</p>
        </div>
      </body>
    </div>
  );
}

export default About;
