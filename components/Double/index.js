"use client";
import styles from "./style.module.scss";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { YouTubeEmbed } from "@next/third-parties/google";

export default function Index({ projects, reversed }) {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let requestAnimationFrameId = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    //Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;

    //Change width of images between 33.33% and 66.66% based on cursor
    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;
    console.log(secondImagePercent);
    firstImage.current.style.width = `${firstImagePercent}%`;
    secondImage.current.style.width = `${secondImagePercent}%`;

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };



  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.double}
    >
      <div ref={firstImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <Link href={projects[0].href}>
            <video muted loop autoPlay playsInline
             onMouseOver={event => event.target.play()}
             onMouseOut={event => event.target.pause()}
             src={`/video/${projects[0].src}` } 
             fill={true}
             alt={"video/mp4"}
             />
            

            {/* <iframe
              width="100%"
              src="https://www.youtube.com/embed/E_Tua-s14ws?enablejsapi=1&loop=1&mute=1&autoplay=1&controls=0&playsinline=1&playlist=E_Tua-s14ws"
              allow="autoplay"
              frameborder="0"
              allowfullscreen
              onLoad={() => {
                const iframe = document.querySelector("iframe");
                const player = new window.YT.Player(iframe, {
                  events: {
                    onStateChange: function (event) {
                      var YTP = event.target;
                      if (event.data === 1) {
                        var remains = YTP.getDuration() - YTP.getCurrentTime();
                        if (this.rewindTO) clearTimeout(this.rewindTO);
                        this.rewindTO = setTimeout(function () {
                          YTP.seekTo(0);
                        }, (remains - 0.1) * 1000);
                      }
                    },
                  },
                });
              }}
            ></iframe> */}
          </Link>
        </div>

        <div className={styles.body}>
          <h3>{projects[0].name}</h3>
          <p>{projects[0].description}</p>
          <p>{projects[0].year}</p>
        </div>
      </div>

      <div ref={secondImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <Link href={projects[1].href}>
            <video
              muted
              loop
              autoPlay
              playsInline
              onMouseOver={(event) => event.target.play()}
              onMouseOut={(event) => event.target.pause()}
              src={`/video/${projects[1].src}`}
              fill={true}
              alt={"video/mp4"}
            />
          </Link>
        </div>
        <div className={styles.body}>
          <h3>{projects[1].name}</h3>
          <p>{projects[1].description}</p>
          <p>{projects[1].year}</p>
        </div>
      </div>
    </div>
  );
}
