import Navbar from "../components/Navbar"
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../features/store"

export default {
    title: 'Navbar',
    component: Navbar,
    decorators: [
        (Story) => (<Provider store={store}><MemoryRouter><Story /></MemoryRouter></Provider>)
    ]
};

const Template = (args) => {
    return (
        <Navbar {...args} />
    )
};

export const ArtistCardWithHeader = Template.bind({});
ArtistCardWithHeader.args = {

};
