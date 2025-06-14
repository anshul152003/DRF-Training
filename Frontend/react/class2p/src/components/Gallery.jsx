import './Style.css'
function Gallery({ setingData }) {
    return (
            <div className="gallery-card">
                <img src={setingData.url} alt={setingData.filename} className="gallery-image" />
                <div className="gallery-info">
                    <p className="gallery-filename">{setingData.filename}</p>
                    <p className="gallery-date">{setingData.date}</p>
                    <p className="gallery-size">{setingData.size}</p>
                </div>
            </div>
    );
}

export default Gallery;