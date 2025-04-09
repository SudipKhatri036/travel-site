function Section({ children, styleClass }) {
  return (
    <section
      className={`max-w-7xl mx-auto py-6 px-4 md:py-8 md:px-6 ${
        styleClass ? styleClass : ""
      }`}
    >
      {children}
    </section>
  );
}

export default Section;
