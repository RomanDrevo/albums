import React from 'react';
import {Text, View, Image} from 'react-native';
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = ({album}) => {
    console.log(album);
    const {
        headerContentStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{uri: album.thumbnail_image}} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{album.title}</Text>
                    <Text>{album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{uri: album.image}} />
            </CardSection>
            <CardSection>
                <Button />
            </CardSection>
        </Card>
    )
}

const styles = {
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
     fontSize: 18
    },
    thumbnailStyle:{
        width: 50,
        height: 50
    },
    thumbnailContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail;
