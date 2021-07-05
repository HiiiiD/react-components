# Button

<!-- STORY -->

<hr>

A component for showing an image gallery

##### Import

```js
import { ImageSlider } from '@hiiiid/react-components';
```

##### Usage

```jsx
<ImageSlider images={[
    {
        imageURL: "MyURL",
        alt: "MyAlt"
    }
]}/>
```


##### Required props

| Name       | Type   | Description                 |
| ---------- | ------ | --------------------------- |
| `images` | `RecordImage[]` | List of images including URL and alt value |

##### Optional props

| Name         | Type       | Default    | Description               |
| ------------ | ---------- | ---------- | ------------------------- |
| `nextArrow`    | `Partial<ArrowProperties>` | `{arrowColor: "white", arrowHeight: "80px", arrowWidth: "80px", arrowDistanceFromScreen: "2rem", boxBackground: "black"}` | `Define the style properties of the next arrow` |
| `prevArrow`   | `Partial<ArrowProperties>`  | `{arrowColor: "white", arrowHeight: "80px", arrowWidth: "80px", arrowDistanceFromScreen: "2rem", boxBackground: "black" }`   | `Define the style properties of the previous arrow` |
| `showNextArrow`       | `boolean`   | `true`   |  `Show the next arrow` |
| `showPrevArrow`      | `boolean`   | `true`   | `Show the previous arrow` |
| `enableImageClicking` | `boolean`   | `true`   | `Enable the click-to-jump to the images in order to go back and forward only by clicking images` |