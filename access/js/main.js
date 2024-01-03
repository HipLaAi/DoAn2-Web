const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const gallery = $('#gallery')
const listAblumSlide = $('.lobby_listitemalbum')
const rankList = $('.listitem.rank-list')
const listDiscoveryRight = $('.discovery-listitem_right')
const listDiscoveryCenter = $('.discovery-listitem_center')
const listDiscoveryLeft = $('.discovery-listitem_left')
const listBroadcast = $('.broadcast-listitem')
const listALbumchill = $('.albumchill-list')
const Nowplayingsong_thumb = $('.nowplaying__main--left--img img')
const Nowplayingsong_nameSong = $('.nowplaying__main--left--title span')
const Nowplayingsong_nameSinger = $('.nowplaying__main--left--title a')
const audio=$('#audio')
const btnPlay = $('.play')
const btnShowPlaylist=$('.level-item_playlist button')
const modelPlaylist=$('.player-queue')

const MusicDetail_thumb = $('.music-top_thumb img')
const MusicDetail_nameSong = $('.music-name')
const MusicDetail_nameSinger = $('.music-detail-artists')
const MusicDetail_audio = $('.music-detail_right_visualazer audio')

const listArtist = $('.artist-list')

const PlaylistItem = $('.music-detail_interest_content .media-playlist')

const CD_thumb = $('.rank-active_thumb img')
const CD_nameSong = $('.rank-active-profile h2')
const CD_nameSinger = $('.rank-active-profile p')

const listItemRank = $('.ranking-item-new')

const AlbumDetial_thumb = $(".album-thumb img")
const AlbumDetial_namealbum = $(".album-profile .profile_title")
const AlbumDetial_namesinger = $(".album-profile .artists")
const AlbumDetial_dayalbum = $(".album-profile .updateday")
const AlbumDetial_likealbum = $(".album-profile .like")
const AlbumDetial_playList = $(".album-content .media-playlist")

const Nowplayingsong_icon = $('.nowplaying__main--left--icon')
const Nowplayingsong_iconHeart = $('.nowplaying__main--left--icon i')

const listLoveSong = $(".bottom-section-song_library .media-playlist")

const btnBack = $(".control-btn .back")
const btnNext = $(".fonward")

