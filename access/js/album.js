const table = document.getElementById("tbody");
const tabel_songAdd = document.getElementById("table_update_songadd");

const update_nameSong = document.getElementById("tenAlbumUpdate");
const update_thumb = document.getElementById("img");
const update_nameSinger = document.getElementById("tenNgheSiUpdate");
const update_day = document.getElementById("dayUpdate");

const delete_nameSong = document.getElementById("tenAlbumDelete");

const btnUpdate = document.getElementById("btnupdate");

const btnDelete = document.getElementById("btnDelete");

const btnAdd = document.getElementById("btnAdd");

const create_nameSong = document.getElementById("tenAlbum");
const create_thumb = document.getElementById("imgAdd");
const create_nameSinger = document.getElementById("ngheSi");
const create_day = document.getElementById("ngayPhatHanh");
const create_addSong = document.getElementById("addSongAlbum");

const app = {
    currentIndex: 0,
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

    // Hàm để lấy nhạc có trong album
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

    loadArtist: function() {
        this.artists.forEach((item) => {
            const optionElement = document.createElement("option");
            optionElement.value = item.id;
            optionElement.text = item.name;
            create_nameSinger.appendChild(optionElement);
        });
    },

    render: function () {
        const htmlTable = this.albums.map((album,index) => {
            index++
            return `
            <tr>
                <td>
                    <input class="checkbox" type="checkbox">
                </td>
                <td>${album.name}</td>
                <td>
                    <label>
                        <img accept="image/*" class="img" src="${album.image}" alt="">
                    </label>
                </td>
                <td>
                    ${this.getArtistName(album.idSinger,this.artists)}                               
                </td>
                <td> 
                    ${album.idSong.length}                                                                                                                                             
                </td>
                <td>
                    ${album.like}
                </td>
                <td>
                    ${album.day}
                </td>
                <td>
                    <i onclick="openFormUpdateMusic()" class="fa-solid fa-pen-to-square" data-index=${index -1}></i>
                    <i onclick="openFormDeleteMusic()" class="fa-solid fa-delete-left" data-index=${index -1}></i>
                </td>
            </tr>
            `
        })

        table.innerHTML = htmlTable.join('');
    },

    handleEvents: function () {
        const _this = this;

        table.onclick = function (e) {
            let item_Node = e.target.closest('i')
            if (item_Node) {
                app.currentIndex = item_Node.dataset.index                   
                _this.loadSong()
            }                     
        }   

        // cập nhật album
        let song_thumb = '';
        // xử lý khi thay đổi ảnh
        const fileInputsImage = document.getElementsByClassName('file_img');
        Array.from(fileInputsImage).forEach(function (input) {
            input.addEventListener('change', function () {
                const fileName = input.files[0] ? input.files[0].name : '';
                song_thumb = 'access/image/img square/' + fileName

                const reader = new FileReader();
        
                reader.onload = function (event) {
                    update_thumb.src = event.target.result;
                };
        
                if (input.files && input.files[0]) {
                    reader.readAsDataURL(input.files[0]);
                } else {
                    update_thumb.src = '';
                }
            });
        });
        
        // xử lý cập nhật nhạc
        btnUpdate.onclick = function(){
            // Tìm phần tử có id trong mảng
            const elementToUpdate = _this.albums[_this.currentIndex];

            // Kiểm tra xem phần tử có tồn tại không
            if (elementToUpdate) {
                // Cập nhật giá trị của key 'name'
                elementToUpdate.name = update_nameSong.value;
                elementToUpdate.day = update_day.value;
                elementToUpdate.idSinger = elementToUpdate.idSinger;
                if(song_thumb != ''){
                    elementToUpdate.image = song_thumb;
                }
                else{
                    elementToUpdate.image = elementToUpdate.image;
                }
                _this.render();
                closeFormUpdateMusic();

            }
        }

        // xóa album
        btnDelete.onclick = function() {
            _this.albums.splice(_this.currentIndex, 1);
            _this.render();
            closeForDeleteMusic();
        }

        // thêm nhạc
        let song_thumbAdd = '';
        // xử lý khi thay đổi ảnh
        const fileInputsImageAdd = document.getElementsByClassName('file_img');
        Array.from(fileInputsImageAdd).forEach(function (input) {
            input.addEventListener('change', function () {
                const fileName = input.files[0] ? input.files[0].name : '';
                song_thumbAdd = 'access/image/img square/' + fileName

                const reader = new FileReader();
        
                reader.onload = function (event) {
                    create_thumb.src = event.target.result;
                };
        
                if (input.files && input.files[0]) {
                    reader.readAsDataURL(input.files[0]);
                } else {
                    create_thumb.src = '';
                }
            });
        });

        // Xử lý load nhạc muốn thêm
        create_nameSinger.addEventListener('change', function() {
            // Lấy giá trị của tùy chọn đã chọn
            var selectedOption = parseInt(create_nameSinger.value, 10);
            var SongInAlbum = _this.songs.filter(song => song.idSinger.some(id => id === selectedOption));
            const htmlTableSongAdd = SongInAlbum.map(song => {
                return `
                <tr>
                    <td>
                        <input class="checkbox songadd" type="checkbox" value="${song.id}">
                    </td>
                    <td>${song.name}</td>
                    <td>
                        <label>
                            <img accept="image/*" class="img" src="${song.image}" alt="">
                        </label>
                    </td>
                </tr>
                `
            })
            
            create_addSong.innerHTML = htmlTableSongAdd.join('');
        });

               
        // xử lý cập nhật nhạc
        btnAdd.onclick = function(){
            const newAlbum = {
                id: 100,
                image: song_thumbAdd,
                name: create_nameSong.value,
                idSinger: [parseInt(create_nameSinger.value, 10)],
                like: 0,
                day: create_day.value,
                idSong: getCheckedValues(),
            };

            console.log(newAlbum)
            
            _this.albums.push(newAlbum);
            closeFormAddMusic();
            _this.render();
        }

    },

    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.albums[this.currentIndex]
            }
        })
    },

    loadSong: function() {
        update_nameSong.value = this.currentSong.name
        update_thumb.src = this.currentSong.image
        update_nameSinger.textContent = this.getArtistName(this.currentSong.idSinger,this.artists)
        update_day.value = this.currentSong.day

        const AlbumPlayList = this.getSong(this.songs,this.albums, this.currentSong.id)
        const htmlSongAlbum = AlbumPlayList.map((song) => {
            return `
            <tr>
                <td>${song.name}</td>
                <td>
                    <label>
                        <img accept="image/*" class="img" src="${song.image}" alt="">
                    </label>
                </td>
                <td>
                    <i class="fa-solid fa-delete-left"></i>
                </td>
            </tr>
            `
        })

        tabel_songAdd.innerHTML = htmlSongAlbum.join('');
        delete_nameSong.textContent = this.currentSong.name;
    },

    start: function () {
        this.render();
        this.handleEvents();
        this.defineProperties();
        this.loadSong();
        this.loadArtist();
    }
}

app.start();
