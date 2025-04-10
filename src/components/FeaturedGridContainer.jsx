function FeaturedGridContainer({ children }) {
  return (
    <div className="mt-6 grid grid-cols-1 h-full xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 rounded-2xl gap-4">
      {children}
    </div>
  );
}

export default FeaturedGridContainer;
