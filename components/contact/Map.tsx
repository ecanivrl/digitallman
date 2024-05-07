import React from "react";

const Map = () => {
  return (
    <div className="my-8 w-full">
      <iframe
        className="h-60 w-full rounded-lg md:h-96"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24066.382569881127!2d28.96825841443404!3d41.062482215916106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab685c86f5979%3A0x2519479e0fb398da!2zxZ5pxZ9saS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1715111371656!5m2!1str!2str"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer"
      ></iframe>
    </div>
  );
};

export default Map;
