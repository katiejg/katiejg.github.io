import './App.css';

function About() {
  return (
    <div className="About">
      <body>
        <div className="Section">
          <p>Hello! My name is Katie Jiang. Currently, I am a computer engineering undergraduate at Northwestern University, highly interested in both software and hardware. I am originally from the Greater Boston area.
          Besides computer engineering, I am also interested in language learning and environmentalism.</p>
          <p>Email: KatieJiang[at]u[dot]northwestern[dot]edu</p>
        </div>
        <hr />
        <div className="Section Resume">
          <h3 id="edu">Education</h3>
          <h4>Northwestern University</h4>
          <p>September 2023 - Anticipated June 2027
            <br />
            Major: Computer Engineering, BS
            <br/>
            Relevant Coursework: Intro to Computer Engineering, Intro to Electrical Engineering, Fundamentals of Programming II (C/C++), Data Structures and Algorithms, Multivariable Calculus for Engineers
            <br/>
            Honors: High Honors (Winter 2024)
          </p>
          <br />
          <h3 id="exp">Experience</h3>
          <h4>VAK Sustainable Computing Lab - Undergraduate Researcher</h4>
          <p>September 2024 - Present</p>
          <h4>Electrical and Computer Engineering Undergraduate Teaching Labs - Lab Aide</h4>
          <p>October 2023 - Present</p>
          <h4>Northwestern IEEE Student Branch - Design Lead</h4>
          <p>October 2024 - Present</p>
          <p>Technical Program 2024 Participant (February 2024 - May 2024)</p>
          <ul>
            <li>Built an Arduino-controlled braille display</li>
            <li>Contributed to the Hardware side of the team</li>
            <li>Won “Most Innovative” at the 2024 Technical Program Student Showcase</li>
          </ul>
          <h4>Chinese Progressive Association - Chinese Youth Initiative Intern</h4>
          <p>July 2021 - August 2021</p>
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
