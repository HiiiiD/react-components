import { FC, useState, useEffect } from 'react';
import { ReactComponent as NextArrow } from './icons/chevron_right_24px.svg';
import { ReactComponent as PrevArrow } from './icons/chevron_left_24px.svg';
import styles from './ImageSlider.module.css';

export interface ImageSliderProps {
  images: RecordImage[];
  nextArrow?: Partial<ArrowProperties>;
  prevArrow?: Partial<ArrowProperties>;
  showNextArrow?: boolean;
  showPrevArrow?: boolean;
  enableImageClicking?: boolean;
}

export interface ArrowProperties {
  arrowColor?: string;
  arrowHeight?: number | string;
  arrowWidth?: number | string;
  arrowDistanceFromScreen?: number | string;
  boxBackground?: string;
}

export interface RecordImage {
  imageURL: string;
  alt: string;
}

enum ArrowType {
  PREVIOUS,
  NEXT
}

export const ImageSlider: FC<ImageSliderProps> = ({
  images,
  nextArrow = {
    arrowColor: "white",
    arrowHeight: "80px",
    arrowWidth: "80px",
    arrowDistanceFromScreen: "2rem",
    boxBackground: "black"
  },
  prevArrow = {
    arrowColor: "white",
    arrowHeight: "80px",
    arrowWidth: "80px",
    arrowDistanceFromScreen: "2rem",
    boxBackground: "black"
  },
  showNextArrow = true,
  showPrevArrow = true,
  enableImageClicking = true}) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentRecord, setCurrentRecord] = useState<RecordImage>(images[currentIndex])
  const [prevRecord, setPrevRecord] = useState<RecordImage>()
  const [nextRecord, setNextRecord] = useState<RecordImage>()

  useEffect(() => {
    setCurrentRecord(images[currentIndex])
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    setPrevRecord(images[prevIndex])
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    setNextRecord(images[nextIndex])
  }, [currentIndex, images])

  const updateIndex = (arrowType: ArrowType) => {
    if (arrowType === ArrowType.NEXT) {
      setCurrentIndex((oldIndex) => {
        return oldIndex === (images.length - 1) ? 0 : (oldIndex + 1)
      })
    }
    else {
      setCurrentIndex((oldIndex) => {
        return oldIndex === 0 ? (images.length - 1) : (oldIndex - 1)
      })
    }
  }


  return (
    <div className={styles.imageSlider}>
      <div className={styles.images}>
        <div className={styles.prevImage}>
          <img src={prevRecord?.imageURL} alt={prevRecord?.alt} onClick={() => {
            if (enableImageClicking){
              updateIndex(ArrowType.PREVIOUS)
            }
          }} />
        </div>
        <div className={styles.currentImage}>
          <img src={currentRecord.imageURL} alt={currentRecord.alt} />
        </div>
        <div className={styles.nextImage}>
          <img src={nextRecord?.imageURL}
            alt={nextRecord?.alt}
            onClick={() => {
              if (enableImageClicking){
                updateIndex(ArrowType.NEXT)
              }
            }} />
        </div>
      </div>
      { showPrevArrow && <div className={styles.prevArrow}
        onClick={() => updateIndex(ArrowType.PREVIOUS)}
        style={{ left: prevArrow.arrowDistanceFromScreen,
        background: prevArrow.boxBackground }}>
        <PrevArrow width={prevArrow.arrowWidth}
          height={prevArrow.arrowHeight}
          fill={prevArrow.arrowColor}
        />
      </div>}
      {showNextArrow && <div className={styles.nextArrow} onClick={() => updateIndex(ArrowType.NEXT)}
        style={{ right: nextArrow.arrowDistanceFromScreen,
        background: nextArrow.boxBackground }}>
        <NextArrow width={nextArrow.arrowWidth}
          height={nextArrow.arrowHeight}
          fill={nextArrow.arrowColor}
        />
      </div>}
    </div>
  )
}
