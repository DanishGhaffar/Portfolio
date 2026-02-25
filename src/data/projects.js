export const projects = [
  {
    id: 1,
    title: "Swimming Pool Detection via Satellite",
    category: "Computer Vision",
    categoryColor: "cyan",
    description:
      "Trained a custom YOLOv8 model on Google Maps satellite imagery to detect in-ground swimming pools with high precision. Built an end-to-end pipeline covering dataset collection, annotation in Roboflow, model training, and deployment — delivering accurate real-world results.",
    tech: ["Python", "YOLOv8", "Google Maps API", "OpenCV", "Roboflow", "Custom Dataset"],
    images: ["/images/swimming-pool.png"],
    gradient: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6,182,212,0.3)",
    highlights: [
      "Custom satellite image dataset",
      "High-precision pool detection",
      "End-to-end YOLO pipeline",
    ],
    icon: "🛰️",
  },
  {
    id: 2,
    title: "PowerLift — AI Gym Form Analyzer",
    category: "Mobile AI App",
    categoryColor: "orange",
    description:
      "A React Native app leveraging PoseNet for real-time gym pose analysis. Trained a custom model to detect barbell endpoints precisely. Features include live detection, video upload with scoring, and comprehensive analytics dashboards to help users optimize muscle gains.",
    tech: ["React Native", "PoseNet", "TensorFlow", "Custom ML Model", "Video Processing", "Firebase"],
    images: [
      "/images/powerlift-0.png",
      "/images/powerlift-1.jpg",
      "/images/powerlift-2.jpg",
      "/images/powerlift-3.jpg",
      "/images/powerlift-4.jpg",
    ],
    gradient: "from-orange-500 to-red-600",
    glowColor: "rgba(249,115,22,0.3)",
    highlights: [
      "Real-time pose detection",
      "Custom barbell keypoint model",
      "Score & progress analytics",
    ],
    icon: "💪",
  },
  {
    id: 3,
    title: "ConnectHub — Video Calls with Live Voice Translation",
    category: "Full-Stack App",
    categoryColor: "green",
    description:
      "A Google Meet-like video conferencing platform with a breakthrough real-time voice translation feature. Every participant hears conversations in their native language automatically, completely removing language barriers across international calls.",
    tech: ["WebRTC", "Socket.IO", "Google Translate API", "React", "Node.js", "Real-time Audio"],
    images: ["/images/connecthub.png"],
    gradient: "from-green-500 to-teal-600",
    glowColor: "rgba(16,185,129,0.3)",
    highlights: [
      "Google Meet-style WebRTC calls",
      "Real-time voice translation",
      "Native language audio output",
    ],
    icon: "🌐",
  },
  {
    id: 4,
    title: "ANA — Noise Pollution Detection & Classification",
    category: "Mobile AI App",
    categoryColor: "purple",
    description:
      "An ML-powered audio classification system identifying calm, noisy, and extreme noise pollution zones by measuring decibel levels. All readings are geo-visualized on Google Maps, enabling users to plan routes that avoid unhealthy noise environments and stay healthy.",
    tech: ["Flutter", "TensorFlow", "Audio ML", "Google Maps API", "Firebase", "Python"],
    images: ["/images/ana-noise.png", "/images/ana-noise-app.png"],
    gradient: "from-purple-500 to-indigo-600",
    glowColor: "rgba(139,92,246,0.3)",
    highlights: [
      "3-class audio ML classifier",
      "Decibel level measurement",
      "Live Google Maps heatmap",
    ],
    icon: "🔊",
  },
  {
    id: 5,
    title: "BTC Price Prediction — TFT Transformer",
    category: "Deep Learning",
    categoryColor: "yellow",
    description:
      "Implemented a Temporal Fusion Transformer (TFT) architecture for Bitcoin price forecasting, achieving a directional accuracy of 54%. Leveraged multi-horizon time-series analysis with attention mechanisms to capture complex crypto market patterns.",
    tech: ["Python", "TFT Transformer", "PyTorch", "Time Series", "Deep Learning", "Bitcoin"],
    images: ["/images/crypto-1.png", "/images/crypto-2.png", "/images/crypto-3.png"],
    gradient: "from-yellow-400 to-orange-500",
    glowColor: "rgba(234,179,8,0.3)",
    highlights: [
      "54% directional accuracy",
      "Temporal Fusion Transformer",
      "Multi-horizon forecasting",
    ],
    icon: "₿",
  },
  {
    id: 6,
    title: "LostFound — AI-Powered Lost & Found Platform",
    category: "AI Web App",
    categoryColor: "pink",
    description:
      "A smart platform using TinyVLM for intelligent image comparison to match lost items with found ones. AI automatically verifies image similarity and opens a dedicated chat panel between matched users — harnessing vision-language AI to help people recover their belongings.",
    tech: ["TinyVLM", "React", "Node.js", "AI Image Matching", "Chat System", "Computer Vision"],
    images: ["/images/lostfound.jpeg"],
    gradient: "from-pink-500 to-rose-600",
    glowColor: "rgba(236,72,153,0.3)",
    highlights: [
      "TinyVLM image similarity",
      "AI-powered match verification",
      "Real-time chat between users",
    ],
    icon: "🔍",
  },
];

export const stats = [
  { value: "6+", label: "AI Projects Delivered" },
  { value: "5★", label: "Fiverr Rating" },
  { value: "54%", label: "BTC Directional Accuracy" },
  { value: "4+", label: "Domains Mastered" },
];
