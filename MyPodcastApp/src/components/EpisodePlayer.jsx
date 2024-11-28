import PropTypes from 'prop-types';
import EpisodePlayer from './EpisodePlayer';

const SeasonList = ({ seasons }) => {
  return (
    <div>
      {seasons.map((season) => (
        <div key={season.id}>
          <h3>{season.title}</h3>
          {/* Conditionally render EpisodePlayer if season.episodes is defined */}
          {season.episodes && season.episodes.length > 0 ? (
            <EpisodePlayer episodes={season.episodes} />
          ) : (
            <p>No episodes available.</p>
          )}
        </div>
      ))}
    </div>
  );
};

SeasonList.propTypes = {
  seasons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      episodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          file: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default SeasonList;
