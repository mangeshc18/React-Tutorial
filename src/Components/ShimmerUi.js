export const Shimmer = () => {
  return (
    <div className="shimmer">
      <div className="shimmer-container">
        <div className="shimmer-card"></div>
        <div className="shimmer-text"></div>
        <div className="shimmer-text"></div>
        <div className="shimmer-text"></div>
      </div>
    </div>
  );
};

export const YourComponent = () => {
    // Render 10 instances of the Shimmer component
    return (
      <div className="main">
        {[...Array(10)].map((_, index) => (
          <Shimmer key={index} />

        ))}
      </div>
    );
  };

