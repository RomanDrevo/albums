import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from "./AlbumDetail";

const AlbumList = () => {
    const {viewStyle} = styles;

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => setAlbums(response.data))
    }, [])

    return (
        <ScrollView>
            {
                albums.map(album => <AlbumDetail key={album.title} album={album}/>)
            }
        </ScrollView>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
    }
}

export default AlbumList;
