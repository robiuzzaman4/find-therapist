const SectionTitle = ({ title, className }) => {
  return (
    <h4
      className={`text-xl text-ft-black font-medium leading-[30px] ${
        className && className
      }`}
    >
      {title}
    </h4>
  );
};

export default SectionTitle;
