function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub"];

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <div className="skills__header">
          <p className="skills__eyebrow">Skills</p>

          <h2 className="skills__title">Herramientas que utilizo</h2>
        </div>

        <div className="skills__list">
          {skills.map((skill) => (
            <div className="skills__item" key={skill}>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
