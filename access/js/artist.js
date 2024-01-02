const table = document.getElementById("tbody");

const update_nameSong = document.getElementById("tenNgheSiUpdate");
const update_thumb = document.getElementById("img");

const delete_nameSong = document.getElementById("nameSongDelete");

const btnUpdate = document.getElementById("btnupdate");

const btnDelete = document.getElementById("btnDelete");

const btnAdd = document.getElementById("btnAdd");

const create_nameSong = document.getElementById("tenNgheSi");
const create_thumb = document.getElementById("imgAdd");

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
        const htmlTable = this.artists.map((artist,index) => {
            index++
            return `
            <tr>
                <td>
                    <input class="checkbox" type="checkbox">
                </td>
                <td>${artist.name}</td>
                <td>
                    <label>
                        <img accept="image/*" class="img" src="${artist.image}" alt="">
                    </label>
                </td>
                <td>
                    <select>
                        <option>● Đang hoạt động</option>
                        <option>● Nhưng hoạt động</option>
                    </select>
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

        // cập nhật ns
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
        
        // xử lý cập nhật ns
        btnUpdate.onclick = function(){
            // Tìm phần tử có id là 2 trong mảng
            const elementToUpdate = _this.artists[_this.currentIndex];

            // Kiểm tra xem phần tử có tồn tại không
            if (elementToUpdate) {
                // Cập nhật giá trị của key 'name'
                elementToUpdate.name = update_nameSong.value;
                if(song_thumb != ''){
                    elementToUpdate.image = song_thumb;
                }
                else{
                    elementToUpdate.image = elementToUpdate.image;
                }

                _this.render();
                closeFormUpdateMusic();

            } else {
                console.log('Element not found');
            }
        }

        // xóa ns
        btnDelete.onclick = function() {
            _this.artists.splice(_this.currentIndex, 1);
            _this.render();
            closeForDeleteMusic();
        }

        // thêm ns
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
        
        // xử lý cập nhật ns
        btnAdd.onclick = function(){
            const newSinger = {
                id: 100,
                image: song_thumbAdd,
                name: create_nameSong.value,
            };
            
            _this.artists.push(newSinger);
            closeFormAddMusic();
            _this.render();
        }

    },

    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.artists[this.currentIndex]
            }
        })
    },

    loadSong: function() {
        update_nameSong.value = this.currentSong.name
        update_thumb.src = this.currentSong.image

        delete_nameSong.textContent = this.currentSong.name;
    },

    start: function () {
        this.render();
        this.handleEvents();
        this.defineProperties();
        this.loadSong();
    }
}

app.start();
