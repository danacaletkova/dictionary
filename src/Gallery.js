import React from "react";

export default function Gallery(props) {
  if (props.photos) {
    return (
      <section className="Gallery p-2">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 p-1" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid rounded"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
