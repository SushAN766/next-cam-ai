"use client"
import React, {useEffect,useRef,useState} from 'react'
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import {load as cocoSSDLoad} from "@tensorflow-models/coco-ssd";
let detectInterval;
const ObjectDetection = () => {
  const [isLoading, setIsLoading] =useState(true);
  const webcamRef =useRef(null);
  const runCoco=async () => {
    setIsLoading(true);
    const net = await cocoSSDLoad();
    setIsLoading(false);

    detectInterval=setInterval(() => {
      //runObjectDetection(net);
    }, 10); 
  };
  const showmyVideo = () => {
    if (
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      const myVideoWidth = webcamRef.current.video.videoWidth;
      const myVideoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = myVideoWidth;
      webcamRef.current.video.height = myVideoHeight;
    }
  };

  useEffect(() => {
    runCoco();
    showmyVideo();
  }, []);

  return (
    <div className="mt-8">
      {isLoading ? (
        <div className="gradient-text">Loading AI Model...</div>
      ) : (
        <div className="relative flex justify-center items-center gradient p-1.5 rounded-md">
          {/* webcam */}
          <Webcam
            ref={webcamRef}
            className="rounded-md w-full lg:h-[720px]"
            muted
          />
          {/* canvas */}
          
        </div>
      )}
    </div>
  );
};

export default ObjectDetection;