import influencerList from './InfluencerList';
import CardInfluencer from './CardInfluencer';

const Influencer = () => {
  function cardEntry(arrObj) {
    return (
      <CardInfluencer
        key={arrObj.id}
        title={arrObj.title}
        img={arrObj.img}
        url={arrObj.url}
      />
    );
  }

  return (
    <div className="list-of-Articles">{influencerList.map(cardEntry)}</div>
  );
};

export default Influencer;
