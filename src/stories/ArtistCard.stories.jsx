import ArtistCard from "../components/ArtistCard"
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../features/store"

export default {
    title: 'ArtistCard',
    component: ArtistCard,
    decorators: [
        (Story) => (<Provider store={store}><MemoryRouter><Story /></MemoryRouter></Provider>)
    ]
};

const Template = (args) => {
    return (
        <ArtistCard {...args} />
    )
};

const artist = {
    name: "fatihh",
    listeners: "1111111",
    playcount: "2222222",
    image: ""
}

export const ArtistCardWithHeader = Template.bind({});
ArtistCardWithHeader.args = {
    isHeader: true,
    props: artist
};
export const ArtistCardWithoutHeader = Template.bind({});
ArtistCardWithoutHeader.args = {
    isHeader: false,
    props: artist
};

