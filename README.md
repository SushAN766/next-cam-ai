# AI Object Detection App

This project is an AI-powered object detection application built with **Next.js 14**, **Tailwind CSS**, and **TensorFlow.js** (using the **COCO-SSD** model). It uses the webcam to detect objects and render predictions on a canvas. An alarm is triggered when a person is detected.

## Features

- Object detection using TensorFlow.js COCO-SSD model
- Real-time object detection through webcam
- AI model predictions rendered on an HTML canvas
- Alarm sound when a person is detected

## Tech Stack

- **Next.js 14** for the application framework
- **Tailwind CSS** for styling the UI
- **TensorFlow.js** for running the COCO-SSD model in the browser
- **React** for UI components
- **Webcam** for capturing live video feed

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ai-object-detection-app.git
cd ai-object-detection-app
```
### 2. Install dependencies
Run the following command to install the necessary dependencies:
```bash
npm install

```
### 3. Run the development server
Start the development server:
```bash
npm run dev
```
This will start the app on http://localhost:3000.

## Building the UI

The application is styled using **Tailwind CSS**. Below is the simple structure for the UI:

- **Webcam Feed**: Displays a live webcam stream.
- **Object Detection Result**: Predictions are drawn on a canvas overlaying the webcam feed.
- **Alarm**: Triggers a sound when a "person" is detected.

## Tailwind CSS Configuration

Tailwind CSS is already set up in the project. If you need to configure it further, you can modify the `tailwind.config.js` file.

## Object Detection Component

This component uses **TensorFlow.js** to load the **COCO-SSD** model and run inference on each frame from the webcam feed.

### Webcam Logic

The webcam feed is captured using the `navigator.mediaDevices.getUserMedia()` API, which accesses the device's camera.

```javascript
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
video.srcObject = stream;
```
##Setup the AI Model
To set up the AI model (COCO-SSD), TensorFlow.js is used to load the model and perform real-time object detection.

```javascript
import * as cocoSsd from '@tensorflow-models/coco-ssd';

const model = await cocoSsd.load();
```
##Rendering Predictions on Canvas
Once the model is loaded, predictions are made on each frame, and the results are drawn on a canvas element. This allows users to see the objects detected in real-time.

```javascript

const predictions = await model.detect(video);
predictions.forEach(prediction => {
  context.beginPath();
  context.rect(prediction.bbox[0], prediction.bbox[1], prediction.bbox[2], prediction.bbox[3]);
  context.lineWidth = 2;
  context.strokeStyle = 'red';
  context.fillStyle = 'red';
  context.stroke();
  context.fillText(prediction.class, prediction.bbox[0], prediction.bbox[1] - 10);
});
```
## Playing Alarm on Person Detection
If the model detects a "person" object, an alarm sound is played using the Audio API.

```javascript

if (prediction.class === 'person') {
  const alarm = new Audio('/alarm.mp3');
  alarm.play();
}
```
## Deployment
You can deploy the app to Vercel or any other platform that supports Next.js.

To deploy on Vercel, run the following command:
```bsh
vercel




