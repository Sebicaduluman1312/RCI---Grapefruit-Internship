import { ContentItem } from "@/components/CustomContent/interface";
import sideImage from '../assets/contactImage.png';

export const contentCareer: ContentItem[] = [
    {tag: 'h2', content: 'Welcome to our growing team of experts and innovators'},
    {tag: 'p', content: 'Our team is a multidisciplinary mix of highly-driven individuals, covering engineering, economics, business consulting and environmental skills (to which a large network of SMEs is added on a project-by-project basis).'},
    {tag: 'small', content: 'We’re thrilled to welcome your application. You will have the chance to learn and build with true innovators and work in an exciting and diverse environment, from our many offices or remotely. '},
]

export const sideImageCompany = {
    imageUrl: sideImage.src,
    height: 510,
    width: 600,
}
