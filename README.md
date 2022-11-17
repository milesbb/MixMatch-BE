<h1 align="center">MixMatch - Backend</h1>

<p align="center">This primarily contains backend infrastructure, you can find the fronted <a href="https://github.com/milesbb/MixMatch">here</a></p>

<h2 align="center">Mission Statement</h2>

<p align="center">According to a 2021 <a href="https://www.gov.uk/government/publications/music-and-streaming-market-study-update-paper/executive-summary">study</a> by the UK Government, there were 39 million monthly active users of music streaming services within the UK with <a href="https://techcrunch.com/2017/08/21/younger-consumers-use-two-or-more-apps-for-streaming-music-mobile-messaging-says-nielsen/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAG3YNpgcPUj6w4i0w-fB695mZUUmL9Fs-lwDSi2kbeyvfrmsIqczLeuScoA7hqn8_23_PwDE3B2BV2bCj85JnO3aIlxgbwWHXXJhuFGmjxTDwZ0zUYVaS7sQc4WbbBV3Xd-YcxuYtOt-IAGp02w9dKRrBfqvaW-PKmBYZCXPMN0Y">other figures</a> showing that in 2017 up to 60 percent of young people in the US use multiple streaming services at the same time. Despite this, most popular music streaming platforms today offer no easy way to export user-created playlists to other competing platforms.</p>

<p align="center">Thats where <strong>MixMatch</strong> comes in!</p>

<p align="center">MixMatch aims to plug this gap and provide an easy and accessible way for users of streaming services who may want to transfer their awesome playlists between apps. Sarah will now be able to transfer her tough 70 song-long workout playlist from Spotify to Apple Music so her friend Abby, who only uses Apple Music, will be able to collaborate on it with her!</p>

<p align="center">Through dynamic use of Spotify, Apple Music, etc... API's, MixMatch will be able to offer you a simple and clean way to preserve, move, and share your favorite playlists!</p>

<p align="center">Primary technologies: Node.js, Express.js, Spotify API, Apple Music API, MongoDB, and more tbd during development...</p>

<h2 align="center">v1. Core Features</h2>

<ul>
    <li>Authenticate and allow users to connect their MixMatch, Spotify and/or Apple Music accounts and upload an existing playlist from their Spotify/Apple Music account to the MixMatch DB, accessible from their 'Playlist Library'</li>
    <li>Uploaded playlists will be able to be made private or public to all platform users</li>
    <li>A user will be able to select a playlist in their 'Playlist Library' and create an identical playlist on their alternative music-streaming service account
        <ul>
            <li><strong>Authenticate stage</strong> - User prompted to login to selected target music streaming service, if user already logged into target streaming service account skip this stage</li>
            <li><strong>Check stage</strong> -Checks will need to be done on each song in the playlist to check if it exists in the other service's DB</li>
            <li><strong>Accept stage</strong> - A new compatible playlist will be formulated minus any un-compatible songs and user will be notified of un-compatible songs in playlist and prompted to continue or cancel upload</li>
            <li><strong>Upload stage</strong> - Compatibility checked playlist uploaded to streaming service account using corresponding API given user has been authenticated</li>
        </ul>
    </li>
    <li>Users will be able to share their saved playlists so their friends can easily access and download their playlists between streaming services, possibly email/social media functionality but at v1 stage just link to specific MixMatch playlist page</li>
    <li>All users will have access to MixMatch 'Masterlist' where they can browse and access all public playlists users have uploaded, playlist search functionality (via playlist title)</li>
</ul>

<h2 align="center">v2. Additional Features</h2>

<ul>
    <li>A: MixMatch 'Studio' - Allow users to add/remove songs from their saves playlists within the app, CRUD with playlist MixMatch DB, adding songs functionality could use Deezer api to authenticate that song is real due to large Deezer db</li>
    <li>B: Implement 'likes' and 'favourites' system for public playlists on MixMatch 'Masterlist', reference in User data entries</li>
    <li>C: Implement 'following' functionality and more in-depth profile page (shows playlists, likes, favourites, followers, following), profile picture upload too if not already added</li>
</ul>

<h2 align="center">v3. Final Additional Features</h2>

<ul>
    <li>D: Add sharing playlist functionality (twitter initially, others if time) (shares link, playlist info, message, and MixMatch branding in post on relevant social media platform)</li>
    <li>E: Add profile status posts ability (liking functionality too?)</li>
    <li>F: Add connection to Deezer (if time)</li>
</ul>
