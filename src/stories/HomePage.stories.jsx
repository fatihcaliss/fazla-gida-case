import HomePage from "../pages/HomePage"
import { MemoryRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from "../features/store"


export default {
    title: 'HomePage',
    component: HomePage,
    decorators: [
        (Story) => (<Provider store={store}><MemoryRouter><Story /></MemoryRouter></Provider>)
    ]
};

const Template = (args) => <HomePage {...args} />;

export const Home = Template.bind({});
Home.args = {
    
};