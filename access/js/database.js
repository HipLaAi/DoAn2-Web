const song = [
    {
        id: 0,
        name: 'Buồn hay vui',
        idSinger: [0,2,11,12,13],
        path: 'access/audio/y2mate.com - BUỒN HAY VUI  VSOUL x MCK x Obito x Ronboogz x Boyzed  Official Audio .mp3',
        image: 'access/image/img square/buonhayvui.jpg',
        view: 218765,
        love: true
    },
    {
        id: 1,
        name: 'Kiểu như tâm tình',
        idSinger: [1],
        path: '/access/audio/y2mate.com - NAMCOCAIN aka NamLee  KIỂU NHƯ TÂM TÌNH  PROD BOYZED   vy gieo đấy .mp3',
        image: '/access/image/img square/kieunhutamtinh.jpg',
        view: 6,
        love: false
    },
    {
        id: 2,
        name: 'Truy lùng',
        idSinger: [1],
        path: '/access/audio/y2mate.com - NAMCOCAIN aka NamLee  TRUY LÙNG  vy gieo đấy .mp3',
        image: '/access/image/img square/truylung.jpg',
        view: 0,
        love: false
    },
    {
        id: 3,
        name: 'Chỉ một đêm nữa thôi',
        idSinger: [2,14],
        path: 'access/audio/y2mate.com _ 06 Chỉ Một Đêm Nữa Thôi  RPT MCK  ft tlinh    99  the album.mp3',
        image: '/access/image/img square/chimotdemnuathoi.jpg ',
        view: 10,
        love: false
    },
    {
        id: 4,
        name: 'Chạy ngay đi',
        idSinger: [3],
        path: 'access/audio/y2mate.com _ Chạy Ngay Đi.mp3',
        image: '/access/image/img square/chayngaydi.jpg',
        view: 1,
        love: false
    },
    {
        id: 5,
        name: 'Chịu cách mình nói thua',
        idSinger: [4,7,15],
        path: 'access/audio/y2mate.com _ Chịu Cách Mình Nói Thua.mp3',
        image: 'access/image/img square/chiucachminhnoithua.jpg',
        view: 123456,
        love: false
    },
    {
        id: 6,
        name: 'Chờ em đến bao giờ',
        idSinger: [5],
        path: 'access/audio/y2mate.com _ Chờ Em Đến Bao Giờ Lofi Ver  Phong Max x Freak D.mp3',
        image: 'access/image/img square/choemdenbaogio.jpg',
        view: 98765,
        love: false
    },
    {
        id: 7,
        name: 'Chúng ta không thuộc về nhau',
        idSinger: [3],
        path: 'access/audio/y2mate.com _ Chúng Ta Không Thuộc Về Nhau.mp3',
        image: 'access/image/img square/chungtakhongthuocvenhau.jpg',
        view: 112,
        love: false
    },
    {
        id: 8,
        name: 'Có một nơi như thế',
        idSinger: [6],
        path: 'access/audio/y2mate.com _ Có Một Nơi Như Thế  Phan Mạnh Quỳnh  AUDIO LYRIC OFFICIAL.mp3',
        image: 'access/image/img square/comotnoinhuthe.jpg',
        view: 29,
        love: false
    },
    {
        id: 9,
        name: 'Sau cơn mưa',
        idSinger: [7,4],
        path: 'access/audio/y2mate.com _ CoolKid  Sau Cơn Mưa ft Rhyder.mp3',
        image: 'access/image/img square/sauconmua.jpg',
        view: 10000,
        love: false
    },
    {
        id: 10,
        name: 'Wish',
        idSinger: [8],
        path: 'access/audio/y2mate.com _ GDUCKY  WISH OFFICIAL MUSIC VIDEO.mp3',
        image: 'access/image/img square/wish.jpg',
        view: 10023,
        love: false
    },
    {
        id: 11,
        name: 'Không thể say',
        idSinger: [9],
        path: 'access/audio/y2mate.com _ HIEUTHUHAI  Không Thể Say prod by Kewtiie l Official Video.mp3',
        image: 'access/image/img square/khongthesay.jpg',
        view: 69,
        love: false
    },
    {
        id: 12,
        name: 'Một bước yêu vạn dặm đau',
        idSinger: [10],
        path: 'access/audio/y2mate.com _ Một Bước Yêu Vạn Dặm Đau Lyrics Video  Mr Siro.mp3',
        image: 'access/image/img square/motbuocyeuvandamdau.jpg',
        view: 59,
        love: false
    },
]

