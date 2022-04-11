import { Fragment } from "react";

function NewsItem(props) {
  return (
    <Fragment>
      <div className="center" >
      <img src={props.data.Image} alt="Not found" />
      <h1>
        <small>{props.data.Id} </small> {props.data.Title}
      </h1>
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
