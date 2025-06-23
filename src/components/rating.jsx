const FullStar = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#080808">
    <path d="M12 .587l3.668 7.57L24 9.75l-6 5.832 1.416 8.257L12 18.896 
      4.584 23.84 6 15.584 0 9.75l8.332-1.593L12 .587z" />
  </svg>
);

const HalfStar = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="halfGrayGradient">
        <stop offset="50%" stopColor="#080808" />
        <stop offset="50%" stopColor="#d1d2d4" />
      </linearGradient>
    </defs>
    <path
      fill="url(#halfGrayGradient)"
      d="M12 .587l3.668 7.57L24 9.75l-6 5.832 
        1.416 8.257L12 18.896 4.584 23.84 
        6 15.584 0 9.75l8.332-1.593L12 .587z"
    />
  </svg>
);

const EmptyStar = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#d1d2d4">
    <path d="M12 .587l3.668 7.57L24 9.75l-6 5.832 1.416 8.257L12 18.896 
      4.584 23.84 6 15.584 0 9.75l8.332-1.593L12 .587z" />
  </svg>
);

function rating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {Array(fullStars).fill().map((_, i) => <FullStar key={`f-${i}`} />)}
      {hasHalfStar && <HalfStar key="half" />}
      {Array(emptyStars).fill().map((_, i) => <EmptyStar key={`e-${i}`} />)}
    </div>
  );
}
export default rating;