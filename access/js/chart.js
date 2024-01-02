const songs = song;
const artists = artist;

function getTopSongsByView(songs, top) {
    // Sử dụng slice để tạo một bản sao của mảng songs
    const sortedSongs = songs.slice().sort((a, b) => b.view - a.view);
    const topMostViewedSongs = sortedSongs.slice(0, top);

    return topMostViewedSongs;
}

function getArtistName (artistIds) {
    // Chuyển đổi artistIds thành mảng nếu nó không phải là mảng
    const idsArray = Array.isArray(artistIds) ? artistIds : [artistIds];

    const artistNames = idsArray.map(artistId => {
        const artist = artists.find(a => a.id === artistId);
        return artist ? artist.name : 'Unknown Artist';
    });

    return artistNames.join(', ');
}

const topView = getTopSongsByView(songs,5)
const viewsArray = [].concat(...topView.map(song => song.view));

const chuthich = document.getElementById("chuthich");

chuthich.innerHTML =
                        `
                        <tr>
                            <td>
                                <div class="color one"></div>
                            </td>
                            <td>
                                <h4>${topView[0].name}</h4>
                                <h5>${getArtistName(topView[0].idSinger)}</h5>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="color two"></div>
                            </td>
                            <td>
                                <h4>${topView[1].name}</h4>
                                <h5>${getArtistName(topView[1].idSinger)}</h5>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="color three"></div>
                            </td>
                            <td>
                                <h4>${topView[2].name}</h4>
                                <h5>${getArtistName(topView[2].idSinger)}</h5>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="color four"></div>
                            </td>
                            <td>
                                <h4>${topView[3].name}</h4>
                                <h5>${getArtistName(topView[3].idSinger)}</h5>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="color five"></div>
                            </td>
                            <td>
                                <h4>${topView[4].name}</h4>
                                <h5>${getArtistName(topView[4].idSinger)}</h5>
                            </td>
                        </tr>
                        `;

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const data = viewsArray;
const start_point = 10;
const distance = (canvas.width - start_point) / data.length;
const barWidth = 40;
const scaleFactor = (canvas.height - 100) / Math.max(...data);

// Mảng chứa các màu mong muốn
const colors = ['#9b59b6', '#f39c12', '#e74c3c', '#2ecc71', '#3498db'];

data.forEach((element, index) => {
    const barHeight = element * scaleFactor;
    const x = start_point + distance * index;
    const y = canvas.height - barHeight - 10;

    const barColor = colors[index % colors.length];

    ctx.fillStyle = barColor;
    ctx.fillRect(x, y, barWidth, barHeight);

    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(element, x + barWidth / 2, y - 5);
    
    ctx.fillStyle = 'black';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
});

