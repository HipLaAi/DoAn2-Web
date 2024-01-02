const table = document.getElementById("tbody");

const update_nameSong = document.getElementById("tenNhacUpdate");
const update_thumb = document.getElementById("img");
const update_nameSinger = document.getElementById("ngheSiUpdate");
const update_audio = document.getElementById("audio");

const delete_nameSong = document.getElementById("nameSongDelete");

const btnUpdate = document.getElementById("btnupdate");

const btnDelete = document.getElementById("btnDelete");

const btnAdd = document.getElementById("btnAdd");

const create_nameSong = document.getElementById("tenNhac");
const create_thumb = document.getElementById("imgAdd");
const create_nameSinger = document.getElementById("tenNgheSi");
const create_audio = document.getElementById("audioAdd");

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

    render: function () {
        const htmlTable = this.songs.map((song,index) => {
            index++
            return `
            <tr>
                <td>
                    <input class="checkbox" type="checkbox">
                </td>
                <td>${song.name}</td>
                <td>
                    <label>
                        <img accept="image/*" class="img" src="${song.image}" alt="">
                    </label>
                </td>
                <td>${song.view}</td>
                <td>${this.getArtistName(song.idSinger[0],this.artists)}</td>
                <td>
                    <label>
                        <audio class="audio" src="${song.path}" controls></audio>
                    </label>
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

    loadArtist: function() {
        this.artists.forEach((item) => {
            const optionElement = document.createElement("option");
            optionElement.value = item.id;
            optionElement.text = item.name;
            update_nameSinger.appendChild(optionElement);
            if (this.currentSong.idSinger[0] === item.id) {
                optionElement.selected = true;
            }
        });
    },

    loadArtistAdd: function() {
        this.artists.forEach((item) => {
            const optionElement = document.createElement("option");
            optionElement.value = item.id;
            optionElement.text = item.name;
            create_nameSinger.appendChild(optionElement);
        });
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

        // cập nhật nhạc
        let song_thumb = '';
        let song_audio = '';
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

        // xử lý khi thay đổi nhạc
        const fileInputsAudio = document.getElementsByClassName('file_audio');
        Array.from(fileInputsAudio).forEach(function (input) {
            input.addEventListener('change', function () {
                const fileName = input.files[0] ? input.files[0].name : '';
                song_audio = 'access/audio/' + fileName

                const reader = new FileReader();
        
                reader.onload = function (event) {
                    update_audio.src = event.target.result;

                };
        
                if (input.files && input.files[0]) {
                    reader.readAsDataURL(input.files[0]);
                } else {
                    update_audio.src = '';
                }
            });
        });
        
        // xử lý cập nhật nhạc
        btnUpdate.onclick = function(){
            // Tìm phần tử có id là 2 trong mảng
            const elementToUpdate = _this.songs[_this.currentIndex];

            // Kiểm tra xem phần tử có tồn tại không
            if (elementToUpdate) {
                // Cập nhật giá trị của key 'name'
                elementToUpdate.name = update_nameSong.value;
                elementToUpdate.idSinger = [parseInt(update_nameSinger.value, 10)];
                if(song_thumb != ''){
                    elementToUpdate.image = song_thumb;
                }
                else{
                    elementToUpdate.image = elementToUpdate.image;
                }

                if(song_audio != ''){
                    elementToUpdate.path = song_audio;
                }
                else{
                    elementToUpdate.path = elementToUpdate.path;
                }
                _this.render();
                closeFormUpdateMusic();

            } else {
                console.log('Element not found');
            }
        }

        // xóa nhạc
        btnDelete.onclick = function() {
            _this.songs.splice(_this.currentIndex, 1);
            _this.render();
            closeForDeleteMusic();
        }

        // thêm nhạc
        let song_thumbAdd = '';
        let song_audioAdd = '';
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

        // xử lý khi thay đổi nhạc
        const fileInputsAudioAdd = document.getElementsByClassName('file_audio');
        Array.from(fileInputsAudioAdd).forEach(function (input) {
            input.addEventListener('change', function () {
                const fileName = input.files[0] ? input.files[0].name : '';
                song_audioAdd = 'access/audio/' + fileName

                const reader = new FileReader();
        
                reader.onload = function (event) {
                    create_audio.src = event.target.result;

                };
        
                if (input.files && input.files[0]) {
                    reader.readAsDataURL(input.files[0]);
                } else {
                    create_audio.src = '';
                }
            });
        });
        
        // xử lý cập nhật nhạc
        btnAdd.onclick = function(){
            const newSong = {
                id: 100,
                name: create_nameSong.value,
                idSinger: [parseInt(create_nameSinger.value, 10)],
                path: song_audioAdd,
                image: song_thumbAdd,
                view: 0,
                love: false
            };
            
            _this.songs.push(newSong);
            closeFormAddMusic();
            _this.render();
        }

    },

    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },

    loadSong: function() {
        update_nameSong.value = this.currentSong.name
        update_thumb.src = this.currentSong.image
        update_audio.src = this.currentSong.path

        delete_nameSong.textContent = this.currentSong.name;
    },

    start: function () {
        this.render();
        this.handleEvents();
        this.defineProperties();
        this.loadSong();
        this.loadArtist();
        this.loadArtistAdd();
    }
}

app.start();
