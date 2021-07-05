import { ImageSlider, ImageSliderProps } from "./ImageSlider";
import { Meta, Story } from "@storybook/react";
import flowers1 from './images/img7.jpg';
import flowers2 from './images/img8.jpg';
import flowers3 from './images/img9.jpg';
import flowers4 from './images/img10.jpg';
import flowers5 from './images/img11.jpg';
import flowers6 from './images/img12.jpg';

export default {
    component: ImageSlider,
    title: 'Components/ImageSlider'
} as Meta;

const Template: Story<ImageSliderProps> = (args) => <ImageSlider {...args}/>

export const Primary = Template.bind({})

Primary.args = {
    images: [
        { imageURL: flowers1, alt: "Flowers1" },
        { imageURL: flowers2, alt: "Flowers2" },
        { imageURL: flowers3, alt: "Flowers3" },
        { imageURL: flowers4, alt: "Flowers4" },
        { imageURL: flowers5, alt: "Flowers5" },
        { imageURL: flowers6, alt: "Flowers6" }
    ],
    enableImageClicking: true,
    nextArrow: {
        arrowColor: "white",
        arrowDistanceFromScreen: "2rem",
        arrowHeight: "80px",
        arrowWidth: "80px",
        boxBackground: "black"
    },
    prevArrow: {
        arrowColor: "white",
        arrowDistanceFromScreen: "2rem",
        arrowHeight: "80px",
        arrowWidth: "80px",
        boxBackground: "black"
    },
    showNextArrow: true,
    showPrevArrow: true
}