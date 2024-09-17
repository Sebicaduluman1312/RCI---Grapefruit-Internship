import styles from './Hero.module.scss';
import { HeroProps, SlideProps } from './interface';

// Helpers
import classNames from 'classnames';
import { carouselSettings } from './data';

// Components
import Tag from "../Tag";
import { Carousel } from "antd";
import SkeletonComponent from '../Skeleton';

const Hero = (props: HeroProps) => {
    const { data } = props;
    const showSlider = data.length > 1;

    const SLIDE_TYPE = ({ slide }: { slide: SlideProps }) => {

        return(
            <div 
            style={{ backgroundImage: `url(${slide.background})` }}
            className={classNames(styles.contentType)}
        >
            <div className={styles.heroContent}>
                <h1 className={styles.title}>
                    {slide.title}
                </h1>

                <h3 className={styles.subtitle}>
                    {slide?.description}
                </h3>

                <div className={styles.heroTags}>
                    {
                        slide.tags?.map((tag: string, index: number) => (
                            <Tag key={index} label={tag} size='small' />
                        ))
                    }
                </div>
            </div>
        </div>
        )
    }

    const SINGLE_TYPE = ({ slide }: { slide: SlideProps }) => {
        return(
            <div 
            style={{ backgroundImage: `url(${slide.background})` }}
            className={classNames(styles.contentTypeSingle)}>

                <div className={classNames(styles.card)}>
                    <h1>
                        {slide.title}
                    </h1>
                </div>

            </div>
        ) 
    }

    if(data.length){
        return(
            <section className={styles.wrapper}>
                {showSlider ? (
                    <Carousel {...carouselSettings} className={styles.carousel}>
                        {data.map((slide, index) => (
                            <SLIDE_TYPE key={index} slide={slide} />
                        ))}
                    </Carousel>
                ) : (
                    <SINGLE_TYPE slide={data[0]} />
                )}
            </section>
        )
    }

    return (
        <SkeletonComponent />
    )
};

export default Hero;