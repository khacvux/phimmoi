import { View } from "../components/Themed";
import tw from "twrnc";
import * as ScreenOrientation from "expo-screen-orientation";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View as DefaultView } from "react-native";
// import { Video } from "expo-av";
import { useRef, useState } from "react";

const PlayerMovieScreen = ({ navigation }) => {
    const video = useRef(null);
    const [status, setStatus] = useState<any>();
    const uri =
        "https://rr3---sn-npoeenlk.c.drive.google.com/videoplayback?expire=1656416007&ei=x666YvacMeOGrvIP2uOAyAQ&ip=2001:ee0:4b47:a820:c9ae:a8a1:b64b:48ba&cp=QVRKWEVfVVBOSFhPOkRBRXdveERhNGVqV01adDlucG9Wanp4aTUzQXo1TmxXaGFmNmk3REd2ZnQ&id=baf4aac54babb17f&itag=22&source=webdrive&requiressl=yes&mh=1d&mm=32&mn=sn-npoeenlk&ms=su&mv=m&mvi=3&pl=48&ttl=transient&susc=dr&driveid=1qa31R6TwWoYgiJ3mMRPKo9FS7sm_A4cR&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=180.302&lmt=1656341977634456&mt=1656401309&subapp=NONE&txp=0011224&sparams=expire%2Cei%2Cip%2Ccp%2Cid%2Citag%2Csource%2Crequiressl%2Cttl%2Csusc%2Cdriveid%2Capp%2Cmime%2Cvprv%2Cprv%2Cdur%2Clmt&sig=AOq0QJ8wRQIhANkohO4qBGZB2fh05hAjpcy51L0VR9EOOwQUZJxA7FjbAiAxesjR-wNv_D9B-3BZz3Zt3opEu3zNVf3QOzzVLjbrQw==&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRgIhAK-XAua0tYonVp3Ld82VytSa4W-emMuMFLWPnYI4Ky6LAiEAzhrVB3-yb9inX7hVJhawxGqjw8DkcblATM4fgGaPlCY=";

    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    const handlePlay = () => {
        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
    };
    return (
        <TouchableOpacity
            style={tw`w-full h-full bg-black items-center justify-center`}
            activeOpacity={0.9}
            onPress={handlePlay}
        >
            {/* <Video
                ref={video}
                style={tw`w-full h-full bg-red-900`}
                source={{
                    // uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
                    uri: 'https://drive.google.com/file/d/1qa31R6TwWoYgiJ3mMRPKo9FS7sm_A4cR/preview'
                }}
                style={tw`w-full h-full`}
                resizeMode="contain"
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                usePoster
                isLooping
            /> */}
            <DefaultView style={tw`absolute top-0 bottom-0 left-0 right-0 items-center justify-center z-100`} >
                {!status.isPlaying ? (
                    <Ionicons name="play" size={50} color="#fff" />
                ) : (
                    <></>
                )}
            </DefaultView>

            <TouchableOpacity
                onPress={() => {
                    ScreenOrientation.lockAsync(
                        ScreenOrientation.OrientationLock.PORTRAIT
                    );
                    navigation.goBack();
                }}
                style={tw`absolute top-5 right-5`}
            >
                <AntDesign name="close" size={25} color="#fff" />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export default PlayerMovieScreen;
