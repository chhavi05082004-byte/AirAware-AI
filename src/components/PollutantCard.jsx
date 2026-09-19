function PollutantCard({ name, value, unit, description }) {
  return (
    <div className="pollutant-card">
      <div className="pollutant-icon">
        {name.substring(0, 2)}
      </div>

      <div>
        <p>{name}</p>

        <h3>
          {value}
          <span> {unit}</span>
        </h3>

        <small>{description}</small>
      </div>
    </div>
  );
}

export default PollutantCard;