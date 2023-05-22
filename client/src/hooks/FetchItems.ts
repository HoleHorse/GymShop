import { useAppDispatch } from "./redux";
import { setItems } from "../store/itemsSlice";

const data = [
  {
    id: 1,
    title: "Short Title",
    name: "Full, possibly very very long name that will be descriptive to help customers understand what they are looking at",
    imgs: [
      "https://www.hammer-fitness.ch/ch-en/media/catalog/product/6/7/6720_kurzhantel-hauptbild-1200.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
    ],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor quis ante eu placerat. In interdum maximus tellus, sit amet tristique arcu iaculis eget. In nisl nisi, cursus at erat et, condimentum viverra sem. Phasellus non tincidunt leo. Suspendisse a aliquam velit, non maximus nunc. Proin placerat ex at est dapibus, at dictum ante sollicitudin. Donec aliquam scelerisque urna et ultrices. Aliquam nunc dolor, fringilla et vulputate sed, dapibus sed enim. Vivamus et velit ut lectus sollicitudin molestie in vel mauris. Proin euismod urna quis quam euismod, sit amet varius turpis consectetur. Phasellus hendrerit convallis augue, at hendrerit dui convallis vel. Vestibulum varius ullamcorper est consectetur volutpat. Nulla maximus mauris ac sollicitudin gravida. Nam aliquam suscipit diam ut tempor. In et ipsum fermentum, egestas urna eu, faucibus turpis. Nullam venenatis nisl sed pharetra malesuada.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 2,
    title: "Short Title",
    name: "Full, possibly very very long name that will be descriptive to help customers understand what they are looking at",
    imgs: [
      "https://i.ebayimg.com/images/g/6K0AAOSwGldeKqq5/s-l500.jpg",
      "https://cdn.webshopapp.com/shops/281654/files/392744583/dumbbells-vinyl.jpg",
      "https://www.rehabmart.com/imagesfromrd/hausmann_dumbells.jpg",
      "https://inclinehealth.com.au/wp-content/uploads/2022/02/Vinyl-Dumbbells-%E2%80%93-1.5-KG-PINK.jpg",
      "https://i.ebayimg.com/images/g/6K0AAOSwGldeKqq5/s-l500.jpg",
    ],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor quis ante eu placerat. In interdum maximus tellus, sit amet tristique arcu iaculis eget. In nisl nisi, cursus at erat et, condimentum viverra sem. Phasellus non tincidunt leo. Suspendisse a aliquam velit, non maximus nunc. Proin placerat ex at est dapibus, at dictum ante sollicitudin. Donec aliquam scelerisque urna et ultrices. Aliquam nunc dolor, fringilla et vulputate sed, dapibus sed enim. Vivamus et velit ut lectus sollicitudin molestie in vel mauris. Proin euismod urna quis quam euismod, sit amet varius turpis consectetur. Phasellus hendrerit convallis augue, at hendrerit dui convallis vel. Vestibulum varius ullamcorper est consectetur volutpat. Nulla maximus mauris ac sollicitudin gravida. Nam aliquam suscipit diam ut tempor. In et ipsum fermentum, egestas urna eu, faucibus turpis. Nullam venenatis nisl sed pharetra malesuada.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 3,
    title: "Short Title",
    name: "Full, possibly very very long name that will be descriptive to help customers understand what they are looking at",
    imgs: [
      "https://cdn.shopify.com/s/files/1/1182/3402/products/434386a.jpg?v=1656898941",
    ],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor quis ante eu placerat. In interdum maximus tellus, sit amet tristique arcu iaculis eget. In nisl nisi, cursus at erat et, condimentum viverra sem. Phasellus non tincidunt leo. Suspendisse a aliquam velit, non maximus nunc. Proin placerat ex at est dapibus, at dictum ante sollicitudin. Donec aliquam scelerisque urna et ultrices. Aliquam nunc dolor, fringilla et vulputate sed, dapibus sed enim. Vivamus et velit ut lectus sollicitudin molestie in vel mauris. Proin euismod urna quis quam euismod, sit amet varius turpis consectetur. Phasellus hendrerit convallis augue, at hendrerit dui convallis vel. Vestibulum varius ullamcorper est consectetur volutpat. Nulla maximus mauris ac sollicitudin gravida. Nam aliquam suscipit diam ut tempor. In et ipsum fermentum, egestas urna eu, faucibus turpis. Nullam venenatis nisl sed pharetra malesuada.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 4,
    title: "Short Title",
    name: "Full, possibly very very long name that will be descriptive to help customers understand what they are looking at",
    imgs: [
      "https://img1.cgtrader.com/items/35156/e59a56ae6c/large/gym-equipment-bench-press-with-variable-seat-angle-3d-model.jpg",
    ],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor quis ante eu placerat. In interdum maximus tellus, sit amet tristique arcu iaculis eget. In nisl nisi, cursus at erat et, condimentum viverra sem. Phasellus non tincidunt leo. Suspendisse a aliquam velit, non maximus nunc. Proin placerat ex at est dapibus, at dictum ante sollicitudin. Donec aliquam scelerisque urna et ultrices. Aliquam nunc dolor, fringilla et vulputate sed, dapibus sed enim. Vivamus et velit ut lectus sollicitudin molestie in vel mauris. Proin euismod urna quis quam euismod, sit amet varius turpis consectetur. Phasellus hendrerit convallis augue, at hendrerit dui convallis vel. Vestibulum varius ullamcorper est consectetur volutpat. Nulla maximus mauris ac sollicitudin gravida. Nam aliquam suscipit diam ut tempor. In et ipsum fermentum, egestas urna eu, faucibus turpis. Nullam venenatis nisl sed pharetra malesuada.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 5,
    title: "Short Title",
    name: "Full, possibly very very long name that will be descriptive to help customers understand what they are looking at",
    imgs: ["https://m.media-amazon.com/images/I/61tWAJVKxjL._SL1000_.jpg"],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor quis ante eu placerat. In interdum maximus tellus, sit amet tristique arcu iaculis eget. In nisl nisi, cursus at erat et, condimentum viverra sem. Phasellus non tincidunt leo. Suspendisse a aliquam velit, non maximus nunc. Proin placerat ex at est dapibus, at dictum ante sollicitudin. Donec aliquam scelerisque urna et ultrices. Aliquam nunc dolor, fringilla et vulputate sed, dapibus sed enim. Vivamus et velit ut lectus sollicitudin molestie in vel mauris. Proin euismod urna quis quam euismod, sit amet varius turpis consectetur. Phasellus hendrerit convallis augue, at hendrerit dui convallis vel. Vestibulum varius ullamcorper est consectetur volutpat. Nulla maximus mauris ac sollicitudin gravida. Nam aliquam suscipit diam ut tempor. In et ipsum fermentum, egestas urna eu, faucibus turpis. Nullam venenatis nisl sed pharetra malesuada.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 6,
    title: "Short Title",
    name: "Full, possibly very very long name that will be descriptive to help customers understand what they are looking at",
    imgs: [
      "https://publish.purewow.net/wp-content/uploads/sites/2/2021/01/best-home-gym-equipment-bars.jpg?fit=680%2C489",
    ],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor quis ante eu placerat. In interdum maximus tellus, sit amet tristique arcu iaculis eget. In nisl nisi, cursus at erat et, condimentum viverra sem. Phasellus non tincidunt leo. Suspendisse a aliquam velit, non maximus nunc. Proin placerat ex at est dapibus, at dictum ante sollicitudin. Donec aliquam scelerisque urna et ultrices. Aliquam nunc dolor, fringilla et vulputate sed, dapibus sed enim. Vivamus et velit ut lectus sollicitudin molestie in vel mauris. Proin euismod urna quis quam euismod, sit amet varius turpis consectetur. Phasellus hendrerit convallis augue, at hendrerit dui convallis vel. Vestibulum varius ullamcorper est consectetur volutpat. Nulla maximus mauris ac sollicitudin gravida. Nam aliquam suscipit diam ut tempor. In et ipsum fermentum, egestas urna eu, faucibus turpis. Nullam venenatis nisl sed pharetra malesuada.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 7,
    title: "Short Title",
    name: "Full, possibly very very long name that will be descriptive to help customers understand what they are looking at",
    imgs: [
      "https://media.gq.com/photos/62d6d6f291f8f44bbcc9d235/4:3/w_1500,h_1125,c_limit/protein-art.jpg",
    ],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor quis ante eu placerat. In interdum maximus tellus, sit amet tristique arcu iaculis eget. In nisl nisi, cursus at erat et, condimentum viverra sem. Phasellus non tincidunt leo. Suspendisse a aliquam velit, non maximus nunc. Proin placerat ex at est dapibus, at dictum ante sollicitudin. Donec aliquam scelerisque urna et ultrices. Aliquam nunc dolor, fringilla et vulputate sed, dapibus sed enim. Vivamus et velit ut lectus sollicitudin molestie in vel mauris. Proin euismod urna quis quam euismod, sit amet varius turpis consectetur. Phasellus hendrerit convallis augue, at hendrerit dui convallis vel. Vestibulum varius ullamcorper est consectetur volutpat. Nulla maximus mauris ac sollicitudin gravida. Nam aliquam suscipit diam ut tempor. In et ipsum fermentum, egestas urna eu, faucibus turpis. Nullam venenatis nisl sed pharetra malesuada.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 8,
    title: "Short title",
    name: "Full, possibly very very long name that will be descriptive to help customers understand what they are looking at",
    imgs: ["https://cf.shopee.sg/file/cdbb69ce554079363fb3f3eaf605491b"],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor quis ante eu placerat. In interdum maximus tellus, sit amet tristique arcu iaculis eget. In nisl nisi, cursus at erat et, condimentum viverra sem. Phasellus non tincidunt leo. Suspendisse a aliquam velit, non maximus nunc. Proin placerat ex at est dapibus, at dictum ante sollicitudin. Donec aliquam scelerisque urna et ultrices. Aliquam nunc dolor, fringilla et vulputate sed, dapibus sed enim. Vivamus et velit ut lectus sollicitudin molestie in vel mauris. Proin euismod urna quis quam euismod, sit amet varius turpis consectetur. Phasellus hendrerit convallis augue, at hendrerit dui convallis vel. Vestibulum varius ullamcorper est consectetur volutpat. Nulla maximus mauris ac sollicitudin gravida. Nam aliquam suscipit diam ut tempor. In et ipsum fermentum, egestas urna eu, faucibus turpis. Nullam venenatis nisl sed pharetra malesuada.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 9,
    title: "Short Title",
    name: "Full, possibly very very long name that will be descriptive to help customers understand what they are looking at",
    imgs: ["https://m.media-amazon.com/images/I/51mHjck4w3S.jpg"],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor quis ante eu placerat. In interdum maximus tellus, sit amet tristique arcu iaculis eget. In nisl nisi, cursus at erat et, condimentum viverra sem. Phasellus non tincidunt leo. Suspendisse a aliquam velit, non maximus nunc. Proin placerat ex at est dapibus, at dictum ante sollicitudin. Donec aliquam scelerisque urna et ultrices. Aliquam nunc dolor, fringilla et vulputate sed, dapibus sed enim. Vivamus et velit ut lectus sollicitudin molestie in vel mauris. Proin euismod urna quis quam euismod, sit amet varius turpis consectetur. Phasellus hendrerit convallis augue, at hendrerit dui convallis vel. Vestibulum varius ullamcorper est consectetur volutpat. Nulla maximus mauris ac sollicitudin gravida. Nam aliquam suscipit diam ut tempor. In et ipsum fermentum, egestas urna eu, faucibus turpis. Nullam venenatis nisl sed pharetra malesuada.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 10,
    title: "Short Title",
    name: "Full, possibly very very long name that will be descriptive to help customers understand what they are looking at",
    imgs: [
      "https://m.media-amazon.com/images/I/51o0B9RHTNL._AC_UF1000,1000_QL80_.jpg",
    ],
    price: 3990,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor quis ante eu placerat. In interdum maximus tellus, sit amet tristique arcu iaculis eget. In nisl nisi, cursus at erat et, condimentum viverra sem. Phasellus non tincidunt leo. Suspendisse a aliquam velit, non maximus nunc. Proin placerat ex at est dapibus, at dictum ante sollicitudin. Donec aliquam scelerisque urna et ultrices. Aliquam nunc dolor, fringilla et vulputate sed, dapibus sed enim. Vivamus et velit ut lectus sollicitudin molestie in vel mauris. Proin euismod urna quis quam euismod, sit amet varius turpis consectetur. Phasellus hendrerit convallis augue, at hendrerit dui convallis vel. Vestibulum varius ullamcorper est consectetur volutpat. Nulla maximus mauris ac sollicitudin gravida. Nam aliquam suscipit diam ut tempor. In et ipsum fermentum, egestas urna eu, faucibus turpis. Nullam venenatis nisl sed pharetra malesuada.",
    availability: "In Stock",
    rating: 5,
    reviews: 12,
    comments: [],
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

function FetchItems() {
  const dispatch = useAppDispatch();
  dispatch(setItems(data));
}

export default FetchItems;
