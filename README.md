## :point_right: [Click here to see on browser](https://fazla-gida-case.vercel.app/)

## Fazla-Gida-FE-Case

In this project;<br/>

📌  Last.fm’s API(https://www.last.fm/api) used for datas. <br/>
📌 Axios used for get chart.getTopArtists, artist.getTopAlbums, artist.getTopTracks infos from Last.fm’s API.<br/>
📌 <b>Tailwindcss</b> used for styling.<br/>
📌 For Stage management <b>Redux-toolkit</b> used. <br/>
📌 <b> React-router-dom</b> used for routing. There are two pages. One of them is Home page which lists top 10 artist. <br/>
📌 On Home page,  <b> react-infinite-scroll-component</b> used for geting datas. Each request is limited 10 artists by url query. Default API request, is responded by 50 artists. <br/>
📌 Website theme can be changed to dark-light mode by clicking the item on top right. <br/>
📌 The other page is Artist Detail page. This page contains a header on top with artist name. In second section, there are top 10 albums and top 10 tracks for artist.<br/><br/>
📌 There are 3 components.
<ul>
<li> ArtistCard component used for home page top 10 artist list and artist detail page header artist information.</li>
<li> Card component used for Artist Detail Page top 10 albums and top 10 tracks.</li>
<li> Navbar component used for Homee page and Artist Detail Page navbar. It contains theme change icons.</li>
</ul>
📌 React-testing-library used for testing.<br/>
📌 Development environment tool Storybook used for playground for UI components 
