import ArtistDetailPage from "../pages/ArtistDetailPage"
import { Provider } from 'react-redux'
import { store } from "../features/store"
import { MemoryRouter, Route, Routes } from "react-router-dom";


export default {
    title: 'ArtistDetailPage',
    component: ArtistDetailPage,
    decorators: [
        (Story) => (<Provider store={store}>
            <MemoryRouter initialEntries={["/detail/c8b03190-306c-4120-bb0b-6f2ebfc06ea9"]} >
                <Routes>
                    <Route path="/detail/:id" element={<Story />} />
                </Routes>
            </MemoryRouter>
        </Provider>)
    ]
};

const artist = {
    name: "fatih",
    listeners: "111111111",
    playcount: "22222222",
    image: ""
}

const Template = (args) => {
    return (
        <ArtistDetailPage {...args} />
    )

};

export const ArtistDetail = Template.bind({});
ArtistDetail.args = {

};