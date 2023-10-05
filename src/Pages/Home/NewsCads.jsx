import { Link } from "react-router-dom";


const NewsCads = ({news}) => {
    const {title, image_url, details,_id} = news;
    return (
        <div className="card  mb-16 ">
  <figure><img className="" src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    {
        details.length > 200 ?<p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-black font-semibold hover:underline">Reed More...</Link></p> : <p>{details}</p>
    }
    
  </div>
</div>
    );
};

export default NewsCads;