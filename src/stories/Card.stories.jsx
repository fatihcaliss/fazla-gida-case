
import  Card  from "../components/Card"


export default {
    title: 'Card',
    component: Card,
    argTypes: {},
};

const Template = (args) => <Card {...args} />;

export const Album = Template.bind({});
Album.args = {
    title: "Album",
    name: 'Fatih',
    playcount: "123121321",
    listeners: "546546465",
    image: "https://picsum.photos/200/300",
    artistName: "Fatih"
};

export const Track = Template.bind({});
Track.args = {
    title: "Track",
    name: 'Fatih',
    playcount: "123121321",
    image: "https://picsum.photos/200/300",
    artistName: "Fatih"
};
