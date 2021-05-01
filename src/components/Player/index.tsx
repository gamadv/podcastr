import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { usePlayer } from '../../context/PlayerContext';
import { convertDurationToTimeString } from '../../utils';

import MediaButton from '../MediaButton';

import styles from './styles.module.scss';

const Player: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    togglePlay,
    setPlayingState,
    playNext,
    playPrevious,
    hasNext,
    isLooping,
    toggleLoop,
    hasPrevious,
    toggleShuffle,
    isShuffle,
    clearPlayerState
  } = usePlayer();

  const episode = episodeList[currentEpisodeIndex];

  function setupProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  function handleEpisodeEnded() {
    if(hasNext){
      playNext()
    } else {
      clearPlayerState()
    }
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;

    setProgress(amount);
  }

  

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Playing Now" />
        <strong>Trocando agora: {episode?.title}</strong>
      </header>

      {episode ? (
        <div className={styles.currentEpisode}>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <section className={styles.emptyPlayer}>
          <strong>Selecione um podcast para ouvir:</strong>
        </section>
      )}

      <footer className={!episode ? styles.empty : ''}>
        <div className={styles.progress}>
          <span>{convertDurationToTimeString(progress)}</span>
          <div className={styles.slider}>
            {episode ? (
              <Slider
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: '#04d361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: '4px' }}
              />
            ) : (
              <div className={styles.emptySlider} />
            )}
          </div>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </div>

        {episode && (
          <audio
            src={episode.url}
            autoPlay
            loop={isLooping}
            ref={audioRef}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onLoadedMetadata={setupProgressListener}
            onEnded={handleEpisodeEnded}
          />
        )}

        <div className={styles.buttonsContainer}>
          <MediaButton
            className={isShuffle ? styles.isActivate : ''}
            type="button"
            disabled={!episode || episodeList.length === 1}
            onClick={toggleShuffle}
          >
            <img src="/shuffle.svg" alt="Random" />
          </MediaButton>

          <MediaButton
            type="button"
            disabled={!episode || !hasPrevious}
            onClick={playPrevious}
          >
            <img src="/play-previous.svg" alt="Previous Play" />
          </MediaButton>

          <MediaButton
            type="button"
            className={styles.playButton}
            disabled={!episode}
            onClick={togglePlay}
          >
            {isPlaying ? (
              <img src="/pause.svg" alt="Play" />
            ) : (
              <img src="/play.svg" alt="Play" />
            )}
          </MediaButton>

          <MediaButton
            type="button"
            disabled={!episode || !hasNext}
            onClick={playNext}
          >
            <img src="/play-next.svg" alt="Next Play" />
          </MediaButton>

          <MediaButton
            className={isLooping ? styles.isActivate : ''}
            type="button"
            disabled={!episode}
            onClick={toggleLoop}
          >
            <img src="/repeat.svg" alt="Repeat Mode" />
          </MediaButton>
        </div>
      </footer>
    </div>
  );
};

export default Player;
