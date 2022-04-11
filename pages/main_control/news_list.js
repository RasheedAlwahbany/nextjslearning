import { Fragment } from "react";
import { useRouter } from "next/router";

function NewsItem(props) {
    const router=useRouter();
    function showDetails(){
       router.push('/news/'+props.data.Id);
    }
  return (
    <Fragment>
      <div className="center" >
      <img src={props.data.Image} alt="Not found" />
      <h1>
        <small>{props.data.Id} </small> {props.data.Title}
      </h1>
      <button onClick={showDetails}>Details</button>
      </div>
    </Fragment>
  );
}
export default function NewsList(props) {
  return (
    <ul>
      {props.newsData.map((data) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div>
            <NewsItem data={data} />
          </div>
        );
      })}
    </ul>
  );
}
