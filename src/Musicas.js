const getMusic = id => {
    const music = playlist[id];

    if (music) {
        return music;
    }
    return playlist[0];
}


export const getAllMusics = () => {
    return playlist;
}



export const getPlaylistLength = () => {
    return playlist.length
};


const playlist = [
    {
        name: "Liberdade Provisória",
        src: "liberdade_provisoria",
        artist: "Henrique e Juliano",
        time: "03:02"

    },

    {
        name: "My Truck",
        src: "my_truck",
        artist: "Breland",
        time: "02:43"
    },

    {
        name: "Rednecker",
        src: "rednecker",
        artist: "Hardy",
        time: "03:22"

    }
]


export default getMusic;
