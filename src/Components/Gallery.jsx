import "../Comp_css/Gallery.css";

function Gallery() {
  const images = import.meta.glob(
    "../assets/MCU_Gallery_img/*.{jpg,png,jpeg,webp}",
    { eager: true }
  );

  const imageList = Object.values(images).map((img) => img.default);

  return (
    <>
      <section className="four-hero">
        <h1>Gallery</h1>
        <h4>“Relive the moments that shook the universe.”</h4>
      </section>
      <div className="gallery">
        {imageList.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={src}
              alt={`gallery-${index}`}
              loading="lazy"
              onLoad={(e) => e.target.classList.add("loaded")}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