const app = {
    currentIndex: 0,
    isPlaying: false,
    songs: song,
    albums: album,
    artists: artist,
    playlists: playlist,

    // Hàm để lấy tên nghệ sĩ từ id
    getArtistName: function (artistIds, artists) {
        // Chuyển đổi artistIds thành mảng nếu nó không phải là mảng
        const idsArray = Array.isArray(artistIds) ? artistIds : [artistIds];
    
        const artistNames = idsArray.map(artistId => {
            const artist = artists.find(a => a.id === artistId);
            return artist ? artist.name : 'Unknown Artist';
        });
    
        return artistNames.join(', ');
    },

    // Hàm để lấy ảnh nghệ sĩ từ id
    getArtistImage: function (artistIds, artists) {
        // Chuyển đổi artistIds thành mảng nếu nó không phải là mảng
        const idsArray = Array.isArray(artistIds) ? artistIds : [artistIds];
    
        const artistImage = idsArray.map(artistId => {
            const artist = artists.find(a => a.id === artistId);
            return artist ? artist.image : 'Unknown Artist';
        });
    
        return artistImage;
    },

    // Hàm để tìm phần tử có view lớn nhất
    findTopMostViewedSongs: function(songs,top) {
        // Sắp xếp mảng theo giảm dần của giá trị view
        const sortedSongs = songs.slice().sort((a, b) => b.view - a.view);

        // Lấy ra phần tử
        const topMostViewedSongs = sortedSongs.slice(0, top);

        return topMostViewedSongs;
    },

    // Hàm để tìm phần tử có id lớn nhất
    findTopNew: function(ids) {
        // Sắp xếp mảng theo giảm dần của giá trị id
        const sortedIds = ids.slice().sort((a, b) => b.id - a.id);

        // Lấy ra phần tử
        const topNew = sortedIds.slice(0, 6);

        return topNew;
    },

    // Hàm để hiển thị thông tin chi tiết album
    detailAlbum: function(albums,id){
        const detail = albums.find(album => album.id === id);

        AlbumDetial_thumb.src = detail.image
        AlbumDetial_namealbum.textContent = detail.name
        AlbumDetial_namesinger.textContent = this.getArtistName(detail.idSinger,this.artists)
        AlbumDetial_dayalbum.textContent = detail.day
        AlbumDetial_likealbum.textContent = detail.like +  " Người thích"
    },

    // Hàm để lấy bìa hát theo id
    getSong: function (songs, albums, albumid) {
        const album = albums.find(album => album.id === albumid);

        // Chuyển đổi songIds thành mảng nếu nó không phải là mảng
        const idsArray = Array.isArray(album.idSong) ? album.idSong : [album.idSong];
    
        const song = idsArray.map(songId => {
            const music = songs.find(a => a.id === songId);
            return music
        });

        return song;
    },

    // Hàm để hiển thị các bài hát đã yêu thích
    LoadLoveSong: function(songs){
        const loveSong = songs.filter(song => song.love === true);
        const htmlLoveSong = loveSong.map(song => {
            return `
            <div class="media-playlist_item" data-index=${song.id}>
                <div class="media-content_left">
                    <div class="media-playlist_checkbox">
                        <label class="checkbox">
                            <input type="checkbox" name="" id="">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="song-icon">
                        <ion-icon name="musical-notes-outline"></ion-icon>
                    </div>
                    <div class="song-thumb">
                        <img src="${song.image}" alt="">
                    </div>
                    <div class="song-profile">
                        <div class="song-profile_name">
                            <span>${song.name}</span>
                        </div>
                        <div class="song-profile_singer">
                            <a href="">${this.getArtistName(song.idSinger,this.artists)}</a>
                        </div>
                    </div>
                </div>
                <div class="meida-content_center">
                    <span>${song.name}</span>
                </div>
                <div class="media-content_right">
                    <div class="song-hover_item">
                        <div class="level">
                            <button><ion-icon name="mic-outline"></ion-icon></button>
                            <button> <ion-icon name="heart-outline"></ion-icon></i></button>
                        </div>
                    </div>
                </div>
            </div>
            `
        })    

        listLoveSong.innerHTML = htmlLoveSong.join('')
    },

    render: function () {
        const topAlbum = this.findTopNew(this.albums);
        const htmlGalleryItem = topAlbum.map(album => {
            return `
            <a href="#" data-id="${album.id}">
                <figure>
                    <img src="${album.image}"
                        alt="${album.name}"
                        title="${album.name}">
                    <figcaption>${album.name}</figcaption>
                </figure>
            </a>
            `
        })

        const htmlLobbyItem = this.playlists.map(playlist => {
            return `                 
                <div class="album-item">
                    <div class="album-item_img ">
                        <img src="${playlist.image}"
                            alt="">
                    </div>
                </div>                    
                `
        })

        // Lấy danh sách bài hát có view cao nhất
        const top5Songs = this.findTopMostViewedSongs(this.songs,5);

        let startingRank = 0;
        const htmlRankItem = top5Songs.map((song) => {
            startingRank++;
            return `
                <div class="item rank-item "data-index=${song.id}>
                    <span class="rank-item_rating">${startingRank}</span>
                    <div class="item_img rank-item_img">
                        <img src="${song.image}"
                            alt="">
                    </div>
                    <div class="item_profile rank-item_profile">
                        <h4>${song.name}</h4>
                        <a href="#">${this.getArtistName(song.idSinger,this.artists)}</a>                        
                    </div>
                    <audio class="audio" src="${song.path}"></audio>
                </div>
            `
        })

        const htmlDiscoveryItem = this.songs.map(song => {
            return `         
                <div class="item discovery-item" data-index=${song.id}>               
                        <div class="item_img discovery-item_img">
                            <img src="${song.image}"
                                alt="">
                        </div>
                        <div class="item_profile discovery-item_profile">
                            <h4>${song.name}</h4>
                            <a href="#">${this.getArtistName(song.idSinger,this.artists)}</a>
                        </div>   
                        <audio class="audio" src="${song.path}"></audio>       
                </div>          
          `
        })
        
        // Lấy 3 bài hát có view cao nhất
        const top3Songs = this.findTopMostViewedSongs(this.songs,3);

        let startRank = 0;
        const htmlBroadcastItem = top3Songs.map(song => {
            startRank++;
            return `       
            <div class="broadcast-item">                
                <div class="broadcast-item_img">
                    <img src="${song.image}" alt="">
                </div>
                <div class="broadcast-item_frofile">
                    <div class="profile-img">
                        <img src="${this.getArtistImage(song.idSinger[0],this.artists)}" alt="">
                    </div>
                    <div class="profile-details">
                        <span>${this.getArtistName(song.idSinger[0],this.artists)}</span>
                    </div>
                    <div class="profile-rank">
                        <span class="profile-rank-item" data-rank="${startRank}">#${startRank}</span>
                    </div>
                </div>            
            </div>           
          `
        })

        // Lấy bài hát có view cao nhất
        const topSongs = this.findTopMostViewedSongs(this.songs,20);

        let startRankNew = 0;
        const htmlRankItemNew = topSongs.map(song => {
            startRankNew++;
            return `       
            <div class="item rank-item" data-index=${song.id}>
                <span class="rank-item_rating">${startRankNew}</span>
                <div class="item_img rank-item_img">
                    <img src="${song.image}" alt="">
                </div>
                <div class="item_profile rank-item_profile">
                    <h4>${song.name}</h4>
                    <a href="#">${this.getArtistName(song.idSinger,this.artists)}</a>
                </div>
                <audio class="audio"
                    src="${song.path}"></audio>
            </div>          
          `
        })

        const htmlALbumchillItem = this.albums.map(album => {
            return `
           
                <div class="albumchill-item">
                    <div class="albumchill-item_img">
                        <img src="${album.image}"
                            alt="">
                    </div>
                    <div class="albumchill-item_profile">
                        <p href=""> ${album.name}</p>
                    </div>
                </div>            
          `
        })

        listAblumSlide.innerHTML = htmlLobbyItem.join('')
        gallery.innerHTML = htmlGalleryItem.join('')
        rankList.insertAdjacentHTML('afterbegin', htmlRankItem.join(''))
        listDiscoveryRight.innerHTML = htmlDiscoveryItem.join('')
        listDiscoveryCenter.innerHTML = htmlDiscoveryItem.join('')
        listDiscoveryLeft.innerHTML = htmlDiscoveryItem.join('')
        listBroadcast.innerHTML = htmlBroadcastItem.join('')
        listALbumchill.innerHTML = htmlALbumchillItem.join('')
        listItemRank.innerHTML = htmlRankItemNew.join('')
        this.LoadLoveSong(this.songs);
    },   

    handleEvents: function () {
        const _this = this;     

        // xử lý khi chọn album
        document.querySelectorAll("#gallery a").forEach(album => {
            album.addEventListener("click", event => {
                event.preventDefault();
                const albumId = parseInt(album.dataset.id, 10);
                this.detailAlbum(this.albums, albumId);

                home.style.display="none";
                album_detial.style.display="block";
                music_detail.style.display="none";
                library.style.display="none";
                song_chart.style.display="none";
                $('.scroll').scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                const AlbumPlayList = _this.getSong(_this.songs,_this.albums, albumId)
                const htmlAlbumPlayList = AlbumPlayList.map(song =>
                    `<div class="media-playlist_item" data-index=${song.id}>
                        <div class="media-content_left">
                            <div class="media-playlist_checkbox">
                                <label class="checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div class="song-icon">
                                <ion-icon name="musical-notes-outline"></ion-icon>
                            </div>
                            <div class="song-thumb">
                                <img src="${song.image}" alt="">
                            </div>
                            <div class="song-profile">
                                <div class="song-profile_name">
                                    <span>${song.name}</span>
                                </div>
                                <div class="song-profile_singer">
                                    <a href="">${_this.getArtistName(song.idSinger,_this.artists)}</a>
                                </div>
                            </div>
                        </div>
                        <div class="meida-content_center">
                            <span>${song.name}</span>
                        </div>
                        <div class="media-content_right">
                            <div class="song-hover_item">
                                <div class="level">
                                    <button><ion-icon name="mic-outline"></ion-icon></button>
                                    <button> <ion-icon name="heart-outline"></ion-icon></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                )
                AlbumDetial_playList.innerHTML = htmlAlbumPlayList.join('')
            });
        });

        // xử lý khi yêu thích bài hát
        Nowplayingsong_icon.onclick = function(e) {
            let Heart_Node = e.target.closest('i');
            if (Heart_Node) {
                const dataIdValue = Heart_Node.dataset.id;
                const song = _this.songs[dataIdValue];
        
                if (song && 'love' in song) {
                    if (!song.love) {
                        Nowplayingsong_icon.innerHTML = `<i class="fa-solid fa-heart" style="color: rebeccapurple; cursor: pointer;" data-id=${dataIdValue}></i>`;
                    } else {
                        Nowplayingsong_icon.innerHTML = `<i class="fa-regular fa-heart" style="color: white; cursor: pointer;" data-id=${dataIdValue}></i>`;
                    }
        
                    song.love = !song.love;
                    _this.LoadLoveSong(_this.songs);
                }
            }
        };

        rankList.onclick = function (e) {
            let RankItem_Node = e.target.closest('.rank-item')
            if (RankItem_Node) {
                app.currentIndex = RankItem_Node.dataset.index                   
                _this.loadCurrentSong()
                audio.play()       
            }                     
        }   
        
        listDiscoveryRight.onclick = function (e) {
            let RankItem_Node = e.target.closest('.discovery-item')
            if (RankItem_Node) {
                app.currentIndex = RankItem_Node.dataset.index                   
                _this.loadCurrentSong()
                audio.play()       
            }                     
        }

        listItemRank.onclick = function (e) {
            let RankItem_Node = e.target.closest('.discovery-item')
            if (RankItem_Node) {
                app.currentIndex = RankItem_Node.dataset.index                   
                _this.loadCurrentSong()
                audio.play()       
            }                     
        }

        listDiscoveryCenter.onclick = function (e) {
            let RankItem_Node = e.target.closest('.discovery-item')
            if (RankItem_Node) {
                app.currentIndex = RankItem_Node.dataset.index                   
                _this.loadCurrentSong()
                audio.play()       
            }                     
        }

        listDiscoveryLeft.onclick = function (e) {
            let RankItem_Node = e.target.closest('.discovery-item')
            if (RankItem_Node) {
                app.currentIndex = RankItem_Node.dataset.index                   
                _this.loadCurrentSong()
                audio.play()       
            }                     
        }

        listItemRank.onclick = function (e) {
            let RankItem_Node = e.target.closest('.rank-item')
            if (RankItem_Node) {
                app.currentIndex = RankItem_Node.dataset.index                   
                _this.loadCurrentSong()
                audio.play()       
            }                     
        }

        listLoveSong.onclick = function (e) {
            let RankItem_Node = e.target.closest('.media-playlist_item')
            if (RankItem_Node) {
                app.currentIndex = RankItem_Node.dataset.index                   
                _this.loadCurrentSong()
                audio.play()       
            }                     
        }

        AlbumDetial_playList.onclick = function (e) {
            let RankItem_Node = e.target.closest('.media-playlist_item')
            if (RankItem_Node) {
                app.currentIndex = RankItem_Node.dataset.index                   
                _this.loadCurrentSong()
                audio.play()       
            }                     
        }

        PlaylistItem.onclick = function (e) {
            let RankItem_Node = e.target.closest('.media-playlist_item')
            if (RankItem_Node) {
                app.currentIndex = RankItem_Node.dataset.index                   
                _this.loadCurrentSong()
                audio.play()       
            }                     
        }

        // xử lý CD quay
        const cdThumbRankAnimate = CD_thumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 10000,
            iterations: Infinity
        });
        cdThumbRankAnimate.pause();

        const cdThumbMusicAnimate = MusicDetail_thumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 10000,
            iterations: Infinity
        });
        cdThumbMusicAnimate.pause();

        //xử lí next
        btnNext.onclick = function(){
            _this.nextSong();
            audio.play()       
        }

        //xử lí back
        btnBack.onclick = function(){
            _this.backSong();
            audio.play()       
        }
        
        //xử lí play/pause
        btnPlay.onclick = function () {      
            if (_this.isPlaying ) {
                audio.pause();
            }
            else {
                audio.play()       
            }
        }
        // xử lí khi nhạc đang play
        audio.onplay = function () {
            _this.isPlaying = true
            btnPlay.innerHTML='<ion-icon name="pause-circle-outline"></ion-icon>'
            cdThumbRankAnimate.play();   
            cdThumbMusicAnimate.play();
            RunWave();        
        }
        //Xử lý khi nhạc bị pause
        audio.onpause = function () {
            _this.isPlaying = false
            btnPlay.innerHTML='<ion-icon name="play-circle-outline"></ion-icon>'
            cdThumbRankAnimate.pause();  
            cdThumbMusicAnimate.pause();                                               
        }
        //Xử lý khi hết nhạc
        audio.onended = function(){
            btnNext.onclick();
        }

        // let show = false
        // btnShowPlaylist.addEventListener("click",function(){
        //     show = !show;
        //     if(show){
        //         modelPlaylist.style.display="block";
        //     }
        //     else{
        //         modelPlaylist.style.display="none";
        //     }
        // })
    },

    nextSong:function(){
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },

    backSong:function(){
        this.currentIndex--;
        if(this.currentIndex < 0){
            this.currentIndex = this.songs.length-1;
        }
        this.loadCurrentSong();
    },

    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },

    loadCurrentSong: function () {
        Nowplayingsong_thumb.src = this.currentSong.image
        Nowplayingsong_nameSong.textContent = this.currentSong.name
        Nowplayingsong_nameSinger.textContent = this.getArtistName(this.currentSong.idSinger,this.artists)
        audio.src = this.currentSong.path

        if (this.songs[this.currentSong.id].love) {
            Nowplayingsong_icon.innerHTML = `<i class="fa-solid fa-heart" style="color: rebeccapurple; cursor: pointer;" data-id=${this.currentSong.id}></i>`
        } else {
            Nowplayingsong_icon.innerHTML = `<i class="fa-regular fa-heart" style="color: white; cursor: pointer;" data-id=${this.currentSong.id}></i>`                
        }

        CD_thumb.src = this.currentSong.image
        CD_nameSong.textContent = this.currentSong.name
        CD_nameSinger.textContent = this.getArtistName(this.currentSong.idSinger,this.artists)

        MusicDetail_thumb.src = this.currentSong.image
        MusicDetail_nameSong.textContent = this.currentSong.name
        MusicDetail_nameSinger.textContent = this.getArtistName(this.currentSong.idSinger,this.artists)
        MusicDetail_audio.src = this.currentSong.path

        const id = this.currentSong.id;
        const idSinger = this.currentSong.idSinger;

        const htmlArtist = this.artists
        .filter(artist => idSinger.includes(artist.id))
        .map(artist => `
            <div class="artist-list-item">
            <div class="artist-item_left">
                <div class="artist-thumb">
                <img src="${artist.image}" alt="">
                </div>
            </div>
            <div class="artist-item_right">
                <div class="artist-profile">
                <span class="artist-name">
                    ${artist.name}
                </span>
                </div>
            </div>
            </div>
        `);
    
        const htmlPlaylistItem = this.songs
          .filter(song => song.idSinger.some(id => idSinger.includes(id)) && song.id !== id)
          .map(song =>
                `<div class="media-playlist_item" data-index=${song.id}>
                <div class="media-content_left">
                    <div class="media-playlist_checkbox">
                        <label class="checkbox">
                            <input type="checkbox" name="" id="">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="song-icon">
                        <ion-icon name="musical-notes-outline"></ion-icon>
                    </div>
                    <div class="song-thumb">
                        <img src="${song.image}" alt="">
                    </div>
                    <div class="song-profile">
                        <div class="song-profile_name">
                            <span>${song.name}</span>
                        </div>
                        <div class="song-profile_singer">
                            <a href="">${this.getArtistName(song.idSinger,this.artists)}</a>
                        </div>
                    </div>
                </div>
                <div class="meida-content_center">
                    <span>${song.name}</span>
                </div>
                <div class="media-content_right">
                    <div class="song-hover_item">
                        <div class="level">
                            <button><ion-icon name="mic-outline"></ion-icon></button>
                            <button> <ion-icon name="heart-outline"></ion-icon></i></button>
                        </div>
                    </div>
                    <div class="song-time">
                    </div>
                </div>
                </div>
                `
            )

        PlaylistItem.innerHTML = htmlPlaylistItem.join('')
        listArtist.innerHTML = htmlArtist.join('')
        
    },
  
    start: function () {
        //Render lại playlist 
        this.render()

        this.handleEvents()
                
        // Định nghĩa các thuộc tính cho object
        this.defineProperties()

        this.loadCurrentSong()
    }
}

app.start()
// var main = document.querySelector("main");
// function loadPage(pageName) {
//     fetch(pageName + '.html') // Gửi yêu cầu HTTP GET để lấy nội dung của trang theo đường dẫn pageName
//         .then(response => response.text()) // Chuyển đổi phản hồi thành văn bản
//         .then(html => {
//             document.addEventListener('DOMContentLoaded', function () {
//                 app.updateElementst();
//                 app.start()
//             });
//             main.innerHTML = html; // Cập nhật nội dung của phần main-content
//             // Thay đổi URL mà không làm tải lại trang, để thể hiện đường dẫn mới trong thanh địa chỉ
//             // history.pushState({}, '', '/' + pageName);
//         })
//         .catch(error => console.error('Fetch error:', error)); // Xử lý lỗi trong quá trình tải trang
// }
