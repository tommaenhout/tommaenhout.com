export const createSkillsDot = (): void => {
  const skillsDotted = document.querySelectorAll(".skills-list.dotted .progress");
  
  skillsDotted.forEach((skill) => {
    skill.insertAdjacentHTML(
      "beforeend",
      '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
    );
    
    const percentage = skill.getElementsByClassName("percentage")[0] as HTMLElement;
    
    percentage.insertAdjacentHTML(
      "beforeend",
      '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
    );
    
    const width = skill.clientWidth;
    const da = percentage.getElementsByClassName("da")[0] as HTMLElement;
    da.style.width = `${width}px`;
  });
};

export const dotResize = (): void => {
  window.addEventListener("resize", () => {
    const skillsDotted = document.querySelectorAll(".skills-list.dotted .progress");
    
    skillsDotted.forEach((skill) => {
      const width = skill.clientWidth;
      const da = skill.getElementsByClassName("da")[0] as HTMLElement;
      da.style.width = `${width + 1}px`;
    });
  });
};
