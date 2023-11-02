"use client";
import useSound from "use-sound";
import creep from "../assests/creep.mp3";
import creepImg from "../assests/creep.jpeg";
import { useEffect, useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import styles from "./music.module.css";
import Image from "next/image";
import ButtonElement from "../components/ButtonElement";

export default function page() {
  const [isPlaying, setIsPlaying] = useState(false);

  const [time, setTime] = useState({
    min: "",
    sec: "",
  });

  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound(creep);

  useEffect(() => {
    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    setTime({
      min: min,
      sec: secRemain,
    });
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={styles.component}>
      <div className={styles.flexColumn}>
        <Image
          className={`${styles.musicCover} ${isPlaying ? styles.playing : ""}`}
          src={creepImg}
          alt="radiohead-creep"
        />
        <h3 className={styles.title}>Radiohead</h3>
        <p className={styles.subTitle}>Creep</p>
      </div>
      <div className={styles.time}>
        <p>
          {currTime.min}:{currTime.sec}
        </p>
        <p>
          {time.min}:{time.sec}
        </p>
      </div>
      <input
        type="range"
        min="0"
        max={duration / 1000}
        default="0"
        value={seconds}
        className={styles.timeline}
        onChange={(e) => {
          sound.seek([e.target.value]);
        }}
      />
      <div className={styles.controls}>
        <ButtonElement IconElement={<BiSkipPrevious />} />
        {!isPlaying ? (
          <ButtonElement
            IconElement={<AiFillPlayCircle />}
            onClick={playingButton}
          />
        ) : (
          <ButtonElement
            IconElement={<AiFillPauseCircle />}
            onClick={playingButton}
          />
        )}
        <ButtonElement IconElement={<BiSkipPrevious />} />
      </div>
    </div>
  );
}
