import Brochure from '../Brochure';
import styles from './SideImage.module.scss';

/// Helpers
import { SideImageProps } from './interface';


/// Components
import Image from 'next/image';



const SideImage = (props: SideImageProps) => {

    const {imageUrl, height, width, subParagraph, downloadLink, radius=true} = props;

    return ( 
        <div className={styles.wrapper}>
            {
                radius  ?
                    <Image src={imageUrl} height={height} width={width} alt='Side Image' style={{borderRadius: '20px'}}/> : 
                    <Image src={imageUrl} height={height} width={width} alt='Side Image' />
            }
            
            {
                subParagraph && 
                    <p>
                        {subParagraph}
                    </p>
            }

            {
                downloadLink && 
                    <Brochure downloadLink={downloadLink}/>
            }
        </div>
    );
}
 
export default SideImage;