const album = [
    {
        id: 0,
        image: 'access/image/img square/mtp.jpg',
        name: 'm-tp M-TP',
        idSinger: 3,
        like: 2000,
        day: '5/9/2013',
        idSong: [4,7]
    },
    {
        id: 1,
        image: 'access/image/img square/danhdoi.jpg',
        name: 'Đánh đổi',
        idSinger: 11,
        like: 2000,
        day: '29/12/2023',
        idSong: [4,7]
    },
    {
        id: 2,
        image: 'access/image/img square/ai.jpg',
        name: 'Ái',
        idSinger: 14,
        like: 3012022,
        day: '03/01/2022',
        idSong: [4,7]
    },
    {
        id: 3,
        image: 'access/image/img square/aicungphaibatdautudaudo.jpg',
        name: 'Ai cũng phải bắt đầu từ đâu đó',
        idSinger: 9,
        like: 2000,
        day: '02/9/2022',
        idSong: [11]
    },
    {
        id: 4,
        image: 'access/image/img square/99.jpg',
        name: '99%',
        idSinger: 2,
        like: 12102022,
        day: '12/10/2022',
        idSong: [3]
    },
    {
        id: 5,
        image: 'access/image/img square/loichoi.jpg',
        name: 'LOI CHOI',
        idSinger: 16,
        like: 2569,
        day: '5/9/2023',
        idSong: [4,7]
    },
]

const artist = [
    {
        id: 0,
        image: 'access/image/img square/vsoul.jpg',
        name: 'VSOUL',
    },
    {
        id: 1,
        image: 'access/image/img square/namcocain.jpg',
        name: 'Nam Cocain',
    },
    {
        id: 2,
        image: 'access/image/img square/mck.jpeg',
        name: 'MCK',
    },
    {
        id: 3,
        image: 'access/image/img square/makingmyway.jpg',
        name: 'Sơn Tùng MTP',
    },
    {
        id: 4,
        image: 'access/image/img square/rhyder.jpg',
        name: 'Rhyder',
    },
    {
        id: 5,
        image: 'access/image/img square/choemdenbaogio.jpg',
        name: 'Phong Max',
    },
    {
        id: 6,
        image: 'access/image/img square/phanmanhquynh.jpg',
        name: 'Phan Mạnh Quỳnh',
    },
    {
        id: 7,
        image: 'access/image/img square/coolkid.jpg',
        name: 'CoolKid',
    },
    {
        id: 8,
        image: 'access/image/img square/gducky.jpg',
        name: 'GDUCKY',
    },
    {
        id: 9,
        image: 'access/image/img square/khongthesay.jpg',
        name: 'HIEUTHUHAI',
    },
    {
        id: 10,
        image: 'access/image/img square/motbuocyeuvandamdau.jpg',
        name: 'Mr.Siro',
    },
    {
        id: 11,
        image: 'access/image/img square/danhdoi.jpg',
        name: 'Obito',
    },
    {
        id: 12,
        image: 'access/image/img square/ronboogz.jpg',
        name: 'Ronboogz',
    },
    {
        id: 13,
        image: 'access/image/img square/boyzed.jpg',
        name: 'Boyzed',
    },
    {
        id: 14,
        image: 'access/image/img square/tlinh.jpg',
        name: 'TLinh',
    },
    {
        id: 15,
        image: 'access/image/img square/ban.jpg',
        name: 'BAN',
    },
    {
        id: 16,
        image: 'access/image/img square/loichoi.jpg',
        name: 'Wren Evans',
    },
]

const playlist = [
    {
        image: '/access/image/img retangle/baihatnoibat.jpg',
    },
    {
        image: '/access/image/img retangle/nhacgiangsinh.jpg',
    },
    {
        image: '/access/image/img retangle/nghesinoibat.jpg',
    },
    {
        image: '/access/image/img retangle/nhacmoimoituan.jpg',
    },
    {
        image: '/access/image/img retangle/traoluunhachot.jpg',
    },
    {
        image: '/access/image/img retangle/nhacgiangsinhbanron.jpg',
    },
]