
import  Card  from "../components/Card"


export default {
    title: 'Card',
    component: Card,
};

const Template = (args) => <Card {...args} />;

export const Album = Template.bind({});
Album.args = {
    title: "Album",
    name: 'Fatih Test Album Name',
    playcount: "123121321",
    listeners: "546546465",
    image: "",
    artistName: "Fatih"
};

export const Track = Template.bind({});
Track.args = {
    title: "Track",
    name: 'Fatih Test Track Name',
    playcount: "123121321",
    image: "",
    artistName: "Fatih"
};
