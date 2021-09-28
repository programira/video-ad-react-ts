import React, { useEffect } from 'react';
import styles from './VideoAdvertisement.module.css';
import { VideoAd } from "../../types/VideoAd";

const VideoAdvertisement: React.FunctionComponent<VideoAd> = ({ videoLink, isVisible }: VideoAd) => {
  const videoPlayer: HTMLMediaElement = document.getElementById("MyVideo") as HTMLMediaElement;
  // const [videoCurrentTime, setVideoCurrentTime] = useState(0); // Not neccessary to set Current time of video in state

  async function playVideo() {
    try {
      if (isVisible === true) {
        await videoPlayer.play();
        console.log('Video is playing.');
      } else {
        videoPlayer.pause();
        console.log('Video is paused.')
      }

    } catch (err) {
      console.log('Video is not rendered yet.');
    }
  }

  useEffect(() => {
    playVideo();

  }, [isVisible]);

  const changeCurrentTime = () => {
    // setVideoCurrentTime(videoPlayer?.currentTime); // Not neccessary to set Current time of video in state

    if (Math.round(videoPlayer?.currentTime) === Math.round(videoPlayer?.duration * 0.25)) {
      console.log('Video is on 25 %.');
    }
    if (Math.round(videoPlayer?.currentTime) === Math.round(videoPlayer?.duration * 0.5)) {
      console.log('Video is on 50 %.');
    }
    if (Math.round(videoPlayer?.currentTime) === Math.round(videoPlayer?.duration * 0.75)) {
      console.log('Video is on 75 %.');
    }
    if (videoPlayer?.currentTime === videoPlayer?.duration) {
      console.log('Video is on 100 %.');
    }
  };

  return (
    <div className={styles.VideoAdvertisement} data-testid="VideoAdvertisement">
      <video width="320" height="240" muted id="MyVideo" src={videoLink} onTimeUpdate={changeCurrentTime}>
        Your browser does not support the video tag.
      </video>
    </div>
  )

};

export default VideoAdvertisement;

