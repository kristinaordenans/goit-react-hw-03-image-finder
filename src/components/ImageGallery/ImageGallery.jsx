// import { ImageGalleryItem } from "components"
// import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
// import { ImageGalleryCSS } from "./ImageGallery.styled"
// import PropTypes from "prop-types"
import css from "./ImageGallery.module.css";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({res}) => {
    return (
        <ul className={css.gallery}>
            {res.map(({ id, webformatURL, largeImageURL }) => {
                return (
                    <ImageGalleryItem key={id} smallImg={webformatURL} largeImg={largeImageURL} />
                )
            })}
        </ul>
    )
}

// __________________

// import css from "./ImageGallery.module.css";
// import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

// export const ImageGallery = ({images}) => {
//     return (
//         <ul className={css.gallery}>
//             {images.map(({ id, webformatURL, largeImageURL }) => {
//                 return (
//                     <ImageGalleryItem key={id} smallImg={webformatURL} largeImg={largeImageURL}/>
//                 )
//             })}
//         </ul>
//     )
// }