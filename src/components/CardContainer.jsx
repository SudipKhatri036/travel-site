function CardContainer({ children }) {
  return (
    <div className="rounded-lg border-[1px] border-border-secondary overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-all duration-200">
      {children}
    </div>
  );
}

export default CardContainer;
