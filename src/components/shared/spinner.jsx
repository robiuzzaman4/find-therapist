const Spinner = () => {
  return (
    <div className="absolute inset-0 bg-ft-white min-h-screen grid place-items-center z-50">
      <div className="h-6 w-6 rounded-full border-2 border-ft-blue-500 border-dashed animate-spin" />
    </div>
  );
};

export default Spinner;
