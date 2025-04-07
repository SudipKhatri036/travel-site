function Section({ children, styleClass }) {
  return (
    <section
      className={`max-w-7xl mx-auto py-8 px-6 ${styleClass ? styleClass : ""}`}
    >
      {children}
    </section>
  );
}

export default Section;
